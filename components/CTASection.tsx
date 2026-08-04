'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'

function FluidLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ctaFluid" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[...Array(6)].map((_, i) => (
        <motion.path
          key={i}
          d={`M ${-100 + i * 60} ${80 + i * 40} Q ${350 + i * 40} ${40 + i * 30} ${900 + i * 30} ${120 + i * 50}`}
          stroke="url(#ctaFluid)"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 + i * 0.3, delay: i * 0.2, ease: 'easeInOut' }}
        />
      ))}
    </svg>
  )
}

export default function CTASection() {
  const handleScrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/cta-industrial.png"
          alt="Industrial pump installation"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#145795]/90" />
      </div>

      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <FluidLines />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-white/40" />
            <span className="text-xs font-bold text-white/70 uppercase tracking-[0.25em]">
              Get in Touch
            </span>
            <div className="w-8 h-0.5 bg-white/40" />
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] text-balance mb-6"
            style={{ fontFamily: 'var(--font-barlow, sans-serif)' }}
          >
            Looking for the Right{' '}
            <br className="hidden sm:block" />
            Pumping Solution?
          </h2>

          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Share your application requirements with our team and discover a solution designed
            around your operational needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleScrollTo('#contact')}
              className="group flex items-center gap-2 bg-white text-[#145795] font-bold px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-xl w-full sm:w-auto justify-center"
            >
              Request a Quote
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://wa.me/917574835189?text=Hello%20TARA%20ENGIMECH%20LLP%2C%20I%20would%20like%20to%20enquire%20about%20your%20pumping%20solutions."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bb5a] text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-xl w-full sm:w-auto justify-center"
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </div>
        </motion.div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/20 grid grid-cols-1 sm:grid-cols-2 gap-4 text-center"
        >
          <div>
            <p className="text-white font-bold text-lg">Precision in Every Component.</p>
            <p className="text-blue-200 text-sm">Engineering-grade pump solutions</p>
          </div>
          <div>
            <p className="text-white font-bold text-lg">Performance in Every Flow.</p>
            <p className="text-blue-200 text-sm">Reliable delivery across all applications</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
