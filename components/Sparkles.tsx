'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Sparkle {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
  color: string
  type: 'dot' | 'star'
}

const COLORS = ['#DCEFF7', '#F8E7EE', '#B8D8EE', '#F0C8DC', '#C8E5F5', '#E8D0E8']

export default function Sparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useEffect(() => {
    setSparkles(
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 5 + 3,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2.5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        type: Math.random() > 0.45 ? 'star' : 'dot',
      }))
    )
  }, [])

  if (sparkles.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {sparkles.map((s) =>
        s.type === 'star' ? (
          <motion.span
            key={s.id}
            style={{
              position: 'absolute',
              left: `${s.x}%`,
              top: `${s.y}%`,
              fontSize: s.size + 4,
              color: s.color,
              lineHeight: 1,
              userSelect: 'none',
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0.6, 1.1, 0.6],
              rotate: [0, 20, 0],
            }}
            transition={{
              duration: s.duration,
              delay: s.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            ✦
          </motion.span>
        ) : (
          <motion.div
            key={s.id}
            style={{
              position: 'absolute',
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.size,
              height: s.size,
              borderRadius: '50%',
              background: s.color,
            }}
            animate={{
              opacity: [0, 0.65, 0],
              scale: [0.8, 1.2, 0.8],
              y: [0, -18, 0],
            }}
            transition={{
              duration: s.duration + 2,
              delay: s.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        )
      )}
    </div>
  )
}
