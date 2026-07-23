'use client'

import { motion } from 'framer-motion'

const ease = [0.4, 0, 0.2, 1] as const


/* ── Subtle floral corner branches ───────────────────────────────── */
function FloralCornerTL() {
  return (
    <motion.svg
      viewBox="0 0 120 120"
      width="120" height="120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-0"
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.8 }}
    >
      {/* Main branch */}
      <path d="M 10 10 Q 40 30, 80 80" stroke="#DCEFF7" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      {/* Sub branch 1 */}
      <path d="M 30 28 Q 20 10, 10 4" stroke="#DCEFF7" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
      {/* Sub branch 2 */}
      <path d="M 52 48 Q 36 38, 28 20" stroke="#DCEFF7" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
      {/* Sub branch 3 */}
      <path d="M 70 70 Q 50 58, 48 42" stroke="#DCEFF7" strokeWidth="1" strokeLinecap="round" opacity="0.35"/>
      {/* Small leaf-dots */}
      <circle cx="10" cy="4" r="2.5" fill="#DCEFF7" opacity="0.4"/>
      <circle cx="28" cy="20" r="2" fill="#F8E7EE" opacity="0.5"/>
      <circle cx="48" cy="42" r="2.5" fill="#DCEFF7" opacity="0.35"/>
      <circle cx="80" cy="80" r="3" fill="#F8E7EE" opacity="0.3"/>
    </motion.svg>
  )
}

function FloralCornerTR() {
  return (
    <motion.svg
      viewBox="0 0 120 120"
      width="120" height="120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 right-0"
      aria-hidden="true"
      style={{ transform: 'scaleX(-1)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.9 }}
    >
      <path d="M 10 10 Q 40 30, 80 80" stroke="#F8E7EE" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <path d="M 30 28 Q 20 10, 10 4" stroke="#F8E7EE" strokeWidth="1" strokeLinecap="round" opacity="0.35"/>
      <path d="M 52 48 Q 36 38, 28 20" stroke="#F8E7EE" strokeWidth="1" strokeLinecap="round" opacity="0.35"/>
      <path d="M 70 70 Q 50 58, 48 42" stroke="#F8E7EE" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
      <circle cx="10" cy="4" r="2.5" fill="#F8E7EE" opacity="0.4"/>
      <circle cx="28" cy="20" r="2" fill="#DCEFF7" opacity="0.4"/>
      <circle cx="48" cy="42" r="2.5" fill="#F8E7EE" opacity="0.3"/>
      <circle cx="80" cy="80" r="3" fill="#DCEFF7" opacity="0.25"/>
    </motion.svg>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-8 py-20 overflow-hidden">

      {/* ── Large blurred background blobs ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div style={{ position: 'absolute', top: '-18%', left: '-22%', width: '70%', height: '70%', borderRadius: '50%', background: '#B8D8EE', opacity: 0.75, filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '-18%', right: '-22%', width: '60%', height: '60%', borderRadius: '50%', background: '#F0C8DC', opacity: 0.65, filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', top: '35%', left: '50%', width: '45%', height: '45%', borderRadius: '50%', background: '#C8E5F5', opacity: 0.45, filter: 'blur(60px)', transform: 'translateX(-50%)' }} />
      </div>

      {/* ── Floral corner decorations ── */}
      <FloralCornerTL />
      <FloralCornerTR />

      {/* ── Pulse rings ── */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: '50%', left: '50%',
            width: 200, height: 200,
            marginTop: -100, marginLeft: -100,
            border: '1px solid rgba(180, 215, 240, 0.45)',
          }}
          animate={{ scale: [1, 2.8], opacity: [0.5, 0] }}
          transition={{
            duration: 4.5,
            delay: i * 1.5,
            repeat: Infinity,
            ease: 'easeOut',
          }}
          aria-hidden="true"
        />
      ))}

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col items-center text-center gap-4 w-full max-w-xs mx-auto">

        {/* Eyebrow */}
        <motion.p
          className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#8BA7B8]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
        >
          An Invitation
        </motion.p>

        {/* Thin line */}
        <motion.div
          className="h-px bg-[#DCEFF7]"
          initial={{ width: 0 }}
          animate={{ width: 40 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        />

        {/* Names + heart */}
        <div className="flex flex-col items-center gap-4 mt-3">
          <motion.h1
            className="font-serif italic text-[#1E2D3A] leading-none"
            style={{ fontSize: 'clamp(62px, 19vw, 82px)', letterSpacing: '-0.01em' }}
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.38, ease }}
          >
            Shaheer
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.72, type: 'spring', stiffness: 210, damping: 14 }}
          >
            <p className="font-serif italic" style={{ fontSize: 'clamp(48px, 14vw, 64px)', color: '#C4A4B2', lineHeight: 1 }}>&amp;</p>
          </motion.div>

          <motion.h1
            className="font-serif italic text-[#1E2D3A] leading-none"
            style={{ fontSize: 'clamp(62px, 19vw, 82px)', letterSpacing: '-0.01em' }}
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.38, ease }}
          >
            Hafsa
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.div
          className="flex flex-col items-center gap-2 -mt-1"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease }}
        >
          <p className="font-sans text-[11px] tracking-[0.32em] uppercase text-[#5A7285]">
            We&apos;re Getting Engaged
          </p>
          <p className="font-serif text-xl italic text-[#8BA7B8]">
            26 September 2026
          </p>
        </motion.div>

        {/* Ornament */}
        <motion.div
          className="flex items-center gap-3 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.25 }}
          aria-hidden="true"
        >
          <div className="w-7 h-px bg-[#DCEFF7]" />
          <span className="text-[#DCEFF7] text-[10px]">✦</span>
          <div className="w-7 h-px bg-[#DCEFF7]" />
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="mt-8 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-[#A8BCC8]">
            Scroll to begin
          </p>
          <motion.div
            className="w-px h-8 rounded-full"
            style={{ background: 'linear-gradient(to bottom, #DCEFF7, transparent)' }}
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
