import type { Metadata } from 'next'
import ProductCategoryIndex from '@/components/ProductCategoryIndex'
import { rotaryGearPumps } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Rotary Gear Pumps | TERG, TEIG & TEBX Series | TARA ENGIMECH LLP',
  description:
    'Positive-displacement rotary gear pumps for viscous fluids — TERG, TERG/SS, TEIG, TERN/TERB, TERMS/TERM, TERX, TERMP and TEBX/TENX series. 0.5 to 2080 LPM, up to 35 kg/cm² and 200°C.',
  keywords: [
    'rotary gear pumps',
    'external gear pump',
    'internal gear pump',
    'gerotor pump',
    'oil transfer pump',
    'viscous liquid pump',
    'SS 316 gear pump',
    'bitumen pump',
    'TERG gear pump',
    'TARA ENGIMECH',
  ],
  alternates: { canonical: '/rotary-gear-pumps' },
  openGraph: {
    title: 'Rotary Gear Pumps | TARA ENGIMECH LLP',
    description:
      'Eight positive-displacement gear pump series for fuel oil, tar, molasses, edible oil and corrosive chemicals — engineered and manufactured in India.',
    url: 'https://taraengimech.com/rotary-gear-pumps',
    siteName: 'TARA ENGIMECH LLP',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RotaryGearPumpsPage() {
  return <ProductCategoryIndex category={rotaryGearPumps} />
}
