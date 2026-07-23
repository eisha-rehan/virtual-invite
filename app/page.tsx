'use client'

import { useState } from 'react'
import EnvelopeOpening from '@/components/EnvelopeOpening'
import Sparkles from '@/components/Sparkles'
import Hero from '@/components/Hero'
import Invitation from '@/components/Invitation'
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
              'linear-gradient(180deg, #D6EBF7 0%, #DAEeF8 30%, #D8ECF6 70%, #D6EBF7 100%)',
          }}
        >
          <Sparkles />

          <div className="relative z-10">
            <Hero />
            <Divider color="#DCEFF7" />
            <Invitation />
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
