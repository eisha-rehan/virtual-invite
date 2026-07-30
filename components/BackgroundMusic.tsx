'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function BackgroundMusic({ playing }: { playing: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [muted, setMuted] = useState(false)

  useEffect(() => {
    const audio = new Audio('/music.mpeg')
    audio.loop    = true
    audio.volume  = 0
    audio.preload = 'auto'
    audioRef.current = audio
    return () => { audio.pause() }
  }, [])

  useEffect(() => {
    if (!playing) return
    const audio = audioRef.current
    if (!audio) return

    function fadeIn() {
      let vol = 0
      const iv = setInterval(() => {
        vol = Math.min(vol + 0.02, 1.0)
        audio!.volume = vol
        if (vol >= 1.0) clearInterval(iv)
      }, 80)
    }

    const promise = audio.play()
    if (promise !== undefined) {
      promise.then(() => fadeIn()).catch(() => {
        // Autoplay blocked — wait for first tap
        function onGesture() {
          audio.play().then(fadeIn).catch(() => {})
        }
        document.addEventListener('click',      onGesture, { once: true })
        document.addEventListener('touchstart', onGesture, { once: true })
      })
    } else {
      fadeIn()
    }
  }, [playing])

  function toggleMute() {
    if (!audioRef.current) return
    if (muted) {
      audioRef.current.volume = 1.0
    } else {
      audioRef.current.volume = 0
    }
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
