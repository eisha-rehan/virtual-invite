'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const BPM  = 80
const B    = 60 / BPM

// Melody in C major — bright, romantic, flowing
const MELODY: [number, number, number][] = [
  [523.25, 0,    0.5],  // C5
  [587.33, 0.5,  0.5],  // D5
  [659.25, 1,    1  ],  // E5
  [587.33, 2,    0.5],  // D5
  [523.25, 2.5,  0.5],  // C5
  [493.88, 3,    1  ],  // B4

  [440.00, 4,    0.5],  // A4
  [493.88, 4.5,  0.5],  // B4
  [523.25, 5,    1  ],  // C5
  [587.33, 6,    0.5],  // D5
  [659.25, 6.5,  0.5],  // E5
  [523.25, 7,    1  ],  // C5

  [392.00, 8,    0.5],  // G4
  [440.00, 8.5,  0.5],  // A4
  [493.88, 9,    1  ],  // B4
  [523.25, 10,   0.5],  // C5
  [659.25, 10.5, 0.5],  // E5
  [587.33, 11,   1  ],  // D5

  [523.25, 12,   0.75], // C5
  [493.88, 12.75,0.25], // B4
  [440.00, 13,   0.5 ], // A4
  [392.00, 13.5, 0.5 ], // G4
  [349.23, 14,   1   ], // F4
  [392.00, 15,   1   ], // G4
]

// Gentle arpeggios
const PADS: [number, number, number][] = [
  [130.81, 0,  0.4], [261.63, 0.5, 0.4], [329.63, 1, 0.4], [261.63, 1.5, 0.4], // C
  [130.81, 2,  0.4], [261.63, 2.5, 0.4], [329.63, 3, 0.4], [261.63, 3.5, 0.4],

  [110.00, 4,  0.4], [220.00, 4.5, 0.4], [277.18, 5, 0.4], [220.00, 5.5, 0.4], // Am
  [110.00, 6,  0.4], [220.00, 6.5, 0.4], [277.18, 7, 0.4], [220.00, 7.5, 0.4],

  [98.000, 8,  0.4], [196.00, 8.5, 0.4], [246.94, 9, 0.4], [196.00, 9.5, 0.4], // G
  [98.000, 10, 0.4], [196.00,10.5, 0.4], [246.94,11, 0.4], [196.00,11.5, 0.4],

  [87.307, 12, 0.4], [174.61,12.5, 0.4], [220.00,13, 0.4], [174.61,13.5, 0.4], // F
  [87.307, 14, 0.4], [174.61,14.5, 0.4], [220.00,15, 0.4], [174.61,15.5, 0.4],
]

const LOOP_BEATS = 16

function scheduleNote(
  ctx: AudioContext,
  master: GainNode,
  freq: number,
  startTime: number,
  duration: number,
  volume: number
) {
  const osc  = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.connect(gain)
  gain.connect(master)
  osc.type = 'sine'
  osc.frequency.value = freq
  gain.gain.setValueAtTime(0, startTime)
  gain.gain.linearRampToValueAtTime(volume, startTime + 0.04)
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration * B * 0.88)
  osc.start(startTime)
  osc.stop(startTime + duration * B + 0.1)
}

function scheduleLoop(ctx: AudioContext, master: GainNode, offset: number) {
  MELODY.forEach(([f, beat, dur]) =>
    scheduleNote(ctx, master, f, offset + beat * B, dur, 0.22)
  )
  PADS.forEach(([f, beat, dur]) =>
    scheduleNote(ctx, master, f, offset + beat * B, dur, 0.06)
  )
}

export default function BackgroundMusic({ playing }: { playing: boolean }) {
  const ctxRef     = useRef<AudioContext | null>(null)
  const masterRef  = useRef<GainNode | null>(null)
  const primedRef  = useRef(false)
  const startedRef = useRef(false)
  const [muted, setMuted] = useState(false)

  // Phase 1 — prime AudioContext on very first user gesture (during envelope)
  useEffect(() => {
    function prime() {
      if (primedRef.current) return
      primedRef.current = true
      const ctx = new (window.AudioContext || (window as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext)()
      ctx.resume()
      const master = ctx.createGain()
      master.gain.value = 0
      master.connect(ctx.destination)
      ctxRef.current   = ctx
      masterRef.current = master
    }
    document.addEventListener('click',      prime, { once: true })
    document.addEventListener('touchstart', prime, { once: true })
    return () => {
      document.removeEventListener('click',      prime)
      document.removeEventListener('touchstart', prime)
    }
  }, [])

  // Phase 2 — as soon as envelope completes, start music immediately
  useEffect(() => {
    if (!playing || startedRef.current) return
    startedRef.current = true

    function doStart(ctx: AudioContext, master: GainNode) {
      master.gain.setValueAtTime(0, ctx.currentTime)
      master.gain.linearRampToValueAtTime(1, ctx.currentTime + 1)
      const loopSec = LOOP_BEATS * B
      scheduleLoop(ctx, master, ctx.currentTime + 0.05)
      scheduleLoop(ctx, master, ctx.currentTime + 0.05 + loopSec)
      let next = ctx.currentTime + 0.05 + loopSec * 2
      const iv = setInterval(() => {
        if (!ctxRef.current) { clearInterval(iv); return }
        scheduleLoop(ctxRef.current, master, next)
        next += loopSec
      }, (loopSec - 0.5) * 1000)
    }

    if (ctxRef.current && masterRef.current) {
      // Already primed — start instantly
      ctxRef.current.resume()
      doStart(ctxRef.current, masterRef.current)
    } else {
      // Not yet primed (edge case) — start on next interaction
      function startNow() {
        const ctx = new (window.AudioContext || (window as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext)()
        ctx.resume()
        const master = ctx.createGain()
        master.connect(ctx.destination)
        ctxRef.current   = ctx
        masterRef.current = master
        doStart(ctx, master)
      }
      document.addEventListener('click',      startNow, { once: true })
      document.addEventListener('touchstart', startNow, { once: true })
    }

    return () => { ctxRef.current?.close() }
  }, [playing])

  function toggleMute() {
    if (!masterRef.current || !ctxRef.current) return
    const gain = masterRef.current.gain
    const now  = ctxRef.current.currentTime
    gain.linearRampToValueAtTime(muted ? 1 : 0, now + 0.4)
    setMuted(m => !m)
  }

  if (!playing) return null

  return (
    <motion.button
      onClick={toggleMute}
      className="fixed bottom-6 right-5 z-50 flex items-center justify-center rounded-full"
      style={{
        width: 42, height: 42,
        background: 'rgba(220, 239, 247, 0.78)',
        border: '1px solid rgba(160, 210, 235, 0.6)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 16px rgba(140, 180, 210, 0.2)',
        cursor: 'pointer',
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      whileTap={{ scale: 0.9 }}
      aria-label={muted ? 'Unmute music' : 'Mute music'}
    >
      <span style={{ fontSize: 18 }}>{muted ? '🔇' : '🎵'}</span>
    </motion.button>
  )
}
