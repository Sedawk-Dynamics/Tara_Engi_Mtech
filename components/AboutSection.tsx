'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

const highlights = [
  'Engineering-first approach to pump selection and supply',
  'Application-matched solutions for diverse fluid types',
  'Reliable product quality across industrial categories',
  'Direct technical support from enquiry to delivery',
  'Long-term partnerships built on consistent service',
]

const values = [
  { label: 'Engineering Focus', desc: 'Solutions built around application requirements' },
  { label: 'Quality Driven', desc: 'Attention to product details and execution' },
  { label: 'Customer First', desc: 'Support through every stage of the process' },
]

export default function AboutSection() {
  const handleScrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/about-engineering.png"
                alt="TARA ENGIMECH LLP - Precision engineering and pump manufacturing"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Blueprint corner overlays */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#145795]" aria-hidden="true" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#145795]" aria-hidden="true" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#145795]" aria-hidden="true" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#145795]" aria-hidden="true" />
            </div>

            {/* Floating value cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -right-4 sm:-right-8 bg-white rounded-xl shadow-xl border border-[#DDE3E8] p-5 w-56"
            >
              <div className="space-y-3">
                {values.map((v) => (
                  <div key={v.label} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#145795] mt-1.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-[#1a2332]">{v.label}</p>
                      <p className="text-xs text-[#586670]">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Decorative dots */}
            <div
              className="absolute -top-6 -left-6 w-24 h-24 opacity-30"
              style={{
                backgroundImage: 'radial-gradient(circle, #145795 1px, transparent 1px)',
                backgroundSize: '8px 8px',
              }}
              aria-hidden="true"
            />
          </motion.div>

          {/* Content column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="pt-8 lg:pt-0"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-[#145795]" />
              <span className="text-xs font-bold text-[#145795] uppercase tracking-[0.25em]">
                About TARA ENGIMECH LLP
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a2332] leading-[1.1] text-balance mb-6"
              style={{ fontFamily: 'var(--font-barlow, sans-serif)' }}
            >
              Engineering Reliable Flow Solutions for{' '}
              <span className="text-[#145795]">Modern Industry</span>
            </h2>

            <p className="text-[#586670] leading-relaxed mb-5">
              TARA ENGIMECH LLP was established with a focused purpose: to supply, support, and deliver
              reliable pumping and fluid-handling engineering solutions for the industrial sector. We
              understand that the right pump is not simply a product — it is a critical component in your
              operational workflow.
            </p>
            <p className="text-[#586670] leading-relaxed mb-8">
              Our approach begins with understanding your application. We analyse fluid characteristics,
              process conditions, and operational requirements before recommending a solution. This
              engineering-first thinking ensures that every product we supply is matched to your specific
              demand — delivering consistent performance and long service life.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-10">
              {highlights.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle size={16} className="text-[#145795] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#1a2332] leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>

            <button
              onClick={() => handleScrollTo('#contact')}
              className="group inline-flex items-center gap-3 bg-[#145795] hover:bg-[#0e3f6e] text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg shadow-[#145795]/20"
            >
              Discover Our Company
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
