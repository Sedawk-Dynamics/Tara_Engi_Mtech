'use client'

import { motion } from 'framer-motion'
import { Settings, Shield, BookOpen, Star, Headphones, Handshake } from 'lucide-react'

const reasons = [
  {
    icon: Settings,
    title: 'Engineering-Focused Solutions',
    desc: 'Solutions are selected and configured around real application requirements. We begin with understanding your fluid, pressure, flow rate, and operational conditions before recommending a pump.',
    stat: '01',
  },
  {
    icon: Shield,
    title: 'Reliable Product Performance',
    desc: 'Our products are designed with attention to durability, material compatibility, and operational consistency — delivering performance you can depend on across demanding duty cycles.',
    stat: '02',
  },
  {
    icon: BookOpen,
    title: 'Application Understanding',
    desc: 'We take a practical approach to matching pump technology with fluid characteristics and process needs. This ensures the product supplied is truly appropriate for your application.',
    stat: '03',
  },
  {
    icon: Star,
    title: 'Quality-Driven Approach',
    desc: 'Attention to product selection, technical detail, and dependable execution defines our approach. We do not cut corners — every recommendation is made with quality and longevity in mind.',
    stat: '04',
  },
  {
    icon: Headphones,
    title: 'Responsive Customer Support',
    desc: 'Clear communication and active assistance throughout the enquiry and product selection process. We remain accessible and responsive from initial contact through to final delivery.',
    stat: '05',
  },
  {
    icon: Handshake,
    title: 'Long-Term Partnership',
    desc: 'Our commitment extends beyond a single transaction. We aim to build relationships where our customers can rely on TEM as a dependable engineering partner for future requirements.',
    stat: '06',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#145795]" />
            <span className="text-xs font-bold text-[#145795] uppercase tracking-[0.25em]">
              Why Choose TEM
            </span>
            <div className="w-8 h-0.5 bg-[#145795]" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a2332] leading-[1.1] text-balance"
            style={{ fontFamily: 'var(--font-barlow, sans-serif)' }}
          >
            Why Industries Choose{' '}
            <span className="text-[#145795]">TEM</span>
          </h2>
          <p className="text-[#586670] mt-4 max-w-2xl mx-auto leading-relaxed">
            Our engineering-focused approach, reliable product selection, and responsive support are what set
            TARA ENGIMECH LLP apart as a dependable industrial pumping partner.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative bg-[#F5F7F9] hover:bg-white border border-[#DDE3E8] hover:border-[#145795]/30 rounded-2xl p-7 transition-all duration-300 hover:shadow-lg hover:shadow-[#145795]/8"
              >
                {/* Number watermark */}
                <div className="absolute top-5 right-6 text-6xl font-black text-[#145795]/6 group-hover:text-[#145795]/10 transition-colors select-none"
                  aria-hidden="true">
                  {reason.stat}
                </div>

                {/* Icon */}
                <div className="relative z-10 w-12 h-12 rounded-xl bg-[#145795]/10 group-hover:bg-[#145795] border border-[#145795]/20 flex items-center justify-center mb-5 transition-all duration-300">
                  <Icon size={20} className="text-[#145795] group-hover:text-white transition-colors" />
                </div>

                <h3
                  className="text-lg font-bold text-[#1a2332] mb-3 group-hover:text-[#145795] transition-colors"
                  style={{ fontFamily: 'var(--font-barlow, sans-serif)' }}
                >
                  {reason.title}
                </h3>
                <p className="text-sm text-[#586670] leading-relaxed">{reason.desc}</p>

                {/* Animated bottom line */}
                <div className="mt-6 h-0.5 w-0 group-hover:w-12 bg-[#145795] transition-all duration-500 rounded-full" aria-hidden="true" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
