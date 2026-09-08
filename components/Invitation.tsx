'use client'

import SectionReveal from './SectionReveal'
import Fireworks from './Fireworks'

export default function Invitation() {
  return (
    <section className="relative px-8 py-36 flex flex-col items-center text-center overflow-hidden">
      <Fireworks />
      <SectionReveal>
        <div className="max-w-[300px] mx-auto space-y-5">
          <div className="flex items-center justify-center gap-3" aria-hidden="true">
            <div className="w-7 h-px bg-[#DCEFF7]" />
            <span className="text-[#C8D8E0] text-[10px]">✦</span>
            <div className="w-7 h-px bg-[#DCEFF7]" />
          </div>

          <p className="font-serif text-[22px] italic text-[#4A6070] leading-relaxed">
            Please join us to celebrate their special day.
          </p>

          <div className="flex items-center justify-center gap-3 pt-1" aria-hidden="true">
            <div className="w-7 h-px bg-[#F8E7EE]" />
            <span className="text-[#E8C8D4] text-[10px]">✦</span>
            <div className="w-7 h-px bg-[#F8E7EE]" />
          </div>
        </div>
      </SectionReveal>
    </section>
  )
}
