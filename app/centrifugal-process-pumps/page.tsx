'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  ChevronRight,
  Phone,
  MessageCircle,
  Mail,
  Download,
  CheckCircle2,
  ArrowRight,
  Gauge,
  Thermometer,
  Settings,
  Shield,
  ChevronDown,
  X,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

/* ─── Data ─────────────────────────────────────────────────────────────── */

const pumps = [
  {
    id: 'tecp',
    model: 'TECP',
    name: 'Centrifugal Process Pump',
    tagline: 'Standard horizontal end-suction for general industrial service',
    image: '/images/Centrifugal-process-pump/pump-tecp.webp',
    description:
      'The TECP series is a robust horizontal end-suction centrifugal pump engineered for demanding industrial process applications. Its back pull-out design allows complete maintenance without disturbing piping, reducing downtime significantly.',
    applications: [
      'Water & wastewater treatment',
      'Chemical processing',
      'General industrial service',
      'Cooling water circulation',
      'Boiler feed & condensate',
    ],
    specs: {
      flow: 'Up to 1200 m³/hr',
      head: 'Up to 100 m',
      temp: '-20°C to +120°C',
      pressure: 'Up to 16 bar',
    },
    features: [
      'Back pull-out design for easy maintenance',
      'Radially split casing for reliability',
      'Wide range of seal options',
      'Available in CI, SS, CD4, Alloy-20',
      'Meets IS / DIN / ANSI standards',
    ],
    construction: [
      { part: 'Casing', material: 'Cast Iron / SS 304 / SS 316' },
      { part: 'Impeller', material: 'Cast Iron / Bronze / SS' },
      { part: 'Shaft', material: 'Carbon Steel / SS 316' },
      { part: 'Seal', material: 'Mechanical / Gland Packing' },
      { part: 'Bearing', material: 'Grease / Oil Lubricated' },
    ],
    badge: 'Most Popular',
    badgeColor: '#145795',
  },
  {
    id: 'tesop',
    model: 'TESOP',
    name: 'Self-Priming Open Face Pump',
    tagline: 'Reliable self-priming for solids-handling & difficult suction conditions',
    image: '/images/Centrifugal-process-pump/pump-tesop.webp',
    description:
      'The TESOP series is a self-priming centrifugal pump designed to handle liquids containing solids, air, or gas. Its open-face impeller design ensures trouble-free operation even in challenging suction conditions without an external priming system.',
    applications: [
      'Sewage & effluent handling',
      'Sump & pit drainage',
      'Construction dewatering',
      'Solids-laden slurries',
      'Agricultural irrigation',
    ],
    specs: {
      flow: 'Up to 600 m³/hr',
      head: 'Up to 60 m',
      temp: '-10°C to +90°C',
      pressure: 'Up to 10 bar',
    },
    features: [
      'True self-priming up to 8 m suction lift',
      'Open-face impeller handles soft solids',
      'Stainless-steel optional wetted parts',
      'No foot valve required',
      'Compact close-coupled design',
    ],
    construction: [
      { part: 'Casing', material: 'Cast Iron / SS 304' },
      { part: 'Impeller', material: 'Cast Iron / Bronze (Open)' },
      { part: 'Shaft', material: 'Carbon Steel / SS 304' },
      { part: 'Seal', material: 'Mechanical Seal' },
      { part: 'Bearing', material: 'Grease Lubricated' },
    ],
    badge: null,
    badgeColor: null,
  },
  {
    id: 'tesp',
    model: 'TESP',
    name: 'Slurry Process Pump',
    tagline: 'Heavy-duty wear-resistant design for abrasive slurry service',
    image: '/images/Centrifugal-process-pump/pump-tesp.webp',
    description:
      'The TESP series is specifically engineered for continuous pumping of highly abrasive and corrosive slurries. Reinforced wear-resistant liners and heavy-duty impellers extend service life dramatically in the harshest environments.',
    applications: [
      'Mining & mineral processing',
      'Ash handling in power plants',
      'Paper & pulp industry',
      'Sand & gravel dredging',
      'Chemical slurry transfer',
    ],
    specs: {
      flow: 'Up to 2000 m³/hr',
      head: 'Up to 80 m',
      temp: '-10°C to +80°C',
      pressure: 'Up to 12 bar',
    },
    features: [
      'Replaceable hard-metal liners',
      'Thick-section impeller for wear resistance',
      'Wide clearance passages for large solids',
      'Adjustable front clearance without disassembly',
      'Interchangeable with leading OEM designs',
    ],
    construction: [
      { part: 'Casing', material: 'High Chrome Alloy / Rubber Lined' },
      { part: 'Impeller', material: 'High Chrome Alloy / Natural Rubber' },
      { part: 'Shaft', material: 'High Tensile Steel' },
      { part: 'Seal', material: 'Expeller / Gland Packing' },
      { part: 'Bearing', material: 'Oil / Grease Lubricated' },
    ],
    badge: 'Heavy Duty',
    badgeColor: '#586670',
  },
  {
    id: 'tefp',
    model: 'TEFP',
    name: 'Flanged Process Pump',
    tagline: 'Chemical-grade flanged pump for corrosive & high-temperature media',
    image: '/images/pump-tefp.png',
    description:
      'The TEFP series is a heavy-duty flanged centrifugal process pump designed for corrosive chemical and petrochemical service. Its rigid construction, precision-ground flanges, and comprehensive material options make it ideal for API 610 applications.',
    applications: [
      'Petrochemical refining',
      'Acid & alkali transfer',
      'Pharmaceutical processing',
      'High-temperature hot oil',
      'API 610 OH2 applications',
    ],
    specs: {
      flow: 'Up to 900 m³/hr',
      head: 'Up to 150 m',
      temp: '-40°C to +200°C',
      pressure: 'Up to 25 bar',
    },
    features: [
      'API 610 compliant design',
      'Dual-volute casing reduces bearing loads',
      'Top-top nozzle orientation for ease of piping',
      'Full range of ANSI / DIN flange ratings',
      'Tandem / double mechanical seal options',
    ],
    construction: [
      { part: 'Casing', material: 'CS / SS 316L / Duplex / Hastelloy' },
      { part: 'Impeller', material: 'SS 316 / Duplex SS / Alloy-20' },
      { part: 'Shaft', material: 'SS 316 / 4140 Alloy Steel' },
      { part: 'Seal', material: 'API Plan 11/23/52/53 Mech Seal' },
      { part: 'Bearing', material: 'Forced Oil / Rolling Element' },
    ],
    badge: 'API Compliant',
    badgeColor: '#145795',
  },
  {
    id: 'tespp',
    model: 'TESPP',
    name: 'Split-Casing Process Pump',
    tagline: 'High-flow double-suction split case for large-volume transfer',
    image: '/images/pump-tespp.png',
    description:
      'The TESPP series features a double-suction, axially split casing design that delivers exceptional hydraulic efficiency and balanced axial thrust. Its split-case configuration enables inspection and maintenance of all internal components without disconnecting pipework.',
    applications: [
      'Municipal water supply',
      'Large HVAC systems',
      'Firewater systems',
      'Irrigation networks',
      'Industrial water circulation',
    ],
    specs: {
      flow: 'Up to 5000 m³/hr',
      head: 'Up to 120 m',
      temp: '0°C to +100°C',
      pressure: 'Up to 16 bar',
    },
    features: [
      'Double-suction for balanced axial thrust',
      'Axially split casing — zero pipe disturbance maintenance',
      'Highest hydraulic efficiency in range',
      'Available with vertical shaft configuration',
      'Meets NFPA 20 fire pump standard',
    ],
    construction: [
      { part: 'Casing', material: 'Cast Iron / Ductile Iron / Bronze' },
      { part: 'Impeller', material: 'Cast Iron / Bronze / SS (Double-Suction)' },
      { part: 'Shaft', material: 'Stainless Steel / Carbon Steel' },
      { part: 'Seal', material: 'Packing / Mechanical Seal' },
      { part: 'Bearing', material: 'Rolling Element — Oil Lubricated' },
    ],
    badge: 'High Flow',
    badgeColor: '#145795',
  },
  {
    id: 'tesmp',
    model: 'TESMP',
    name: 'Multistage Process Pump',
    tagline: 'Multistage centrifugal for high-pressure boiler feed & transfer service',
    image: '/images/pump-tesmp.png',
    description:
      'The TESMP series is a horizontal multistage centrifugal pump delivering high head at moderate flow rates. Multiple impeller stages in series build pressure incrementally, making it the preferred choice for boiler feed, reverse osmosis, and high-pressure injection duties.',
    applications: [
      'Boiler feed water',
      'Reverse osmosis & membrane systems',
      'High-pressure liquid injection',
      'Descaling & high-pressure wash',
      'Pressure boosting systems',
    ],
    specs: {
      flow: 'Up to 400 m³/hr',
      head: 'Up to 600 m',
      temp: '-20°C to +150°C',
      pressure: 'Up to 60 bar',
    },
    features: [
      '2 to 10 stages for flexible head selection',
      'Radially split diffuser-type casings',
      'Precision-lapped wear rings minimize internal leakage',
      'Balanced thrust via opposing impeller arrangement',
      'Available in SS 304 / SS 316 all-wetted parts',
    ],
    construction: [
      { part: 'Casing', material: 'Cast Iron / SS 304 / SS 316' },
      { part: 'Impeller', material: 'Bronze / SS 316 (Closed)' },
      { part: 'Shaft', material: 'EN 24 / SS 316' },
      { part: 'Seal', material: 'Mechanical Seal — Single / Double' },
      { part: 'Bearing', material: 'Angular Contact — Oil Lubricated' },
    ],
    badge: null,
    badgeColor: null,
  },
  {
    id: 'tehmp',
    model: 'TEHMP',
    name: 'High-Pressure Multistage Pump',
    tagline: 'Ultra-high-pressure multistage for the most demanding service',
    image: '/images/Centrifugal-process-pump/pump-tehmp.webp',
    description:
      'The TEHMP series represents the pinnacle of our centrifugal pump engineering — an ultra-high-pressure multistage pump designed for critical service where reliability is non-negotiable. Manufactured to exacting tolerances with premium alloys for extreme-pressure injection and high-head duties.',
    applications: [
      'High-pressure water injection (oil & gas)',
      'Descaling in steel mills',
      'Hydrostatic testing systems',
      'High-head mine dewatering',
      'Supercritical boiler feed',
    ],
    specs: {
      flow: 'Up to 200 m³/hr',
      head: 'Up to 1200 m',
      temp: '-20°C to +180°C',
      pressure: 'Up to 120 bar',
    },
    features: [
      'Up to 14 stages for ultra-high head',
      'Precision-forged alloy steel shaft',
      'Double mechanical seal as standard',
      'Vibration-monitored bearing assemblies',
      'Full ATEX / IECEx hazardous-area compliance',
    ],
    construction: [
      { part: 'Casing', material: 'Forged Steel / Stainless Steel' },
      { part: 'Impeller', material: 'SS 316 / Duplex SS (Closed)' },
      { part: 'Shaft', material: 'Alloy Steel — Precision Ground' },
      { part: 'Seal', material: 'Double Mech Seal — API Plan 53' },
      { part: 'Bearing', material: 'Precision Roller — Forced Lubrication' },
    ],
    badge: 'Premium',
    badgeColor: '#0e3f6e',
  },
]

const industries = [
  { name: 'Oil & Gas', icon: '⚡' },
  { name: 'Chemical Processing', icon: '⚗' },
  { name: 'Pharmaceuticals', icon: '💊' },
  { name: 'Water Treatment', icon: '💧' },
  { name: 'Power Plants', icon: '🔋' },
  { name: 'Petrochemicals', icon: '🏭' },
  { name: 'Food & Beverage', icon: '🌾' },
  { name: 'Paper & Pulp', icon: '📄' },
]

const whyPoints = [
  {
    icon: Shield,
    title: 'ISO-Certified Manufacturing',
    desc: 'Every pump produced under strict quality management with full dimensional and performance testing.',
  },
  {
    icon: Settings,
    title: 'Application Engineering',
    desc: 'Our team evaluates your duty point and selects the optimal model, material, and seal arrangement.',
  },
  {
    icon: Gauge,
    title: 'Performance Guaranteed',
    desc: 'Hydraulic performance verified on our calibrated test rig before despatch — no surprises on site.',
  },
  {
    icon: Thermometer,
    title: 'Wide Material Range',
    desc: 'From standard CI to exotic alloys — Hastelloy, Duplex, Alloy-20, CD4 — for any fluid chemistry.',
  },
]

/* ─── Sub-components ────────────────────────────────────────────────────── */

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

function SpecBadge({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center justify-center bg-[#F5F7F9] border border-[#DDE3E8] rounded-xl p-4 text-center">
      <span className="text-[10px] font-bold uppercase tracking-widest text-[#586670] mb-1">
        {label}
      </span>
      <span className="text-sm font-bold text-[#145795] leading-tight">{value}</span>
    </div>
  )
}

function PumpCard({ pump, index }: { pump: (typeof pumps)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      id={pump.id}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-2xl shadow-sm border border-[#DDE3E8] overflow-hidden hover:shadow-xl hover:border-[#145795]/30 transition-all duration-500 group"
    >
      {/* Image + badge */}
      <div className="relative h-56 bg-gradient-to-br from-[#F5F7F9] to-[#eef1f4] overflow-hidden">
        <Image
          src={pump.image}
          alt={`${pump.model} — ${pump.name}`}
          fill
          className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
        />
        {pump.badge && (
          <span
            className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-widest text-white px-3 py-1.5 rounded-full"
            style={{ backgroundColor: pump.badgeColor ?? '#145795' }}
          >
            {pump.badge}
          </span>
        )}
        {/* model label bottom-left */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#145795]/90 to-transparent flex items-end px-5 pb-3">
          <span className="text-white font-black text-xl tracking-wide">{pump.model}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-[#1a2332] leading-tight mb-1">{pump.name}</h3>
        <p className="text-sm text-[#586670] leading-relaxed mb-4">{pump.tagline}</p>

        {/* Quick specs grid */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <SpecBadge label="Max Flow" value={pump.specs.flow} />
          <SpecBadge label="Max Head" value={pump.specs.head} />
          <SpecBadge label="Temperature" value={pump.specs.temp} />
          <SpecBadge label="Pressure" value={pump.specs.pressure} />
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-between text-sm font-semibold text-[#145795] border border-[#145795]/30 rounded-xl px-4 py-2.5 hover:bg-[#145795]/5 transition-colors"
          aria-expanded={expanded}
        >
          <span>{expanded ? 'Hide Details' : 'View Full Specifications'}</span>
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          />
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="pt-5 space-y-5">
                {/* Description */}
                <p className="text-sm text-[#586670] leading-relaxed">{pump.description}</p>

                {/* Features */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#1a2332] mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {pump.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-[#586670]">
                        <CheckCircle2 size={14} className="mt-0.5 text-[#145795] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Materials */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#1a2332] mb-3">
                    Construction Materials
                  </h4>
                  <div className="rounded-xl overflow-hidden border border-[#DDE3E8]">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="bg-[#145795] text-white">
                          <th className="text-left px-3 py-2 font-semibold">Part</th>
                          <th className="text-left px-3 py-2 font-semibold">Material</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pump.construction.map((row, i) => (
                          <tr
                            key={row.part}
                            className={i % 2 === 0 ? 'bg-white' : 'bg-[#F5F7F9]'}
                          >
                            <td className="px-3 py-2 font-medium text-[#1a2332]">{row.part}</td>
                            <td className="px-3 py-2 text-[#586670]">{row.material}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Applications */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#1a2332] mb-3">
                    Applications
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {pump.applications.map((app) => (
                      <span
                        key={app}
                        className="text-xs px-3 py-1.5 rounded-full bg-[#F5F7F9] border border-[#DDE3E8] text-[#586670] font-medium"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="https://wa.me/917574835189?text=Hello%20TARA%20ENGIMECH%2C%20I%20need%20a%20quote%20for%20your%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#145795] text-white text-sm font-semibold hover:bg-[#0e3f6e] transition-colors"
                >
                  <MessageCircle size={15} />
                  Enquire About {pump.model}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function CentrifugalProcessPumpsPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  const filtered = activeFilter
    ? pumps.filter((p) => p.id === activeFilter)
    : pumps

  return (
    <>
      <Navbar />
      <WhatsAppFloat />

      <main>
        {/* ── Hero Banner ── */}
        <section className="relative min-h-[480px] flex items-end overflow-hidden">
          <Image
            src="/images/centrifugal-hero.png"
            alt="Centrifugal Process Pumps — TARA ENGIMECH LLP"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e1a26]/90 via-[#145795]/60 to-transparent" />
          {/* Blueprint grid overlay */}
          <div className="absolute inset-0 blueprint-grid opacity-20" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-40 w-full">
            {/* Breadcrumb */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-xs text-white/60 mb-5 font-medium"
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
              <span className="text-white">Centrifugal Process Pumps</span>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Category pill */}
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#145795] bg-white px-4 py-2 rounded-full mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#145795] animate-pulse" />
                Product Category
              </span>

              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight text-balance mb-4 font-display">
                Centrifugal
                <br />
                <span className="text-[#5aadff]">Process Pumps</span>
              </h1>
              <p className="text-lg text-white/70 max-w-xl leading-relaxed mb-8">
                Seven precision-engineered centrifugal pump series — from general-duty TECP to
                ultra-high-pressure TEHMP — designed and manufactured in India for global industrial
                applications.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#pump-range"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('pump-range')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="flex items-center gap-2 bg-[#145795] hover:bg-[#0e3f6e] text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-lg"
                >
                  Explore All Models
                  <ArrowRight size={16} />
                </a>
                <a
                  href="https://wa.me/917574835189?text=Hello%20TARA%20ENGIMECH%2C%20I%20need%20a%20quote%20for%20Centrifugal%20Process%20Pumps."
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
                { value: '7', label: 'Pump Series' },
                { value: '5000+', label: 'Max Flow (m³/hr)' },
                { value: '1200 m', label: 'Max Head' },
                { value: '120 bar', label: 'Max Pressure' },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div className="text-3xl font-black">{s.value}</div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-blue-200 mt-1">
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
                  Engineering-Grade Centrifugal Pumps for Every Process Duty
                </h2>
                <p className="text-[#586670] leading-relaxed mb-4">
                  TARA ENGIMECH&apos;s Centrifugal Process Pump range spans seven distinct series — each
                  purpose-designed for a specific set of process conditions. From the general-service
                  TECP to the ultra-high-pressure TEHMP, every series is manufactured to tight
                  dimensional tolerances using premium materials and verified on our in-house test rig
                  before despatch.
                </p>
                <p className="text-[#586670] leading-relaxed mb-8">
                  Our pumps comply with IS 1520, DIN 24255, and select series meet API 610 OH2
                  requirements, ensuring drop-in replacement capability and long-term spare parts
                  availability across the entire range.
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    'IS 1520 Compliant',
                    'API 610 OH2',
                    'DIN 24255',
                    'CE Marked',
                    'ISO 9001:2015',
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-bold text-[#145795] border border-[#145795]/40 rounded-full px-4 py-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </FadeUp>

              <FadeUp delay={0.15}>
                <div className="grid grid-cols-2 gap-4">
                  {whyPoints.map((p, i) => (
                    <div
                      key={p.title}
                      className="bg-[#F5F7F9] border border-[#DDE3E8] rounded-2xl p-5"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#145795]/10 flex items-center justify-center mb-3">
                        <p.icon size={20} className="text-[#145795]" />
                      </div>
                      <h3 className="text-sm font-bold text-[#1a2332] mb-1 leading-tight">
                        {p.title}
                      </h3>
                      <p className="text-xs text-[#586670] leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ── Pump Range ── */}
        <section id="pump-range" className="py-20 bg-[#F5F7F9] dot-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="text-center mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#145795] bg-[#145795]/10 px-3 py-1.5 rounded-full mb-4">
                Complete Range
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-[#1a2332] font-display text-balance mb-4">
                Centrifugal Process Pump Series
              </h2>
              <p className="text-[#586670] max-w-2xl mx-auto text-balance">
                Click any model card to expand full specifications, materials of construction, and
                applications. Contact us to confirm the ideal model for your duty point.
              </p>
            </FadeUp>

            {/* Model filter pills */}
            <FadeUp delay={0.1} className="flex flex-wrap justify-center gap-2 mb-10">
              <button
                onClick={() => setActiveFilter(null)}
                className={`text-xs font-bold uppercase tracking-wide px-4 py-2 rounded-full border transition-colors ${
                  activeFilter === null
                    ? 'bg-[#145795] text-white border-[#145795]'
                    : 'bg-white text-[#586670] border-[#DDE3E8] hover:border-[#145795] hover:text-[#145795]'
                }`}
              >
                All Models
              </button>
              {pumps.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActiveFilter(activeFilter === p.id ? null : p.id)}
                  className={`text-xs font-bold uppercase tracking-wide px-4 py-2 rounded-full border transition-colors ${
                    activeFilter === p.id
                      ? 'bg-[#145795] text-white border-[#145795]'
                      : 'bg-white text-[#586670] border-[#DDE3E8] hover:border-[#145795] hover:text-[#145795]'
                  }`}
                >
                  {p.model}
                </button>
              ))}
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((pump, i) => (
                <PumpCard key={pump.id} pump={pump} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Industries ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="text-center mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#145795] bg-[#145795]/10 px-3 py-1.5 rounded-full mb-4">
                End Markets
              </span>
              <h2 className="text-3xl font-black text-[#1a2332] font-display mb-3">
                Industries We Serve
              </h2>
              <p className="text-[#586670] max-w-xl mx-auto text-balance">
                Our centrifugal process pumps are trusted across the full spectrum of industrial
                process sectors worldwide.
              </p>
            </FadeUp>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {industries.map((ind, i) => (
                <FadeUp key={ind.name} delay={i * 0.07}>
                  <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-[#DDE3E8] bg-[#F5F7F9] hover:border-[#145795]/40 hover:bg-white hover:shadow-md transition-all duration-300 group">
                    <span className="text-3xl mb-3">{ind.icon}</span>
                    <span className="text-sm font-bold text-[#1a2332] group-hover:text-[#145795] transition-colors">
                      {ind.name}
                    </span>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative py-24 overflow-hidden bg-[#0e1a26]">
          <Image
            src="/images/cta-industrial.png"
            alt="Industrial pump installation"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 blueprint-grid opacity-10" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeUp>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#5aadff] bg-white/10 px-4 py-2 rounded-full mb-6">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white font-display text-balance mb-5 leading-tight">
                Need a Centrifugal Pump
                <br />
                <span className="text-[#5aadff]">Tailored to Your Process?</span>
              </h2>
              <p className="text-white/60 max-w-xl mx-auto mb-10 text-balance leading-relaxed">
                Share your flow, head, fluid, and temperature requirements. Our application engineers
                will recommend the right series, size, and material specification — at no cost.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/917574835189?text=Hello%20TARA%20ENGIMECH%2C%20I%20need%20a%20quote%20for%20Centrifugal%20Process%20Pumps."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bb5a] text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-lg"
                >
                  <MessageCircle size={18} />
                  WhatsApp Enquiry
                </a>
                <a
                  href="mailto:taraengimechllp@gmail.com?subject=Centrifugal%20Process%20Pump%20Enquiry"
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-colors backdrop-blur-sm"
                >
                  <Mail size={18} />
                  Email Enquiry
                </a>
                <a
                  href="tel:+917574835189"
                  className="flex items-center justify-center gap-2 bg-[#145795] hover:bg-[#0e3f6e] text-white font-bold px-8 py-4 rounded-xl transition-colors"
                >
                  <Phone size={18} />
                  Call Now
                </a>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white/50">
                <span>+91 75748 35189</span>
                <span className="hidden sm:block text-white/20">|</span>
                <span>+91 98254 11864</span>
                <span className="hidden sm:block text-white/20">|</span>
                <span>taraengimechllp@gmail.com</span>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
