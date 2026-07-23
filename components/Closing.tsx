'use client'

import SectionReveal from './SectionReveal'
export default function Closing() {
  return (
    <section className="px-8 py-24 pb-36 flex flex-col items-center text-center">
      <SectionReveal>
        <div className="max-w-[280px] mx-auto space-y-9">
          {/* Ornament */}
          <div className="flex items-center justify-center gap-4" aria-hidden="true">
            <div className="w-10 h-px bg-[#DCEFF7]" />
            <span className="text-[#C4A4B2] text-[11px]">✦</span>
            <div className="w-10 h-px bg-[#DCEFF7]" />
          </div>

          {/* Closing message */}
          <p className="font-serif text-[24px] italic text-[#3A5060] leading-snug">
            We can&apos;t wait to celebrate with you.
          </p>

          {/* Sign-off */}
          <div className="space-y-2 pt-3">
            <p className="font-serif text-[22px] italic text-[#8BA7B8]">
              Shaheer &amp; Hafsa
            </p>
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#A8BCC8]">
              26 · 09 · 2026
            </p>
          </div>

          {/* Final ornament */}
          <div className="flex items-center justify-center gap-2 pt-2" aria-hidden="true">
            <span className="text-[#DCEFF7] text-[10px]">✦</span>
            <span className="text-[#F8E7EE] text-[10px]">✦</span>
            <span className="text-[#DCEFF7] text-[10px]">✦</span>
          </div>
        </div>
      </SectionReveal>
    </section>
  )
}
