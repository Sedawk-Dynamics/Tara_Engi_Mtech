'use client'

import { usePathname, useRouter } from 'next/navigation'

/**
 * Navigation for links that point at a section anchor (`#about`, `#contact`).
 *
 * Those sections only exist on the home page. Calling scrollIntoView from a
 * product page silently does nothing, because querySelector returns null —
 * so from anywhere other than `/` we route to the home page with the hash
 * and let the browser land on the section instead.
 */
export function useAnchorNav() {
  const pathname = usePathname()
  const router = useRouter()

  return (href: string) => {
    if (!href.startsWith('#')) {
      router.push(href)
      return
    }
    if (pathname !== '/') {
      router.push(`/${href}`)
      return
    }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }
}
