'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import SectionReveal from './SectionReveal'

// Target: 26 September 2026, 8:00 PM Pakistan Standard Time (UTC+5)
const TARGET = new Date('2026-09-26T20:00:00+05:00')

function getTimeLeft() {
  const diff = TARGET.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

interface UnitProps {
  value: number
  label: string
  accent?: boolean
}

function Unit({ value, label, accent }: UnitProps) {
  const display = pad(value)

  return (
    <div
      className="flex flex-col items-center gap-2 flex-1"
      style={{
        background: accent
          ? 'rgba(240, 200, 220, 0.28)'
          : 'rgba(185, 220, 240, 0.32)',
        border: accent
          ? '1px solid rgba(230, 185, 210, 0.55)'
          : '1px solid rgba(160, 210, 235, 0.55)',
        borderRadius: 18,
        padding: '18px 8px 14px',
        boxShadow: '0 2px 16px rgba(140, 180, 210, 0.08)',
      }}
    >
      {/* Animated number */}
      <div style={{ position: 'relative', height: 52, overflow: 'hidden', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <AnimatePresence mode="popLayout">
          <motion.span
            key={display}
            className="font-serif italic text-[#1E2D3A]"
            style={{ fontSize: 'clamp(34px, 9vw, 44px)', lineHeight: 1, position: 'absolute' }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0,  opacity: 1 }}
            exit={{   y: -20, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Label */}
      <p
        className="font-sans uppercase tracking-[0.28em]"
        style={{ fontSize: 9, color: accent ? '#C4A4B2' : '#7A9EBA' }}
      >
        {label}
      </p>
    </div>
  )
}

export default function CountdownTimer() {
  const [time, setTime] = useState(getTimeLeft)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  if (!mounted) return null

  return (
    <section className="px-6 py-20 flex flex-col items-center text-center">
      <SectionReveal>
        <div className="w-full max-w-[370px] mx-auto space-y-7">

          {/* Header */}
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-3" aria-hidden="true">
              <div className="w-7 h-px bg-[#DCEFF7]" />
              <span className="text-[#C8D8E0] text-[10px]">✦</span>
              <div className="w-7 h-px bg-[#DCEFF7]" />
            </div>
            <p className="font-sans text-[10px] tracking-[0.38em] uppercase text-[#8BA7B8]">
              Counting Down
            </p>
            <p className="font-serif text-[22px] italic text-[#1E2D3A]">
              Until we say <em>yes</em>
            </p>
          </div>

          {/* Timer grid */}
          <div className="flex gap-3">
            <Unit value={time.days}    label="Days"    />
            <Unit value={time.hours}   label="Hours"   accent />
            <Unit value={time.minutes} label="Minutes" />
            <Unit value={time.seconds} label="Seconds" accent />
          </div>

          {/* Date reminder */}
          <motion.p
            className="font-sans text-[11px] tracking-[0.22em] text-[#8BA7B8]"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            26 September 2026 · 8:00 PM
          </motion.p>

        </div>
      </SectionReveal>
    </section>
  )
}
