'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import {
  ChevronRight,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  Shield,
  Settings,
  Gauge,
  Droplets,
  Mail,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { coolantPumps, COOLANT_APPLICATIONS } from '@/lib/coolant-pumps'

const whyPoints = [
  {
    icon: Shield,
    title: 'Seal-Less Where It Counts',
    desc: 'Our single-stage wet ends carry no shaft seal at all — the single most common coolant-pump failure point is simply designed out.',
  },
  {
    icon: Settings,
    title: 'Built to Your Tank',
    desc: 'Column length, outlet size and material are made to order, so the pump matches your machine instead of the other way round.',
  },
  {
    icon: Gauge,
    title: 'Verified Performance',
    desc: 'Every published duty point comes off our calibrated test rig — the head you specify is the head you get on the shop floor.',
  },
  {
    icon: Droplets,
    title: 'Any Coolant, Any Chemistry',
    desc: 'Cast iron through to SS 316, Bronze, Alloy-20 and PP — for water, emulsion, neat cutting oil or aggressive wash solutions.',
  },
]

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

export default function CoolantPumpsIndex() {
  return (
    <>
      <Navbar />
      <WhatsAppFloat />

      <main>
        {/* ── Hero ── */}
        <section className="relative bg-[#0e1a26] pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 blueprint-grid opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e1a26] via-[#145795]/40 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-xs text-white/60 mb-6 font-medium"
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
              <span className="text-white">Coolant Pumps</span>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#145795] bg-white px-4 py-2 rounded-full mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#145795] animate-pulse" />
                Product Category
              </span>

              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight text-balance mb-5 font-display">
                Coolant
                <br />
                <span className="text-[#5aadff]">Pumps</span>
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Vertical immersion coolant pumps for machine tools that run all day. Three series —
                TE/RG single stage, TE/RG multi stage and high-pressure TE/MC — covering everything
                from a 0.1 HP grinder flood to 183 metres of through-spindle head.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#models"
                  className="flex items-center gap-2 bg-[#145795] hover:bg-[#0e3f6e] text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-lg"
                >
                  Explore All Models
                  <ArrowRight size={16} />
                </a>
                <a
                  href="https://wa.me/917574835189?text=Hello%20TARA%20ENGIMECH%2C%20I%20need%20a%20quote%20for%20Coolant%20Pumps."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-xl transition-colors backdrop-blur-sm"
                >
                  <MessageCircle size={16} />
                  Request a Quote
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Stats strip ── */}
        <section className="bg-[#145795]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
              {[
                { value: '3', label: 'Pump Series' },
                { value: '0.1 – 5 HP', label: 'Motor Range' },
                { value: '250 LPM', label: 'Max Discharge' },
                { value: '183 m', label: 'Max Head' },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div className="text-2xl md:text-3xl font-black">{s.value}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-blue-200 mt-1.5">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Overview ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <FadeUp>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#145795] bg-[#145795]/10 px-3 py-1.5 rounded-full mb-4">
                  About This Range
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-[#1a2332] leading-tight mb-6 font-display text-balance">
                  The Pump That Has to Outlast the Machine
                </h2>
                <p className="text-[#586670] leading-relaxed mb-4">
                  A coolant pump lives a hard life. It runs every hour the machine runs, sits
                  submerged in emulsion or neat oil, and swallows whatever chips make it past the
                  filter. TARA ENGIMECH builds its coolant range around that reality — seal-less wet
                  ends on the single-stage units, semi-open impellers that pass solids instead of
                  clogging, and balanced rotors that keep the motor cool and quiet through long
                  shifts.
                </p>
                <p className="text-[#586670] leading-relaxed">
                  Nothing here is a catalogue compromise. Column length is cut to your tank depth,
                  the outlet is sized to your line, and the wetted materials are chosen for the
                  coolant you actually run. Standard models are held in stock for immediate
                  despatch; specials are engineered to order.
                </p>
              </FadeUp>

              <FadeUp delay={0.1} className="grid sm:grid-cols-2 gap-5">
                {whyPoints.map((w) => (
                  <div
                    key={w.title}
                    className="bg-[#F5F7F9] border border-[#DDE3E8] rounded-2xl p-6 hover:border-[#145795]/40 transition-colors"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#145795] flex items-center justify-center mb-4">
                      <w.icon size={20} className="text-white" aria-hidden />
                    </div>
                    <h3 className="font-bold text-[#1a2332] mb-2 leading-snug">{w.title}</h3>
                    <p className="text-sm text-[#586670] leading-relaxed">{w.desc}</p>
                  </div>
                ))}
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ── Models ── */}
        <section id="models" className="py-20 bg-[#F5F7F9] dot-grid scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="text-center mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#145795] bg-white px-3 py-1.5 rounded-full mb-4">
                The Range
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-[#1a2332] font-display text-balance mb-4">
                Three Series, One Purpose
              </h2>
              <p className="text-[#586670] max-w-2xl mx-auto leading-relaxed">
                Pick the series by the pressure you need. Every model page carries the full
                performance chart, construction details and application list.
              </p>
            </FadeUp>

            <div className="grid md:grid-cols-3 gap-8">
              {coolantPumps.map((pump, i) => (
                <FadeUp key={pump.slug} delay={i * 0.1}>
                  <Link
                    href={`/coolant-pumps/${pump.slug}`}
                    className="group flex flex-col h-full bg-white rounded-2xl shadow-sm border border-[#DDE3E8] overflow-hidden hover:shadow-xl hover:border-[#145795]/30 transition-all duration-500"
                  >
                    <div className="relative h-60 bg-gradient-to-br from-[#F5F7F9] to-[#eef1f4] overflow-hidden">
                      <Image
                        src={pump.thumb}
                        alt={pump.fullTitle}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                      />
                      {pump.badge && (
                        <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-widest text-white bg-[#145795] px-3 py-1.5 rounded-full">
                          {pump.badge}
                        </span>
                      )}
                      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#145795]/90 to-transparent flex items-end px-5 pb-3">
                        <span className="text-white font-black text-lg tracking-wide">
                          {pump.model}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-bold text-[#1a2332] leading-tight mb-2 group-hover:text-[#145795] transition-colors">
                        {pump.name}
                      </h3>
                      <p className="text-sm text-[#586670] leading-relaxed mb-5">{pump.tagline}</p>

                      <ul className="space-y-2 mb-6">
                        {pump.highlights.slice(0, 3).map((h) => (
                          <li key={h.label} className="flex gap-2.5 items-start text-sm">
                            <CheckCircle2
                              size={15}
                              className="text-[#145795] flex-shrink-0 mt-0.5"
                              aria-hidden
                            />
                            <span className="text-[#586670]">
                              <span className="font-semibold text-[#1a2332]">{h.label}:</span>{' '}
                              {h.value}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <span className="mt-auto flex items-center justify-between text-sm font-semibold text-[#145795] border border-[#145795]/30 rounded-xl px-4 py-2.5 group-hover:bg-[#145795] group-hover:text-white transition-colors">
                        View Full Specifications
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── Applications ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="text-center mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#145795] bg-[#145795]/10 px-3 py-1.5 rounded-full mb-4">
                Where They Work
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-[#1a2332] font-display text-balance">
                A Wide Range of Application
              </h2>
            </FadeUp>

            <div className="flex flex-wrap justify-center gap-3">
              {COOLANT_APPLICATIONS.map((a, i) => (
                <motion.span
                  key={a}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="bg-[#F5F7F9] border border-[#DDE3E8] text-[#1a2332] text-sm font-semibold px-5 py-2.5 rounded-full hover:border-[#145795] hover:text-[#145795] transition-colors"
                >
                  {a}
                </motion.span>
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
                Not Sure Which Series Fits?
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-9 max-w-2xl mx-auto">
                Send us your tank depth, the flow and head you need, and the coolant you run. We
                will come back with a model, a column length and a price — usually the same working
                day.
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
