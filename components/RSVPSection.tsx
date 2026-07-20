'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import SectionReveal from './SectionReveal'

interface Ripple {
  id: number
  x: number
  y: number
}

export default function RSVPSection() {
  const [ripples, setRipples] = useState<Ripple[]>([])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const id = Date.now()
    setRipples((prev) => [
      ...prev,
      { id, x: e.clientX - rect.left, y: e.clientY - rect.top },
    ])
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 700)
    // TODO: wire up RSVP action here (e.g. open WhatsApp, form, or link)
  }

  return (
    <section className="px-8 py-24 flex flex-col items-center text-center">
      <SectionReveal>
        <div className="max-w-[320px] mx-auto space-y-9">
          {/* Header */}
          <div className="space-y-3">
            <p className="font-sans text-[10px] tracking-[0.38em] uppercase text-[#8BA7B8]">
              Kindly Respond
            </p>
            <h3 className="font-serif text-[28px] italic text-[#1E2D3A]">
              Will you join us?
            </h3>
          </div>

          {/* RSVP Button */}
          <div className="flex justify-center">
            <button
              onClick={handleClick}
              className="relative overflow-hidden rounded-full font-sans text-[11px] tracking-[0.3em] uppercase text-white transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8BA7B8] focus-visible:ring-offset-2"
              style={{
                padding: '16px 48px',
                background:
                  'linear-gradient(135deg, #7A9BAC 0%, #A4C4D4 50%, #7A9BAC 100%)',
                backgroundSize: '200% auto',
                boxShadow: '0 6px 32px rgba(120, 160, 185, 0.48)',
                animation: 'shimmer 3s linear infinite',
              }}
              aria-label="RSVP to the engagement ceremony"
            >
              {/* Ripple effects */}
              {ripples.map((r) => (
                <motion.span
                  key={r.id}
                  className="absolute rounded-full bg-white pointer-events-none"
                  style={{ left: r.x, top: r.y, translateX: '-50%', translateY: '-50%' }}
                  initial={{ width: 0, height: 0, opacity: 0.45 }}
                  animate={{ width: 220, height: 220, opacity: 0 }}
                  transition={{ duration: 0.65, ease: 'easeOut' }}
                />
              ))}

              <span className="relative z-10">RSVP</span>
            </button>
          </div>

          <p className="font-sans text-[11px] text-[#A8BCC8] tracking-wide">
            Please respond at your earliest convenience
          </p>
        </div>
      </SectionReveal>
    </section>
  )
}
