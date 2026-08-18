'use client'

import { useAnchorNav } from '@/lib/use-anchor-nav'
import { CONTACT } from '@/lib/contact'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle, MapPin, ArrowRight, Globe } from 'lucide-react'

// Inline SVG icons for social platforms not available in lucide-react@1.17
function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function TwitterIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function FacebookIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

const productLinks = [
  'External Gear Pumps',
  'Internal Gear Pumps',
  'Rotary Gear Pumps',
  'Lobe Pumps',
  'Centrifugal Pumps',
  'High-Pressure Pumps',
  'Chemical Process Pumps',
  'Customized Solutions',
]

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Industries We Serve', href: '#industries' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Contact Us', href: '#contact' },
]

const industries = [
  'Oil & Gas',
  'Chemical Processing',
  'Paint & Ink',
  'Food Processing',
  'Pharmaceuticals',
  'Petrochemicals',
  'Power & Energy',
  'Marine',
]

export default function Footer() {
  const handleScrollTo = useAnchorNav()

  return (
    <footer className="bg-[#0e1a26] text-white">
      {/* Top CTA strip */}
      <div className="bg-[#145795] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white text-balance">
                Ready to Find the Right Pumping Solution?
              </h3>
              <p className="text-blue-100 mt-1 text-sm">
                Connect with our engineering team for application-specific guidance.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/917574835189?text=Hello%20TARA%20ENGIMECH%20LLP%2C%20I%20would%20like%20to%20enquire%20about%20your%20pumping%20solutions."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] text-white font-semibold hover:bg-[#20bb5a] transition-colors"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
              <button
                onClick={() => handleScrollTo('#contact')}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-[#145795] font-semibold hover:bg-gray-100 transition-colors"
              >
                Request a Quote
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5tILah1slAYsZGDHE0ChXLedBtisLI.png"
              alt="TARA ENGIMECH LLP"
              width={180}
              height={64}
              className="h-14 w-auto object-contain brightness-0 invert"
            />
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              TARA ENGIMECH LLP delivers reliable, performance-driven pumping and engineering solutions
              for diverse industrial applications. Turning Power Into Flow.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#145795] transition-colors"
              >
                <LinkedinIcon size={15} />
              </a>
              <a
                href="#"
                aria-label="Twitter / X"
                className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#145795] transition-colors"
              >
                <TwitterIcon size={15} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#145795] transition-colors"
              >
                <FacebookIcon size={15} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#145795] transition-colors"
              >
                <InstagramIcon size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleScrollTo(link.href)}
                    className="text-sm text-gray-400 hover:text-white flex items-center gap-2 group transition-colors"
                  >
                    <span className="w-3 h-0.5 bg-[#145795] group-hover:w-5 transition-all duration-200" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
              Products
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((p) => (
                <li key={p}>
                  <button
                    onClick={() => handleScrollTo('#products')}
                    className="text-sm text-gray-400 hover:text-white flex items-center gap-2 group transition-colors text-left"
                  >
                    <span className="w-3 h-0.5 bg-[#145795] group-hover:w-5 transition-all duration-200" />
                    {p}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+917574835189"
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
                >
                  <Phone size={15} className="mt-0.5 text-[#145795] flex-shrink-0" />
                  <span>{CONTACT.phone.display}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-gray-400">
                  <Mail size={15} className="mt-0.5 text-[#145795] flex-shrink-0" />
                  <div className="space-y-1">
                    <a
                      href={`mailto:${CONTACT.emails.primary}`}
                      className="block break-all hover:text-white transition-colors"
                    >
                      {CONTACT.emails.primary}
                    </a>
                    <a
                      href={`mailto:${CONTACT.emails.sales}`}
                      className="block break-all hover:text-white transition-colors"
                    >
                      {CONTACT.emails.sales}
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href={CONTACT.website.href}
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Globe size={15} className="mt-0.5 text-[#145795] flex-shrink-0" />
                  {CONTACT.website.display}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <MapPin size={15} className="mt-0.5 text-[#145795] flex-shrink-0" />
                  <span className="not-italic">
                    {CONTACT.address.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </a>
              </li>
            </ul>
            <div className="mt-5 space-y-2">
              <a
                href="https://wa.me/917574835189?text=Hello%20TARA%20ENGIMECH%20LLP%2C%20I%20would%20like%20to%20enquire%20about%20your%20pumping%20solutions."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#25D366] hover:text-green-400 transition-colors"
              >
                <MessageCircle size={14} />
                WhatsApp: +91 75748 35189
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Industries strip */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Industries:</span>
            {industries.map((ind, i) => (
              <span key={ind} className="text-xs text-gray-400">
                {ind}
                {i < industries.length - 1 && <span className="ml-6 text-gray-600">|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              &copy; 2026 TARA ENGIMECH LLP. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                Terms &amp; Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
