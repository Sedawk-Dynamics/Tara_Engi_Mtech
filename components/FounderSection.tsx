'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export default function FounderSection() {
  return (
    <section className="py-24 bg-[#0e1a26] relative overflow-hidden">
      {/* Blueprint background */}
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

      {/* Decorative circles */}
      <div className="absolute top-8 right-8 w-64 h-64 border border-[#145795]/10 rounded-full" aria-hidden="true" />
      <div className="absolute top-8 right-8 w-48 h-48 border border-[#145795]/8 rounded-full m-8" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/founder-message.png"
                alt="Founder and Management - TARA ENGIMECH LLP"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Blueprint corner overlays */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#145795]" aria-hidden="true" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#145795]" aria-hidden="true" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1a26]/60 to-transparent" />
            </div>

            {/* Company badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 -right-4 bg-[#145795] text-white p-5 rounded-xl shadow-xl"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-1">
                Established
              </p>
              <p className="text-2xl font-black">TEM</p>
              <p className="text-xs text-blue-200">TARA ENGIMECH LLP</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-[#145795]" />
              <span className="text-xs font-bold text-[#145795] uppercase tracking-[0.25em]">
                Leadership Message
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl font-black text-white leading-[1.1] text-balance mb-8"
              style={{ fontFamily: 'var(--font-barlow, sans-serif)' }}
            >
              A Message from{' '}
              <span className="text-[#145795]">Our Leadership</span>
            </h2>

            {/* Quote block */}
            <div className="relative">
              <Quote size={40} className="absolute -top-2 -left-2 text-[#145795]/30" aria-hidden="true" />
              <blockquote className="relative z-10 pl-4 border-l-2 border-[#145795]">
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed italic mb-6">
                  &ldquo;At TARA ENGIMECH LLP, our focus is simple: understand the application, recommend
                  the right solution, and build relationships through dependable service. We believe strong
                  engineering is not only about the product — it is about how reliably that product performs
                  when our customers need it most. We remain committed to quality, technical understanding,
                  and long-term value in every solution we deliver.&rdquo;
                </p>
              </blockquote>
            </div>

            {/* Signature */}
            <div className="flex items-center gap-4 mt-8">
              <div className="w-12 h-0.5 bg-[#145795]" />
              <div>
                <p className="text-white font-bold">Founder &amp; Management</p>
                <p className="text-gray-400 text-sm">TARA ENGIMECH LLP</p>
              </div>
            </div>

            {/* Values chips */}
            <div className="flex flex-wrap gap-2 mt-8">
              {['Quality First', 'Technical Integrity', 'Long-Term Value', 'Customer Focus'].map((v) => (
                <span
                  key={v}
                  className="text-xs font-semibold text-[#145795] border border-[#145795]/30 bg-[#145795]/10 px-3 py-1.5 rounded-full"
                >
                  {v}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
