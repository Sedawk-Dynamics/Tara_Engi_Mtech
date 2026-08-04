import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CoolantPumpDetail from '@/components/CoolantPumpDetail'
import { coolantPumps, getCoolantPump } from '@/lib/coolant-pumps'

export function generateStaticParams() {
  return coolantPumps.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const pump = getCoolantPump(slug)
  if (!pump) return { title: 'Coolant Pumps | TARA ENGIMECH LLP' }

  const title = `${pump.fullTitle} | TARA ENGIMECH LLP`
  const description = `${pump.tagline}. ${pump.highlights
    .map((h) => `${h.label}: ${h.value}`)
    .join(' · ')}.`

  return {
    title,
    description,
    alternates: { canonical: `/coolant-pumps/${pump.slug}` },
    openGraph: {
      title,
      description,
      url: `https://taraengimech.com/coolant-pumps/${pump.slug}`,
      siteName: 'TARA ENGIMECH LLP',
      locale: 'en_IN',
      type: 'website',
    },
  }
}

export default async function CoolantPumpPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const pump = getCoolantPump(slug)
  if (!pump) notFound()

  return <CoolantPumpDetail pump={pump} />
}
