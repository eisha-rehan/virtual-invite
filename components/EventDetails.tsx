'use client'

import SectionReveal from './SectionReveal'

// ─────────────────────────────────────────────────────────────────────────────
// UPDATE VENUE & TIME HERE when confirmed.
const VENUE     = 'Edge Lawn by Hanif Rajput'
const VENUE_MAP = 'https://maps.google.com/maps?daddr=Marquees+Complex+Rd,+Nawaz,+Islamabad'
const TIME  = '8:00 PM'
// ─────────────────────────────────────────────────────────────────────────────

export default function EventDetails() {
  return (
    <section className="px-8 py-24 flex flex-col items-center text-center">
      <SectionReveal>
        <div className="max-w-[340px] mx-auto space-y-10">
          {/* Section header */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3" aria-hidden="true">
              <div className="w-7 h-px bg-[#DCEFF7]" />
              <span className="text-[#C8D8E0] text-[10px]">✦</span>
              <div className="w-7 h-px bg-[#DCEFF7]" />
            </div>
            <p className="font-sans text-[10px] tracking-[0.38em] uppercase text-[#8BA7B8]">
              Event Details
            </p>
          </div>

          {/* Ceremony name */}
          <div className="space-y-1">
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#A8BCC8]">
              Ceremony
            </p>
            <h3 className="font-serif text-[28px] italic text-[#1E2D3A]">
              Engagement Ceremony
            </h3>
          </div>

          <div className="w-12 h-px bg-[#DCEFF7] mx-auto" aria-hidden="true" />

          {/* Date card */}
          <SectionReveal delay={0.12}>
            <div
              className="rounded-2xl px-6 py-7"
              style={{
                background: 'rgba(185, 220, 240, 0.38)',
                border: '1px solid rgba(160, 210, 235, 0.65)',
                boxShadow: '0 2px 20px rgba(140, 180, 210, 0.05)',
              }}
            >
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#8BA7B8] mb-3">
                Date
              </p>
              <p className="font-serif text-[26px] italic text-[#2C3E50]">
                26 September 2026
              </p>
              <p className="font-sans text-[11px] text-[#A8BCC8] mt-2 tracking-wide">
                Saturday
              </p>
              <div className="w-8 h-px bg-[#DCEFF7] mx-auto my-3" />
              <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-[#8BA7B8] mb-1">
                Time
              </p>
              <p className="font-serif text-[22px] italic text-[#2C3E50]">
                {TIME}
              </p>
            </div>
          </SectionReveal>

          {/* Venue card */}
          <SectionReveal delay={0.22}>
            <div
              className="rounded-2xl px-6 py-7"
              style={{
                background: 'rgba(240, 200, 220, 0.32)',
                border: '1px solid rgba(230, 185, 210, 0.65)',
                boxShadow: '0 2px 20px rgba(200, 150, 170, 0.05)',
              }}
            >
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#C4A4B2] mb-3">
                Venue
              </p>
              <p className="font-serif text-[24px] italic text-[#2C3E50] leading-snug">
                {VENUE}
              </p>
              <p className="font-sans text-[11px] text-[#C4A4B2] mt-1">
                Marquees Complex Rd, Islamabad
              </p>
              <a
                href={VENUE_MAP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-4 font-sans text-[10px] tracking-[0.22em] uppercase"
                style={{
                  color: '#8BA7B8',
                  border: '1px solid rgba(160,210,235,0.5)',
                  borderRadius: 20,
                  padding: '6px 14px',
                  textDecoration: 'none',
                }}
              >
                📍 Get Directions
              </a>
            </div>
          </SectionReveal>
        </div>
      </SectionReveal>
    </section>
  )
}
