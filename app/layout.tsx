import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#DCEFF7',
}

export const metadata: Metadata = {
  title: 'Shaheer & Hafsa | Engagement Invitation',
  description: 'Join us in celebrating our engagement on 26 September 2026.',
  keywords: ['engagement', 'invitation', 'Shaheer', 'Hafsa', '2026', 'ceremony'],
  authors: [{ name: 'Shaheer & Hafsa' }],
  openGraph: {
    title: 'Shaheer & Hafsa | Engagement Invitation',
    description: 'Join us in celebrating our engagement on 26 September 2026.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Shaheer & Hafsa',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shaheer & Hafsa | Engagement Invitation',
    description: 'Join us in celebrating our engagement on 26 September 2026.',
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
