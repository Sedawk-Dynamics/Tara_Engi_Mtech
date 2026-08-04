'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import {
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  Phone,
  Mail,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { coolantPumps, type CoolantPump, type PerfTable } from '@/lib/coolant-pumps'

const WA_BASE = 'https://wa.me/917574835189?text='

function FadeUp({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function PerformanceTable({ table }: { table: PerfTable }) {
  const leadCols = table.headers.length
  const groupCols = table.group?.cols ?? []

  return (
    <FadeUp className="mb-12 last:mb-0">
      <h3 className="text-lg font-bold text-[#1a2332] mb-1 font-display">{table.title}</h3>
      {table.note && <p className="text-sm text-[#586670] mb-4">{table.note}</p>}

      {/* Wide tables scroll inside their own container, never the page */}
      <div className="overflow-x-auto rounded-xl border border-[#DDE3E8] bg-white">
        <table className="w-full text-sm border-collapse min-w-[640px]">
          <thead>
            {table.group && (
              <tr>
                <th
                  colSpan={leadCols}
                  className="bg-[#0e3f6e] text-white text-left px-4 py-2 text-[11px] font-bold uppercase tracking-widest"
                />
                <th
                  colSpan={groupCols.length}
                  className="bg-[#0e3f6e] text-white px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-center border-l border-white/20"
                >
                  {table.group.label}
                </th>
              </tr>
            )}
            <tr>
              {table.headers.map((h) => (
                <th
                  key={h}
                  className="bg-[#145795] text-white text-left px-4 py-3 text-[11px] font-bold uppercase tracking-wider whitespace-nowrap"
                >
                  {h}
                </th>
              ))}
              {groupCols.map((c, i) => (
                <th
                  key={c + i}
                  className={`bg-[#145795] text-white px-3 py-3 text-xs font-bold text-center whitespace-nowrap ${
                    i === 0 ? 'border-l border-white/20' : ''
                  }`}
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, ri) => (
              <tr
                key={row[0]}
                className={`${ri % 2 ? 'bg-[#F5F7F9]' : 'bg-white'} hover:bg-[#145795]/5 transition-colors`}
              >
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={`px-4 py-2.5 border-t border-[#DDE3E8] whitespace-nowrap ${
                      ci === 0
                        ? 'font-bold text-[#145795]'
                        : ci < leadCols
                          ? 'text-[#586670]'
                          : 'text-center text-[#1a2332] tabular-nums'
                    } ${ci === leadCols ? 'border-l border-[#DDE3E8]' : ''}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </FadeUp>
  )
}

export default function CoolantPumpDetail({ pump }: { pump: CoolantPump }) {
  const others = coolantPumps.filter((p) => p.slug !== pump.slug)
  const quoteLink = `${WA_BASE}${encodeURIComponent(
    `Hello TARA ENGIMECH, I would like a quotation for the ${pump.name} coolant pump.`
  )}`

  return (
    <>
      <Navbar />
      <WhatsAppFloat />

      <main>
        {/* ── Hero ── */}
        <section className="relative bg-[#0e1a26] pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 blueprint-grid opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e1a26] via-[#145795]/40 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2 text-xs text-white/60 mb-6 font-medium"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight size={12} className="text-white/40" />
              <Link href="/#products" className="hover:text-white transition-colors">
                Products
              </Link>
              <ChevronRight size={12} className="text-white/40" />
              <Link href="/coolant-pumps" className="hover:text-white transition-colors">
                Coolant Pumps
              </Link>
              <ChevronRight size={12} className="text-white/40" />
              <span className="text-white">{pump.name}</span>
            </motion.nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {pump.badge && (
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#145795] bg-white px-4 py-2 rounded-full mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#145795] animate-pulse" />
                    {pump.badge}
                  </span>
                )}
                <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight text-balance mb-4 font-display">
                  {pump.name}
                  <br />
                  <span className="text-[#5aadff]">Coolant Pumps</span>
                </h1>
                <p className="text-lg text-white/70 max-w-xl leading-relaxed mb-8">
                  {pump.tagline}
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={quoteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#145795] hover:bg-[#0e3f6e] text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-lg"
                  >
                    <MessageCircle size={16} />
                    Request a Quote
                  </a>
                  <a
                    href="tel:+917574835189"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-xl transition-colors backdrop-blur-sm"
                  >
                    <Phone size={16} />
                    +91 75748 35189
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-[340px] md:h-[420px] bg-white rounded-2xl overflow-hidden border border-white/10"
              >
                <Image
                  src={pump.image}
                  alt={pump.fullTitle}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-8"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Key specs strip ── */}
        <section className="bg-[#145795]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
              {pump.highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div className="text-lg md:text-xl font-black leading-tight">{h.value}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-blue-200 mt-1.5">
                    {h.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Overview + Features ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14">
              <FadeUp>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#145795] bg-[#145795]/10 px-3 py-1.5 rounded-full mb-4">
                  Overview
                </span>
                <h2 className="text-3xl font-black text-[#1a2332] leading-tight mb-6 font-display text-balance">
                  {pump.fullTitle}
                </h2>
                <p className="text-[#586670] leading-relaxed mb-8">{pump.intro}</p>

                {pump.construction && (
                  <>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-[#1a2332] mb-4">
                      Construction &amp; Materials
                    </h3>
                    <div className="rounded-xl border border-[#DDE3E8] overflow-hidden">
                      {pump.construction.map((c, i) => (
                        <div
                          key={c.part}
                          className={`flex justify-between gap-4 px-4 py-3 text-sm ${
                            i % 2 ? 'bg-[#F5F7F9]' : 'bg-white'
                          }`}
                        >
                          <span className="font-semibold text-[#1a2332]">{c.part}</span>
                          <span className="text-[#586670] text-right">{c.material}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </FadeUp>

              <FadeUp delay={0.1}>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#145795] bg-[#145795]/10 px-3 py-1.5 rounded-full mb-4">
                  Features
                </span>
                <h2 className="text-3xl font-black text-[#1a2332] leading-tight mb-6 font-display text-balance">
                  Built to Run, Not to Be Serviced
                </h2>
                <ul className="space-y-3">
                  {pump.features.map((f) => (
                    <li key={f} className="flex gap-3 items-start">
                      <CheckCircle2
                        size={18}
                        className="text-[#145795] flex-shrink-0 mt-0.5"
                        aria-hidden
                      />
                      <span className="text-[#586670] leading-relaxed text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                {pump.usedOn && (
                  <div className="mt-8 bg-[#F5F7F9] border border-[#DDE3E8] rounded-xl p-6">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-[#1a2332] mb-4">
                      Used On
                    </h3>
                    <ul className="space-y-2">
                      {pump.usedOn.map((u) => (
                        <li key={u} className="flex gap-2.5 items-start text-sm text-[#586670]">
                          <ArrowRight
                            size={14}
                            className="text-[#145795] flex-shrink-0 mt-1"
                            aria-hidden
                          />
                          {u}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ── Applications ── */}
        <section className="py-20 bg-[#F5F7F9] dot-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="text-center mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#145795] bg-white px-3 py-1.5 rounded-full mb-4">
                Applications
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-[#1a2332] font-display text-balance">
                A Wide Range of Application
              </h2>
            </FadeUp>

            <div className="flex flex-wrap justify-center gap-3">
              {pump.applications.map((a, i) => (
                <motion.span
                  key={a}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="bg-white border border-[#DDE3E8] text-[#1a2332] text-sm font-semibold px-5 py-2.5 rounded-full hover:border-[#145795] hover:text-[#145795] transition-colors"
                >
                  {a}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Performance charts ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#145795] bg-[#145795]/10 px-3 py-1.5 rounded-full mb-4">
                Technical Data
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-[#1a2332] font-display text-balance">
                Performance &amp; Selection Chart
              </h2>
              <p className="text-[#586670] mt-3 max-w-2xl leading-relaxed">
                Figures are typical values obtained on our calibrated test rig. Send us your duty
                point and our engineers will confirm the exact model, column length and material
                for your machine.
              </p>
            </FadeUp>

            {pump.tables.map((t) => (
              <PerformanceTable key={t.title} table={t} />
            ))}

            {pump.dimensionImage && (
              <FadeUp className="mt-10">
                <h3 className="text-lg font-bold text-[#1a2332] mb-4 font-display">
                  Dimensional Drawing
                </h3>
                <div className="relative w-full max-w-2xl h-80 bg-white border border-[#DDE3E8] rounded-xl overflow-hidden">
                  <Image
                    src={pump.dimensionImage}
                    alt={`${pump.name} dimensional drawing`}
                    fill
                    sizes="(max-width: 768px) 100vw, 42rem"
                    className="object-contain p-4"
                  />
                </div>
              </FadeUp>
            )}
          </div>
        </section>

        {/* ── Other models in the range ── */}
        <section className="py-20 bg-[#F5F7F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#145795] bg-white px-3 py-1.5 rounded-full mb-4">
                  Also in This Range
                </span>
                <h2 className="text-3xl font-black text-[#1a2332] font-display">
                  Other Coolant Pump Models
                </h2>
              </div>
              <Link
                href="/coolant-pumps"
                className="flex items-center gap-2 text-sm font-semibold text-[#145795] hover:gap-3 transition-all"
              >
                <ArrowLeft size={16} />
                Back to Coolant Pumps
              </Link>
            </FadeUp>

            <div className="grid sm:grid-cols-2 gap-6">
              {others.map((o, i) => (
                <FadeUp key={o.slug} delay={i * 0.08}>
                  <Link
                    href={`/coolant-pumps/${o.slug}`}
                    className="group flex gap-5 items-center bg-white rounded-2xl border border-[#DDE3E8] p-5 hover:border-[#145795]/40 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative w-24 h-24 flex-shrink-0 bg-[#F5F7F9] rounded-xl overflow-hidden">
                      <Image
                        src={o.thumb}
                        alt={o.name}
                        fill
                        sizes="96px"
                        className="object-contain p-2"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-[#1a2332] group-hover:text-[#145795] transition-colors">
                        {o.name}
                      </h3>
                      <p className="text-sm text-[#586670] leading-relaxed line-clamp-2 mt-1">
                        {o.tagline}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#145795] mt-3">
                        View Details
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative py-24 overflow-hidden bg-[#0e1a26]">
          <div className="absolute inset-0 blueprint-grid opacity-20" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeUp>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-5 font-display text-balance">
                Tell Us Your Duty Point — We&apos;ll Size the Pump
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-9 max-w-2xl mx-auto">
                Share your tank depth, required flow and head, and the coolant you are running. Our
                application engineers will come back with the right {pump.name} model, column length
                and material specification.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/#contact"
                  className="flex items-center gap-2 bg-[#145795] hover:bg-[#0e3f6e] text-white font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-lg"
                >
                  Send an Enquiry
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="mailto:taraengimechllp@gmail.com"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors backdrop-blur-sm"
                >
                  <Mail size={16} />
                  Email Us
                </a>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
