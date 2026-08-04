'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Search, Microscope, Lightbulb, CheckCheck, Truck } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Understand Requirement',
    desc: 'We begin by listening. Understanding your fluid, flow requirements, pressures, temperatures, and operational context is the foundation of every solution.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Analyze Application',
    desc: 'Technical analysis of fluid properties, system conditions, and environmental factors to ensure the recommended product is genuinely suited to the duty.',
    icon: Microscope,
  },
  {
    number: '03',
    title: 'Recommend Solution',
    desc: 'A specific product recommendation — with detailed reasoning — is presented. No generic catalogues. Solutions are matched to your application requirements.',
    icon: Lightbulb,
  },
  {
    number: '04',
    title: 'Technical Confirmation',
    desc: 'Review and confirmation of technical specifications, material compatibility, and performance parameters before finalising the supply arrangement.',
    icon: CheckCheck,
  },
  {
    number: '05',
    title: 'Supply & Support',
    desc: 'Timely product delivery with continued support post-supply. We remain available for technical queries, installation guidance, and future requirements.',
    icon: Truck,
  },
]

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%'])

  return (
    <section className="py-24 bg-[#F5F7F9] overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#145795]" />
            <span className="text-xs font-bold text-[#145795] uppercase tracking-[0.25em]">
              Our Process
            </span>
            <div className="w-8 h-0.5 bg-[#145795]" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a2332] leading-[1.1] text-balance"
            style={{ fontFamily: 'var(--font-barlow, sans-serif)' }}
          >
            From Requirement to{' '}
            <span className="text-[#145795]">Reliable Solution</span>
          </h2>
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden lg:block">
          {/* Animated connecting line */}
          <div className="relative mb-8">
            <div className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-[#DDE3E8] rounded-full" aria-hidden="true" />
            <motion.div
              style={{ width: lineWidth }}
              className="absolute top-8 left-[10%] h-0.5 bg-[#145795] rounded-full origin-left"
              aria-hidden="true"
            />
          </div>

          <div className="grid grid-cols-5 gap-4 relative">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Circle node */}
                  <div className="relative mb-8">
                    <div className="w-16 h-16 rounded-full bg-[#145795] border-4 border-[#F5F7F9] shadow-lg flex items-center justify-center z-10 relative">
                      <Icon size={22} className="text-white" />
                    </div>
                  </div>

                  {/* Step number */}
                  <span className="text-xs font-mono font-bold text-[#145795] mb-2">{step.number}</span>

                  <h3
                    className="text-base font-bold text-[#1a2332] mb-3"
                    style={{ fontFamily: 'var(--font-barlow, sans-serif)' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#586670] leading-relaxed">{step.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#DDE3E8]" aria-hidden="true" />

          <div className="space-y-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex gap-6 pl-16"
                >
                  {/* Circle node */}
                  <div className="absolute left-0 w-12 h-12 rounded-full bg-[#145795] flex items-center justify-center shadow-lg">
                    <Icon size={18} className="text-white" />
                  </div>

                  <div className="flex-1 bg-white rounded-xl border border-[#DDE3E8] p-5">
                    <div className="text-xs font-mono font-bold text-[#145795] mb-1">{step.number}</div>
                    <h3
                      className="text-base font-bold text-[#1a2332] mb-2"
                      style={{ fontFamily: 'var(--font-barlow, sans-serif)' }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#586670] leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
