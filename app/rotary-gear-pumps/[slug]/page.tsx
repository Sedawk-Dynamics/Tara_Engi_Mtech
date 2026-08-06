import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProductDetail from '@/components/ProductDetail'
import { rotaryGearPumps, getPump } from '@/lib/products'
import { buildPumpMetadata } from '@/lib/product-metadata'

export function generateStaticParams() {
  return rotaryGearPumps.pumps.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  return buildPumpMetadata(rotaryGearPumps.slug, slug)
}

export default async function RotaryGearPumpPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const found = getPump(rotaryGearPumps.slug, slug)
  if (!found) notFound()

  return <ProductDetail category={found.category} pump={found.pump} />
}
