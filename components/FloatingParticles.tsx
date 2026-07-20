'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  color: string
  driftX: number
}

const COLORS = ['#DCEFF7', '#F8E7EE', '#C8E5F5', '#F0D8E8', '#E5F2F8', '#FAF0F4']

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    setParticles(
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 5 + 2,
        duration: Math.random() * 9 + 7,
        delay: Math.random() * 5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        driftX: Math.random() * 18 - 9,
      }))
    )
  }, [])

  if (particles.length === 0) return null

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.color,
          }}
          animate={{
            y: [0, -28, 0],
            x: [0, p.driftX, 0],
            opacity: [0.15, 0.55, 0.15],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
