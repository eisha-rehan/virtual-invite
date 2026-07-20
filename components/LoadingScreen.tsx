'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Props {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: Props) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            background:
              'linear-gradient(135deg, #FAFCFE 0%, #EEF7FB 50%, #FAF3F6 100%)',
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="flex flex-col items-center gap-7">
            {/* Initials row */}
            <div className="flex items-center gap-5">
              <motion.span
                className="font-serif text-[72px] italic text-[#1E2D3A] leading-none"
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
              >
                S
              </motion.span>

              <motion.span
                className="shimmer-text text-[36px] leading-none select-none"
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.55,
                  delay: 0.55,
                  type: 'spring',
                  stiffness: 220,
                  damping: 14,
                }}
              >
                ♡
              </motion.span>

              <motion.span
                className="font-serif text-[72px] italic text-[#1E2D3A] leading-none"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
              >
                H
              </motion.span>
            </div>

            {/* Thin line */}
            <motion.div
              className="h-px bg-[#DCEFF7]"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.7, delay: 0.85 }}
            />

            {/* Label */}
            <motion.p
              className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#8BA7B8]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              Loading
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
