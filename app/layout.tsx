import type { Metadata, Viewport } from 'next'
import { Inter, Barlow } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-barlow',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TARA ENGIMECH LLP | Industrial Pumping & Engineering Solutions',
  description:
    'Explore reliable industrial pumping and engineering solutions from TARA ENGIMECH LLP, designed for demanding applications across diverse industries. Turning Power Into Flow.',
  keywords: [
    'industrial pumps',
    'gear pumps',
    'rotary pumps',
    'centrifugal pumps',
    'pump manufacturer India',
    'TARA ENGIMECH',
    'TEM pumps',
    'fluid handling',
    'industrial engineering',
  ],
  openGraph: {
    title: 'TARA ENGIMECH LLP | Industrial Pumping & Engineering Solutions',
    description:
      'Reliable, performance-driven pumping solutions engineered for efficiency, durability, and demanding industrial applications.',
    url: 'https://taraengimech.com',
    siteName: 'TARA ENGIMECH LLP',
    locale: 'en_IN',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#145795',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable} bg-background`}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  )
}
