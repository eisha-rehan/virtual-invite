'use client'

import { useState } from 'react'
import EnvelopeOpening from '@/components/EnvelopeOpening'
import Sparkles from '@/components/Sparkles'
import Hero from '@/components/Hero'
import Invitation from '@/components/Invitation'
import CoupleSection from '@/components/CoupleSection'
import EventDetails from '@/components/EventDetails'
import CountdownTimer from '@/components/CountdownTimer'
import QuoteSection from '@/components/QuoteSection'
import Closing from '@/components/Closing'
import BackgroundMusic from '@/components/BackgroundMusic'

function Divider({ color = '#DCEFF7' }: { color?: string }) {
  return (
    <div className="flex items-center justify-center px-10" aria-hidden="true">
      <div
        className="flex-1 h-px"
        style={{
          background: `linear-gradient(to right, transparent, ${color}80, transparent)`,
        }}
      />
    </div>
  )
}

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <EnvelopeOpening onComplete={() => setLoaded(true)} />
      <BackgroundMusic playing={loaded} />

      {loaded && (
        <main
          className="relative w-full max-w-[430px] mx-auto min-h-screen"
          style={{
            background:
              'linear-gradient(180deg, #E8F3FA 0%, #EDF5FB 30%, #EAF2F8 70%, #E8F3FA 100%)',
          }}
        >
          <Sparkles />

          <div className="relative z-10">
            <Hero />
            <Divider color="#DCEFF7" />
            <Invitation />
            <Divider color="#F8E7EE" />
            <CoupleSection />
            <Divider color="#DCEFF7" />
            <EventDetails />
            <Divider color="#DCEFF7" />
            <CountdownTimer />
            <Divider color="#F8E7EE" />
            <QuoteSection />
            <Closing />
          </div>
        </main>
      )}
    </>
  )
}
