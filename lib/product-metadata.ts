import type { Metadata } from 'next'
import { getPump } from './products'

/** Shared metadata builder for every /{category}/{pump} detail page. */
export function buildPumpMetadata(categorySlug: string, pumpSlug: string): Metadata {
  const found = getPump(categorySlug, pumpSlug)
  if (!found) return { title: 'Product Not Found | TARA ENGIMECH LLP' }

  const { category, pump } = found
  const path = `/${category.slug}/${pump.slug}`
  const title = `${pump.fullTitle} | TARA ENGIMECH LLP`
  const description = `${pump.tagline}. ${pump.highlights
    .map((h) => `${h.label}: ${h.value}`)
    .join(' · ')}.`

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: `https://taraengimech.com${path}`,
      siteName: 'TARA ENGIMECH LLP',
      locale: 'en_IN',
      type: 'website',
    },
  }
}
