import type { Metadata } from 'next'
import ProductCategoryIndex from '@/components/ProductCategoryIndex'
import { coolantPumps } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Coolant Pumps | TE/RG & TE/MC Series | TARA ENGIMECH LLP',
  description:
    'Vertical immersion coolant pumps for CNC machines, lathes and grinders — TE/RG single stage, TE/RG multi stage and high-pressure TE/MC series. 0.1 to 5 HP, up to 250 LPM and 183 m head.',
  keywords: [
    'coolant pumps',
    'machine coolant pump',
    'vertical immersion pump',
    'CNC coolant pump',
    'through-spindle coolant pump',
    'TE/RG coolant pump',
    'TE/MC multistage pump',
    'TARA ENGIMECH',
  ],
  alternates: { canonical: '/coolant-pumps' },
  openGraph: {
    title: 'Coolant Pumps | TARA ENGIMECH LLP',
    description:
      'Seal-less vertical coolant pumps engineered for machine tools that run all day — built to your tank depth, in the material your coolant demands.',
    url: 'https://taraengimech.com/coolant-pumps',
    siteName: 'TARA ENGIMECH LLP',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function CoolantPumpsPage() {
  return <ProductCategoryIndex category={coolantPumps} />
}
