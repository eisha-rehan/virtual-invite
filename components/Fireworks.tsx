'use client'

// Pure CSS fireworks — no JS timers, no React state, zero re-renders.
// Each burst is a fixed set of particles with staggered animation-delay + animation-duration,
// so they loop forever driven entirely by the GPU compositor.

const COLORS = [
  '#F8C8DC', '#DCEFF7', '#E8B4CC', '#B8D8EE',
  '#F0D0E0', '#C8E5F5', '#EAB8D0', '#FFE4EE',
]

// 10 burst origins scattered across the page (x%, y%)
const ORIGINS = [
  [18, 12], [72, 8],  [45, 22], [85, 40],
  [10, 55], [60, 50], [30, 70], [78, 72],
  [50, 88], [20, 38],
]

const PARTICLE_COUNT = 20
const CYCLE = 3.2   // seconds per full burst cycle

function Burst({ ox, oy, burstIndex }: { ox: number; oy: number; burstIndex: number }) {
  return (
    <>
      {Array.from({ length: PARTICLE_COUNT }, (_, i) => {
        const angle = (360 / PARTICLE_COUNT) * i
        const rad = (angle * Math.PI) / 180
        const dist = 70 + (i % 5) * 22
        const tx = Math.cos(rad) * dist
        const ty = Math.sin(rad) * dist
        const color = COLORS[(burstIndex * 3 + i) % COLORS.length]
        const size = 5 + (i % 4)
        const delay = burstIndex * (CYCLE / ORIGINS.length) + i * 0.015

        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${ox}%`,
              top: `${oy}%`,
              width: size,
              height: size,
              borderRadius: '50%',
              background: color,
              animationName: 'fw',
              animationDuration: `${CYCLE}s`,
              animationDelay: `${delay}s`,
              animationTimingFunction: 'cubic-bezier(0.1, 0.8, 0.2, 1)',
              animationIterationCount: 'infinite',
              // @ts-expect-error css custom props
              '--tx': `${tx}px`,
              '--ty': `${ty}px`,
            }}
          />
        )
      })}
    </>
  )
}

export default function Fireworks() {
  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <style>{`
        @keyframes fw {
          0%        { transform: translate(0,0) scale(1);   opacity: 0; }
          5%        { opacity: 1; }
          50%       { opacity: 0.7; }
          100%      { transform: translate(var(--tx), var(--ty)) scale(0); opacity: 0; }
        }
      `}</style>

      {ORIGINS.map(([ox, oy], bi) => (
        <Burst key={bi} ox={ox} oy={oy} burstIndex={bi} />
      ))}
    </div>
  )
}
