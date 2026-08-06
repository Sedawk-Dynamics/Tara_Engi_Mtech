/**
 * Icons are referenced by name, not by component — the category object is
 * passed from a Server Component into a Client Component, and React cannot
 * serialize a function across that boundary. The client resolves the name.
 */
export type IconName = 'shield' | 'settings' | 'gauge' | 'droplets' | 'flame'

export type PerfTable = {
  title: string
  note?: string
  /** Fixed leading columns (model, size, etc.) */
  headers: string[]
  /**
   * Optional spanning band rendered above a set of numeric columns —
   * `cols` are the sub-headers, and each row must supply one cell per entry.
   */
  group?: { label: string; cols: string[] }
  rows: string[][]
}

export type ProductPump = {
  slug: string
  /** Short model code shown on the card ribbon, e.g. TERG or TE/RG */
  model: string
  name: string
  fullTitle: string
  tagline: string
  image: string
  thumb: string
  badge: string | null
  intro: string
  highlights: { label: string; value: string }[]
  features: string[]
  applications: string[]
  construction?: { part: string; material: string }[]
  usedOn?: string[]
  tables: PerfTable[]
  dimensionImage?: string
}

/** Everything a category landing page needs, so the layout stays generic. */
export type ProductCategory = {
  /** Route segment — pages live at /{slug} and /{slug}/{pump.slug} */
  slug: string
  name: string
  /** Hero headline, split across two lines */
  heroTitle: [string, string]
  heroBlurb: string
  stats: { value: string; label: string }[]
  overviewHeading: string
  overviewParagraphs: string[]
  whyPoints: { icon: IconName; title: string; desc: string }[]
  rangeHeading: string
  rangeBlurb: string
  applications: string[]
  /** Plain-text subject used in the WhatsApp deep links */
  quoteSubject: string
  pumps: ProductPump[]
}
