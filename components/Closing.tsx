'use client'

import { motion } from 'framer-motion'
import SectionReveal from './SectionReveal'

export default function Closing() {
  return (
    <section className="px-8 py-20 pb-36 flex flex-col items-center text-center">
      <SectionReveal>
        <div className="max-w-[300px] mx-auto space-y-8">

          {/* Top ornament */}
          <div className="flex items-center justify-center gap-4" aria-hidden="true">
            <div className="w-10 h-px bg-[#DCEFF7]" />
            <span className="text-[#C4A4B2] text-[11px]">✦</span>
            <div className="w-10 h-px bg-[#DCEFF7]" />
          </div>

          {/* Closing message */}
          <p className="font-serif text-[24px] italic text-[#3A5060] leading-snug">
            Save the date and join us for a night to remember.
          </p>

          {/* Dress code card */}
          <div
            className="rounded-2xl px-6 py-7 space-y-3"
            style={{
              background: 'rgba(240, 200, 220, 0.28)',
              border: '1px solid rgba(230, 185, 210, 0.55)',
            }}
          >
            <div className="flex items-center justify-center gap-2">
              <span className="text-[20px]" aria-hidden="true">👗</span>
              <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-[#C4A4B2]">
                Dress Code
              </p>
              <span className="text-[20px]" aria-hidden="true">👔</span>
            </div>
            <p className="font-serif text-[24px] italic text-[#2C3E50]">
              Pastels
            </p>
            <p className="font-sans text-[10px] tracking-[0.18em] text-[#C4A4B2]">
              Soft tones · Elegant & festive
            </p>
          </div>

          {/* Final ornament */}
          <motion.div
            className="flex items-center justify-center gap-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
          >
            <span className="text-[#DCEFF7] text-[10px]">✦</span>
            <span className="text-[#F8E7EE] text-[12px]">✦</span>
            <span className="text-[#DCEFF7] text-[10px]">✦</span>
          </motion.div>

        </div>
      </SectionReveal>
    </section>
  )
}
