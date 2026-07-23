'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

type Phase = 0 | 1 | 2 | 3 | 4

// ── Layout constants ──────────────────────────────────────────────
const EW = 310        // envelope width
const EH = 235        // envelope height
const RIBBON_Y = 98   // ribbon top edge (inside envelope)
const RIBBON_H = 16   // ribbon thickness
const BOW_W = 210     // bow SVG width
const BOW_H = 106     // bow SVG height
const BOW_TOP = RIBBON_Y - 60  // bow top edge (above ribbon)
// ─────────────────────────────────────────────────────────────────

export default function EnvelopeOpening({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<Phase>(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 1100),   // bow unties
      setTimeout(() => setPhase(2), 2300),   // flap opens
      setTimeout(() => setPhase(3), 3300),   // card rises
      setTimeout(() => setPhase(4), 4400),   // fade out
      setTimeout(() => setVisible(false), 5000),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #E8F3FA 0%, #EAF5FB 45%, #EDF0F7 100%)' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Ambient blobs */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div style={{ position: 'absolute', top: '-18%', left: '-18%', width: '58%', height: '58%', borderRadius: '50%', background: '#DCEFF7', opacity: 0.45, filter: 'blur(80px)' }} />
            <div style={{ position: 'absolute', bottom: '-18%', right: '-18%', width: '52%', height: '52%', borderRadius: '50%', background: '#F8E7EE', opacity: 0.42, filter: 'blur(80px)' }} />
          </div>

          {/* Scene wrapper — fades & shrinks on exit */}
          <motion.div
            style={{ position: 'relative', width: EW, height: EH }}
            animate={phase >= 4 ? { scale: 0.88, opacity: 0 } : { scale: 1, opacity: 1 }}
            transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          >

            {/* ── Envelope body ──────────────────────────────── */}
            <div style={{
              position: 'absolute', inset: 0,
              borderRadius: 22,
              background: 'linear-gradient(160deg, #EAF5FB 0%, #DCEFF7 100%)',
              boxShadow: '0 30px 80px rgba(140,180,210,0.16), 0 8px 24px rgba(140,180,210,0.1)',
              border: '1px solid rgba(220,239,247,0.9)',
              overflow: 'hidden',
            }}>
              {/* inside V-crease left */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '50%', height: '55%', background: 'linear-gradient(135deg, rgba(220,239,247,0.14), transparent)', clipPath: 'polygon(0 100%, 100% 0, 0 0)' }} />
              {/* inside V-crease right */}
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: '50%', height: '55%', background: 'linear-gradient(225deg, rgba(248,231,238,0.12), transparent)', clipPath: 'polygon(100% 100%, 0 0, 100% 0)' }} />
            </div>

            {/* ── Ribbon — left half ──────────────────────────── */}
            <motion.div
              style={{
                position: 'absolute',
                left: 0, top: RIBBON_Y,
                width: EW / 2, height: RIBBON_H,
                background: 'linear-gradient(90deg, #AECAD8, #DCEFF7)',
                borderRadius: '4px 0 0 4px',
                zIndex: 5,
                originX: 1, originY: 0.5,
              }}
              animate={phase >= 1
                ? { x: -(EW / 2 + 20), opacity: 0, rotate: -4 }
                : { x: 0, opacity: 1, rotate: 0 }
              }
              transition={{ duration: 0.65, delay: 0.05, ease: [0.55, 0, 0.45, 1] }}
            />

            {/* ── Ribbon — right half ─────────────────────────── */}
            <motion.div
              style={{
                position: 'absolute',
                left: EW / 2, top: RIBBON_Y,
                width: EW / 2, height: RIBBON_H,
                background: 'linear-gradient(90deg, #F8E7EE, #F0D8E6)',
                borderRadius: '0 4px 4px 0',
                zIndex: 5,
                originX: 0, originY: 0.5,
              }}
              animate={phase >= 1
                ? { x: EW / 2 + 20, opacity: 0, rotate: 4 }
                : { x: 0, opacity: 1, rotate: 0 }
              }
              transition={{ duration: 0.65, delay: 0.05, ease: [0.55, 0, 0.45, 1] }}
            />

            {/* ── Bow + wax seal ──────────────────────────────── */}
            <motion.div
              style={{
                position: 'absolute',
                left: EW / 2 - BOW_W / 2,
                top: BOW_TOP,
                width: BOW_W,
                height: BOW_H,
                zIndex: 7,
              }}
              /* Gentle idle pulse before untying */
              animate={phase === 0
                ? { scale: [1, 1.04, 1], y: [0, -3, 0] }
                : phase >= 1
                  ? { scale: 0.1, opacity: 0, y: -18 }
                  : { scale: 1, opacity: 1, y: 0 }
              }
              transition={phase === 0
                ? { duration: 2.2, repeat: Infinity, ease: 'easeInOut' }
                : { duration: 0.45, ease: [0.55, 0, 1, 1] }
              }
            >
              <svg viewBox="0 0 210 106" width={BOW_W} height={BOW_H} fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="bl" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#AECAD8" stopOpacity="0.95"/>
                    <stop offset="100%" stopColor="#DCEFF7" stopOpacity="0.8"/>
                  </linearGradient>
                  <linearGradient id="br" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#F0D8E6" stopOpacity="0.95"/>
                    <stop offset="100%" stopColor="#F8E7EE" stopOpacity="0.8"/>
                  </linearGradient>
                </defs>

                {/* Left bow loop */}
                <path d="M 105 52 C 85 34, 48 14, 16 30 C 2 37, 2 56, 18 63 C 52 74, 88 63, 105 52Z" fill="url(#bl)"/>
                {/* Left loop highlight */}
                <path d="M 105 52 C 90 40, 60 24, 32 30 C 60 22, 92 42, 105 50Z" fill="white" opacity="0.38"/>
                {/* Left loop inner shadow */}
                <path d="M 18 63 C 52 74, 88 63, 105 52" stroke="rgba(100,160,200,0.14)" strokeWidth="2" fill="none"/>

                {/* Right bow loop */}
                <path d="M 105 52 C 125 34, 162 14, 194 30 C 208 37, 208 56, 192 63 C 158 74, 122 63, 105 52Z" fill="url(#br)"/>
                {/* Right loop highlight */}
                <path d="M 105 52 C 120 40, 150 24, 178 30 C 150 22, 118 42, 105 50Z" fill="white" opacity="0.38"/>
                <path d="M 192 63 C 158 74, 122 63, 105 52" stroke="rgba(200,130,160,0.12)" strokeWidth="2" fill="none"/>

                {/* Left tail */}
                <path d="M 99 58 Q 84 80, 74 106" stroke="#DCEFF7" strokeWidth="11" strokeLinecap="round"/>
                <path d="M 97 59 Q 82 81, 72 107" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.42"/>

                {/* Right tail */}
                <path d="M 111 58 Q 126 80, 136 106" stroke="#F8E7EE" strokeWidth="11" strokeLinecap="round"/>
                <path d="M 113 59 Q 128 81, 138 107" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.42"/>

                {/* Centre knot */}
                <ellipse cx="105" cy="54" rx="16" ry="12" fill="#C2D6E4" opacity="0.95"/>
                <ellipse cx="105" cy="52" rx="10" ry="7" fill="white" opacity="0.52"/>
                <ellipse cx="103" cy="51" rx="5" ry="3.5" fill="white" opacity="0.28"/>
              </svg>
            </motion.div>

            {/* ── Wax seal (on envelope body, below ribbon) ───── */}
            <motion.div
              style={{
                position: 'absolute',
                left: EW / 2 - 28,
                top: RIBBON_Y + RIBBON_H + 22,
                zIndex: 8,
              }}
              animate={phase >= 2
                ? { opacity: 0, scale: 0.75, y: -6 }
                : { opacity: 1, scale: 1, y: 0 }
              }
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                background: 'linear-gradient(135deg, #C4A4B2, #8BA7B8)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 6px 18px rgba(196,164,178,0.38), inset 0 1px 0 rgba(255,255,255,0.2)',
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 13, fontStyle: 'italic', color: 'white', letterSpacing: '0.06em',
                userSelect: 'none',
              }}>
                S&H
              </div>
            </motion.div>

            {/* ── Invitation card rises from envelope ─────────── */}
            <motion.div
              style={{
                position: 'absolute',
                left: 18, right: 18,
                zIndex: 20,
                borderRadius: 14,
                background: 'linear-gradient(155deg, #FAFCFE, #F8F9FB)',
                border: '1px solid rgba(220,239,247,0.75)',
                boxShadow: '0 -12px 32px rgba(140,180,210,0.13), 0 4px 16px rgba(140,180,210,0.08)',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                justifyContent: 'center', gap: 3, padding: '20px 16px',
              }}
              initial={{ y: EH + 20, opacity: 0 }}
              animate={phase >= 3 ? { y: -105, opacity: 1 } : { y: EH + 20, opacity: 0 }}
              transition={{ duration: 0.95, ease: [0.4, 0, 0.2, 1] }}
            >
              <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 26, fontStyle: 'italic', color: '#1E2D3A', lineHeight: 1.0, letterSpacing: '-0.01em' }}>Shaheer</p>
              <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 26, fontStyle: 'italic', color: '#C4A4B2', margin: '4px 0', lineHeight: 1 }}>&amp;</p>
              <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 26, fontStyle: 'italic', color: '#1E2D3A', lineHeight: 1.0, letterSpacing: '-0.01em' }}>Hafsa</p>
              <div style={{ width: 36, height: 1, background: '#DCEFF7', margin: '10px 0 8px' }} />
              <p style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif', fontSize: 9, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#8BA7B8' }}>
                Engagement · 2026
              </p>
            </motion.div>

            {/* ── Envelope flap (3-D fold open) ──────────────── */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 148, perspective: 560, zIndex: 9 }}>
              <motion.div
                style={{
                  width: '100%', height: '100%',
                  background: 'linear-gradient(175deg, #C4E0F0 0%, #DCEFF7 55%, #EBF6FC 100%)',
                  clipPath: 'polygon(0 0, 100% 0, 50% 70%)',
                  transformOrigin: 'top center',
                  borderRadius: '22px 22px 0 0',
                  boxShadow: 'inset 0 -4px 10px rgba(140,180,210,0.12)',
                }}
                animate={phase >= 2
                  ? { rotateX: -174, opacity: 0.4 }
                  : { rotateX: 0, opacity: 1 }
                }
                transition={{ duration: 1.05, ease: [0.4, 0, 0.2, 1] }}
              />
            </div>


          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
