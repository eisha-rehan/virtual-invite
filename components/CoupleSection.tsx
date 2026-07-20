'use client'

import { motion } from 'framer-motion'
import SectionReveal from './SectionReveal'
import ShimmeringHeart from './ShimmeringHeart'

export default function CoupleSection() {
  return (
    <section className="px-6 py-24 flex flex-col items-center text-center">
      <SectionReveal className="w-full">
        {/* Animated glow ring behind card */}
        <motion.div
          className="absolute inset-0 rounded-[28px] pointer-events-none"
          style={{ margin: '0 auto', maxWidth: 370, position: 'relative' }}
          animate={{ boxShadow: ['0 0 0px 0px rgba(160,210,240,0)', '0 0 40px 12px rgba(160,210,240,0.28)', '0 0 0px 0px rgba(160,210,240,0)'] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />
        <div
          className="relative w-full max-w-[370px] mx-auto rounded-[28px] px-10 py-14 overflow-hidden"
          style={{
            background: 'rgba(185, 220, 240, 0.38)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(160, 210, 235, 0.7)',
            boxShadow:
              '0 4px 40px rgba(100, 160, 200, 0.16), inset 0 1px 0 rgba(255,255,255,0.5)',
          }}
        >
          {/* Ambient blobs inside card */}
          <div
            className="absolute -top-[30%] -right-[20%] w-[55%] h-[55%] rounded-full blur-[50px] opacity-35 pointer-events-none"
            style={{ background: '#F8E7EE' }}
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-[20%] -left-[15%] w-[45%] h-[45%] rounded-full blur-[50px] opacity-25 pointer-events-none"
            style={{ background: '#DCEFF7' }}
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            <h2
              className="font-serif italic text-[#1E2D3A] leading-none"
              style={{ fontSize: 'clamp(54px, 16vw, 68px)' }}
            >
              Shaheer
            </h2>

            <ShimmeringHeart size="md" />

            <h2
              className="font-serif italic text-[#1E2D3A] leading-none"
              style={{ fontSize: 'clamp(54px, 16vw, 68px)' }}
            >
              Hafsa
            </h2>
          </div>
        </div>
      </SectionReveal>
    </section>
  )
}
