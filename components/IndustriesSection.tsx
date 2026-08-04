'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Flame,
  FlaskConical,
  Paintbrush,
  Wheat,
  Pill,
  Droplets,
  Zap,
  Anchor,
  Cog,
  Factory,
} from 'lucide-react'

const industries = [
  {
    icon: Flame,
    name: 'Oil & Gas',
    desc: 'Reliable pumping for crude, refined fuels, and petroleum derivatives across exploration and processing.',
  },
  {
    icon: FlaskConical,
    name: 'Chemical Processing',
    desc: 'Corrosion-resistant solutions for acids, alkalis, solvents, and specialty chemical transfer duties.',
  },
  {
    icon: Paintbrush,
    name: 'Paint & Ink',
    desc: 'Precise metering and gentle handling of pigments, varnishes, resins, and high-viscosity coatings.',
  },
  {
    icon: Wheat,
    name: 'Food Processing',
    desc: 'Hygienic pump solutions for edible oils, syrups, dairy, and food-grade liquid handling.',
  },
  {
    icon: Pill,
    name: 'Pharmaceuticals',
    desc: 'Sanitary, low-shear pumping for active pharmaceutical ingredients and process fluid management.',
  },
  {
    icon: Droplets,
    name: 'Petrochemicals',
    desc: 'Engineered pumps for petrochemical process streams, polymers, and heavy hydrocarbon applications.',
  },
  {
    icon: Zap,
    name: 'Power & Energy',
    desc: 'Dependable pumping for cooling water, fuel oil, lubricants, and auxiliary plant systems.',
  },
  {
    icon: Anchor,
    name: 'Marine',
    desc: 'Seawater-resistant and offshore-grade pumps for marine engineering and deck fluid systems.',
  },
  {
    icon: Cog,
    name: 'Lubricants',
    desc: 'Specialized handling for gear oils, greases, hydraulic fluids, and high-viscosity lubricants.',
  },
  {
    icon: Factory,
    name: 'General Engineering',
    desc: 'Versatile pumping solutions for workshops, manufacturing plants, and general fluid handling needs.',
  },
]

export default function IndustriesSection() {
  return (
    <section id="industries" className="relative py-24 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/industries-bg.png"
          alt="Industrial facility background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0e1a26]/92" />
        {/* Blueprint grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(20, 87, 149, 0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(20, 87, 149, 0.8) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#145795]" />
            <span className="text-xs font-bold text-[#145795] uppercase tracking-[0.25em]">
              Industries We Serve
            </span>
            <div className="w-8 h-0.5 bg-[#145795]" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.1] text-balance"
            style={{ fontFamily: 'var(--font-barlow, sans-serif)' }}
          >
            Pumping Solutions Across{' '}
            <span className="text-[#145795]">Key Industrial Sectors</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Our pump solutions are specified and supplied for demanding applications in diverse
            industrial environments — from precision chemical dosing to heavy-duty continuous transfer.
          </p>
        </motion.div>

        {/* Industries grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {industries.map((industry, i) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative bg-white/5 hover:bg-[#145795]/20 border border-white/10 hover:border-[#145795]/40 rounded-xl p-5 transition-all duration-300 cursor-pointer"
              >
                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-[#145795]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-[#145795]/20 group-hover:bg-[#145795]/30 border border-[#145795]/30 flex items-center justify-center mb-4 transition-colors">
                    <Icon size={18} className="text-[#145795]" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2 group-hover:text-[#145795] transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {industry.desc}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#145795]/20 group-hover:border-[#145795]/50 transition-colors" aria-hidden="true" />
              </motion.div>
            )
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mt-10"
        >
          Do not see your industry listed?{' '}
          <button
            onClick={() => {
              const el = document.querySelector('#contact')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="text-[#145795] hover:text-[#1a6ab5] font-semibold underline underline-offset-2 transition-colors"
          >
            Contact us to discuss your application.
          </button>
        </motion.p>
      </div>
    </section>
  )
}
