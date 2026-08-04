'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone, MessageCircle, ArrowRight } from 'lucide-react'

type ProductCategory = {
  name: string
  models: string[]
  href: string
  /** Per-model destinations, where a model has a page of its own. */
  modelLinks?: Record<string, string>
}

const productCategories: ProductCategory[] = [
  { name: 'Rotary Gear Pumps', models: ['JRG', 'JRG/SS', 'JIG', 'JRN/JRB', 'JRMS/JRM', 'JRX', 'JRMP', 'JBX/JNX'], href: '#products' },
  {
    name: 'Coolant Pumps',
    models: ['TE/RG Single Stage', 'TE/RG Multi Stage', 'TE/MC Multi Stage'],
    href: '/coolant-pumps',
    modelLinks: {
      'TE/RG Single Stage': '/coolant-pumps/te-rg-single-stage',
      'TE/RG Multi Stage': '/coolant-pumps/te-rg-multi-stage',
      'TE/MC Multi Stage': '/coolant-pumps/te-mc-multi-stage',
    } as Record<string, string>,
  },
  { name: 'Centrifugal Process Pumps', models: ['JCP', 'JSOP', 'JSP', 'JFP', 'JSPP', 'JSMP', 'JHMP'], href: '/centrifugal-process-pumps' },
  { name: 'High-Pressure Pumps', models: ['JSMP', 'JHMP'], href: '/centrifugal-process-pumps#jsmp' },
  { name: 'Slurry & Self-Priming', models: ['JSP', 'JSOP'], href: '/centrifugal-process-pumps#jsop' },
  { name: 'Custom Engineering', models: ['OEM DESIGNS', 'SPECIAL SERIES', 'APPLICATION BUILD'], href: '#contact' },
]

/** Compact chip label — drops the trailing "Stage" so cards stay narrow. */
const shortModel = (model: string) => model.replace(/\s+Stage$/, '')

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products', hasMenu: true },
  { label: 'Industries', href: '#industries' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const megaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    setMegaOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-lg shadow-black/8 border-b border-[#DDE3E8]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="#home" onClick={() => handleNavClick('#home')} className="flex-shrink-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5tILah1slAYsZGDHE0ChXLedBtisLI.png"
                alt="TARA ENGIMECH LLP - Turning Power Into Flow"
                width={200}
                height={70}
                className="h-14 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" ref={megaRef}>
              {navLinks.map((link) =>
                link.hasMenu ? (
                  <div key={link.label} className="relative">
                    <button
                      onClick={() => setMegaOpen(!megaOpen)}
                      className={`group flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors relative ${
                        scrolled ? 'text-[#1a2332]' : 'text-white'
                      } hover:text-[#145795]`}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`}
                      />
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#145795] group-hover:w-full transition-all duration-300" />
                    </button>

                    <AnimatePresence>
                      {megaOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 12, scale: 0.97 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-max bg-gradient-to-br from-[#145795] via-[#145795] to-[#0e3f6e] rounded-xl shadow-2xl border border-[#0e3f6e] p-0 z-50 overflow-hidden"
                        >
                          {/* Blue background section with product categories */}
                          <div className="flex gap-0">
                            {/* Main categories */}
                            <div className="w-72 py-6 px-6">
                              <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-4">
                                Product Categories
                              </p>
                              <div className="space-y-0.5">
                                {productCategories.slice(0, 3).map((cat) => (
                                  cat.href.startsWith('/') ? (
                                    <Link
                                      key={cat.name}
                                      href={cat.href}
                                      onClick={() => setMegaOpen(false)}
                                      className="w-full block text-left px-4 py-3 text-white font-semibold hover:bg-white/15 transition-colors border-b border-white/10 last:border-b-0 text-sm"
                                    >
                                      {cat.name}
                                    </Link>
                                  ) : (
                                    <button
                                      key={cat.name}
                                      onClick={() => {
                                        handleNavClick(cat.href)
                                        setMegaOpen(false)
                                      }}
                                      className="w-full text-left px-4 py-3 text-white font-semibold hover:bg-white/15 transition-colors border-b border-white/10 last:border-b-0 text-sm"
                                    >
                                      {cat.name}
                                    </button>
                                  )
                                ))}
                              </div>
                            </div>

                            {/* Model numbers grid */}
                            <div className="bg-white/5 border-l border-white/10 py-6 px-8">
                              <div className="grid grid-cols-2 gap-6">
                                {productCategories.slice(0, 2).map((cat) => (
                                  <div key={cat.name}>
                                    <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-2">
                                      {cat.name.split(' ')[0]} Models
                                    </p>
                                    <div className="space-y-1.5">
                                      {cat.models?.map((model) => {
                                        const target = cat.modelLinks?.[model] ?? cat.href
                                        const cls =
                                          'text-white/80 hover:text-white text-xs font-medium hover:translate-x-1 transition-all block'
                                        return target.startsWith('/') ? (
                                          <Link
                                            key={model}
                                            href={target}
                                            onClick={() => setMegaOpen(false)}
                                            className={cls}
                                          >
                                            {model}
                                          </Link>
                                        ) : (
                                          <button
                                            key={model}
                                            onClick={() => handleNavClick(target)}
                                            className={cls}
                                          >
                                            {model}
                                          </button>
                                        )
                                      })}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Bottom white section with all categories */}
                          <div className="bg-white p-6 border-t border-[#DDE3E8]">
                            <div className="grid grid-cols-3 gap-4">
                              {productCategories.map((cat) =>
                                cat.href.startsWith('/') ? (
                                  <Link
                                    key={cat.name}
                                    href={cat.href}
                                    onClick={() => setMegaOpen(false)}
                                    className="group text-left p-3 rounded-lg hover:bg-[#F5F7F9] transition-colors block"
                                  >
                                    <p className="text-sm font-bold text-[#145795] group-hover:text-[#0e3f6e] mb-1">
                                      {cat.name}
                                    </p>
                                    <p className="text-xs text-[#586670] mb-2">
                                      {cat.models?.length || 0} models
                                    </p>
                                    <div className="flex flex-wrap gap-1">
                                      {cat.models?.slice(0, 3).map((model) => (
                                        <span
                                          key={model}
                                          className="text-xs px-2 py-1 rounded bg-[#145795]/10 text-[#145795] font-semibold"
                                        >
                                          {shortModel(model)}
                                        </span>
                                      ))}
                                      {cat.models && cat.models.length > 3 && (
                                        <span className="text-xs px-2 py-1 text-[#586670] font-medium">
                                          +{cat.models.length - 3}
                                        </span>
                                      )}
                                    </div>
                                  </Link>
                                ) : (
                                  <button
                                    key={cat.name}
                                    onClick={() => {
                                      handleNavClick(cat.href)
                                      setMegaOpen(false)
                                    }}
                                    className="group text-left p-3 rounded-lg hover:bg-[#F5F7F9] transition-colors"
                                  >
                                    <p className="text-sm font-bold text-[#145795] group-hover:text-[#0e3f6e] mb-1">
                                      {cat.name}
                                    </p>
                                    <p className="text-xs text-[#586670] mb-2">
                                      {cat.models?.length || 0} models
                                    </p>
                                    <div className="flex flex-wrap gap-1">
                                      {cat.models?.slice(0, 3).map((model) => (
                                        <span
                                          key={model}
                                          className="text-xs px-2 py-1 rounded bg-[#F5F7F9] text-[#145795] font-semibold"
                                        >
                                          {shortModel(model)}
                                        </span>
                                      ))}
                                      {cat.models && cat.models.length > 3 && (
                                        <span className="text-xs px-2 py-1 text-[#586670] font-medium">
                                          +{cat.models.length - 3}
                                        </span>
                                      )}
                                    </div>
                                  </button>
                                )
                              )}
                            </div>
                            <div className="mt-4 pt-4 border-t border-[#DDE3E8]">
                              <button
                                onClick={() => {
                                  handleNavClick('#contact')
                                  setMegaOpen(false)
                                }}
                                className="flex items-center gap-2 text-sm font-semibold text-[#145795] hover:text-[#0e3f6e] hover:gap-3 transition-all"
                              >
                                <span>📋 Download Product Brochure</span>
                                <ArrowRight size={14} />
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className={`group relative px-4 py-2 text-sm font-medium transition-colors ${
                      scrolled ? 'text-[#1a2332]' : 'text-white'
                    } hover:text-[#145795]`}
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#145795] group-hover:w-full transition-all duration-300" />
                  </button>
                )
              )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/917574835189?text=Hello%20TARA%20ENGIMECH%20LLP%2C%20I%20would%20like%20to%20enquire%20about%20your%20pumping%20solutions."
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-[#25D366] hover:bg-green-50'
                    : 'text-white hover:text-[#25D366]'
                }`}
              >
                <MessageCircle size={18} />
                <span className="hidden xl:inline">WhatsApp</span>
              </a>
              <button
                onClick={() => handleNavClick('#contact')}
                className="flex items-center gap-2 bg-[#145795] hover:bg-[#0e3f6e] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <Phone size={14} />
                Request a Quote
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-[#1a2332] hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-40 w-80 bg-white shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-[#DDE3E8]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5tILah1slAYsZGDHE0ChXLedBtisLI.png"
                alt="TARA ENGIMECH LLP"
                width={140}
                height={50}
                className="h-10 w-auto object-contain"
              />
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100"
                aria-label="Close menu"
              >
                <X size={20} className="text-[#586670]" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-6 space-y-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 rounded-lg text-[#1a2332] font-medium hover:bg-[#F5F7F9] hover:text-[#145795] transition-colors flex items-center justify-between"
                >
                  {link.label}
                  {link.hasMenu && <ChevronDown size={16} className="text-[#586670]" />}
                </motion.button>
              ))}

              {/* Product pages with routes of their own */}
              <div className="pt-4 mt-2 border-t border-[#DDE3E8]">
                <p className="px-4 pb-2 text-[10px] font-bold uppercase tracking-widest text-[#586670]">
                  Product Pages
                </p>
                {productCategories
                  .filter((cat) => cat.href.startsWith('/'))
                  .map((cat) => (
                    <div key={cat.name}>
                      <Link
                        href={cat.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-[#145795] hover:bg-[#F5F7F9] transition-colors"
                      >
                        {cat.name}
                      </Link>
                      {cat.modelLinks &&
                        Object.entries(cat.modelLinks).map(([model, target]) => (
                          <Link
                            key={model}
                            href={target}
                            onClick={() => setMobileOpen(false)}
                            className="block pl-8 pr-4 py-2 rounded-lg text-xs font-medium text-[#586670] hover:bg-[#F5F7F9] hover:text-[#145795] transition-colors"
                          >
                            {model}
                          </Link>
                        ))}
                    </div>
                  ))}
              </div>
            </nav>

            <div className="p-6 border-t border-[#DDE3E8] space-y-3">
              <a
                href="tel:+917574835189"
                className="flex items-center gap-3 p-3 rounded-lg bg-[#F5F7F9] text-[#1a2332] font-medium hover:bg-[#DDE3E8] transition-colors"
              >
                <Phone size={16} className="text-[#145795]" />
                +91 75748 35189
              </a>
              <a
                href="https://wa.me/917574835189?text=Hello%20TARA%20ENGIMECH%20LLP%2C%20I%20would%20like%20to%20enquire%20about%20your%20pumping%20solutions."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#25D366] text-white font-semibold hover:bg-[#20bb5a] transition-colors"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
              <button
                onClick={() => handleNavClick('#contact')}
                className="w-full py-3 rounded-lg bg-[#145795] text-white font-semibold hover:bg-[#0e3f6e] transition-colors"
              >
                Request a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  )
}
