'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  alpha: number
  color: string
  radius: number
}

const COLORS = [
  '#F8C8DC', '#DCEFF7', '#E8B4CC', '#B8D8EE',
  '#F0D0E0', '#C8E5F5', '#EAB8D0', '#A8D0E8',
  '#FFE4EE', '#D4EDF8',
]

function createBurst(x: number, y: number): Particle[] {
  const count = 28 + Math.floor(Math.random() * 14)
  const particles: Particle[] = []
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4
    const speed = 1.2 + Math.random() * 2.8
    particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      alpha: 1,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      radius: 1.5 + Math.random() * 2,
    })
  }
  return particles
}

export default function Fireworks() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let particles: Particle[] = []
    let burstTimer: ReturnType<typeof setTimeout>

    function resize() {
      if (!canvas) return
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    function scheduleBurst() {
      const delay = 800 + Math.random() * 1400
      burstTimer = setTimeout(() => {
        if (!canvas) return
        const x = canvas.width * (0.15 + Math.random() * 0.7)
        const y = canvas.height * (0.1 + Math.random() * 0.7)
        particles.push(...createBurst(x, y))
        scheduleBurst()
      }, delay)
    }
    scheduleBurst()

    function loop() {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles = particles.filter(p => p.alpha > 0.02)
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.alpha
        ctx.fill()

        p.x += p.vx
        p.y += p.vy
        p.vy += 0.04   // gentle gravity
        p.vx *= 0.97
        p.vy *= 0.97
        p.alpha -= 0.016
        p.radius *= 0.995
      }
      ctx.globalAlpha = 1
      animId = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(animId)
      clearTimeout(burstTimer)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}
