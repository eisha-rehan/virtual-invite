# Shaheer & Hafsa — Engagement Invitation

A premium, mobile-first digital engagement invitation built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) on your phone or in a mobile-size browser window.

---

## Update the Venue

Open `components/EventDetails.tsx` and change line 8:

```ts
const VENUE = 'To Be Announced'
// → change to:
const VENUE = 'The Grand Ballroom, Karachi'
```

That is the only change needed. Everything else auto-updates.

---

## Deploy to Vercel (recommended)

1. Push the project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo.
3. Vercel auto-detects Next.js — click **Deploy**.
4. Share the Vercel URL on WhatsApp. The Open Graph preview shows automatically.

Or deploy via CLI:

```bash
npm i -g vercel
vercel
```

---

## Wire Up RSVP

Open `components/RSVPSection.tsx`, find the comment `// TODO: wire up RSVP action`, and add your action. Examples:

**WhatsApp link:**
```ts
window.open('https://wa.me/923001234567?text=I%20will%20attend!')
```

**Google Form:**
```ts
window.open('https://forms.gle/your-form-link')
```

---

## Project Structure

```
app/
  layout.tsx          ← fonts, metadata, Open Graph, viewport
  page.tsx            ← root page, loading state
  globals.css         ← base styles, shimmer keyframe
  icon.tsx            ← browser tab favicon (generated)
  opengraph-image.tsx ← WhatsApp / social preview image (generated)

components/
  LoadingScreen.tsx   ← "S ♡ H" intro screen
  FloatingParticles.tsx
  ShimmeringHeart.tsx
  SectionReveal.tsx   ← scroll-triggered fade+slide wrapper
  Hero.tsx
  Invitation.tsx
  CoupleSection.tsx
  EventDetails.tsx    ← update VENUE constant here
  QuoteSection.tsx
  RSVPSection.tsx     ← wire up RSVP action here
  Closing.tsx
```

---

## Tech Stack

| Tool | Version |
|---|---|
| Next.js | 14.2.5 |
| React | 18 |
| TypeScript | 5 |
| Tailwind CSS | 3.4 |
| Framer Motion | 11 |

---

Built with care for Shaheer & Hafsa 🤍
