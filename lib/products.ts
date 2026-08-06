import { coolantPumps } from './coolant-pumps'
import { rotaryGearPumps } from './rotary-gear-pumps'
import type { ProductCategory } from './product-types'

export const productCategories: ProductCategory[] = [rotaryGearPumps, coolantPumps]

export function getCategory(slug: string): ProductCategory | undefined {
  return productCategories.find((c) => c.slug === slug)
}

export function getPump(categorySlug: string, pumpSlug: string) {
  const category = getCategory(categorySlug)
  const pump = category?.pumps.find((p) => p.slug === pumpSlug)
  return pump && category ? { category, pump } : undefined
}

export { coolantPumps, rotaryGearPumps }
export type { ProductCategory, ProductPump, PerfTable } from './product-types'
