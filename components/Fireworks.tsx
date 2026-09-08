'use client'

import { useEffect, useState } from 'react'

interface Particle {
  angle: number
  dist: number
  color: string
  size: number
  delay: number
}

interface Burst {
  id: number
  x: number
  y: number
  particles: Particle[]
}

const COLORS = [
  '#F8C8DC', '#DCEFF7', '#E8B4CC', '#B8D8EE',
  '#F0D0E0', '#C8E5F5', '#EAB8D0', '#FFE4EE',
]

function makeBurst(id: number): Burst {
  const x = 5 + Math.random() * 90
  const y = 5 + Math.random() * 90
  const count = 30 + Math.floor(Math.random() * 12)
  const particles: Particle[] = Array.from({ length: count }, (_, i) => ({
    angle: (360 / count) * i + (Math.random() - 0.5) * 20,
    dist: 120 + Math.random() * 160,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    size: 6 + Math.random() * 6,
    delay: Math.random() * 120,
  }))
  return { id, x, y, particles }
}

let nextId = 0

export default function Fireworks() {
  const [bursts, setBursts] = useState<Burst[]>([])

  useEffect(() => {
    function addBurst() {
      const burst = makeBurst(nextId++)
      setBursts(prev => [...prev.slice(-10), burst])
    }

    addBurst()
    const iv = setInterval(addBurst, 350 + Math.random() * 250)
    return () => clearInterval(iv)
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden" aria-hidden="true">
      <style>{`
        @keyframes fw-particle {
          0%   { transform: translate(0,0) scale(1); opacity: 1; }
          60%  { opacity: 0.8; }
          100% { transform: translate(var(--tx), var(--ty)) scale(0.2); opacity: 0; }
        }
        .fw-dot {
          position: absolute;
          border-radius: 50%;
          animation: fw-particle 1.4s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
        }
      `}</style>

      {bursts.map(burst =>
        burst.particles.map((p, i) => {
          const rad = (p.angle * Math.PI) / 180
          const tx = Math.cos(rad) * p.dist
          const ty = Math.sin(rad) * p.dist
          return (
            <div
              key={`${burst.id}-${i}`}
              className="fw-dot"
              style={{
                left: `${burst.x}%`,
                top: `${burst.y}%`,
                width: p.size,
                height: p.size,
                background: p.color,
                animationDelay: `${p.delay}ms`,
                ['--tx' as string]: `${tx}px`,
                ['--ty' as string]: `${ty}px`,
              }}
            />
          )
        })
      )}
    </div>
  )
}
