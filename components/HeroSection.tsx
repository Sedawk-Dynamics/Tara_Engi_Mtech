'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, Phone, MessageCircle } from 'lucide-react'

const slides = [
  {
    id: 1,
    eyebrow: 'ENGINEERED FOR FLOW. BUILT FOR PERFORMANCE.',
    heading: 'Precision Pumping Solutions for Demanding Industries',
    subtext:
      'TARA ENGIMECH LLP delivers reliable, performance-driven pumping solutions engineered for efficiency, durability, and demanding industrial applications.',
    image: '/images/hero-industrial.png',
    tag: 'Industrial Solutions',
  },
  {
    id: 2,
    eyebrow: 'APPLICATION-SPECIFIC ENGINEERING.',
    heading: 'Engineered for Industrial Reliability',
    subtext:
      'From chemical processing to oil & gas, our pump solutions are matched precisely to your fluid handling requirements and operational conditions.',
    image: '/images/hero-slide2.png',
    tag: 'Chemical & Process',
  },
  {
    id: 3,
    eyebrow: 'PERFORMANCE THAT KEEPS MOVING.',
    heading: 'Performance That Keeps Industries Moving',
    subtext:
      'Built for continuous industrial operation — our solutions combine technical precision with proven durability to keep your processes running without compromise.',
    image: '/images/hero-slide3.png',
    tag: 'Proven Performance',
  },
]

const stats = [
  { label: 'Precision Engineering', value: 'ISO-Grade', icon: '⚙' },
  { label: 'Reliable Performance', value: '24/7 Support', icon: '◎' },
  { label: 'Application-Focused', value: 'Custom Solutions', icon: '◈' },
  { label: 'Responsive Team', value: 'Direct Contact', icon: '◇' },
]

function FluidLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="fluidGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#145795" stopOpacity="0" />
          <stop offset="50%" stopColor="#145795" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#145795" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[...Array(5)].map((_, i) => (
        <motion.path
          key={i}
          d={`M ${-200 + i * 80} ${200 + i * 120} Q ${400 + i * 60} ${100 + i * 80} ${900 + i * 40} ${300 + i * 60}`}
          stroke="url(#fluidGrad)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2.5 + i * 0.4, delay: i * 0.3, ease: 'easeInOut' }}
        />
      ))}
    </svg>
  )
}

function EngineeringGrid() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
      aria-hidden="true"
    />
  )
}

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, next])

  const handleScrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex flex-col">
      {/* Slides */}
      <div className="relative flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].image}
              alt={slides[current].heading}
              fill
              className="object-cover"
              priority
              loading="eager"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Engineering overlay elements */}
        <EngineeringGrid />
        <FluidLines />

        {/* Corner decorations */}
        <div className="absolute top-24 right-8 w-32 h-32 border border-white/10 rounded-full" aria-hidden="true" />
        <div className="absolute top-24 right-8 w-24 h-24 border border-[#145795]/30 rounded-full m-4" aria-hidden="true" />
        <div className="absolute bottom-24 left-8 w-20 h-20 border border-white/10 rotate-45" aria-hidden="true" />

        {/* Technical labels */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute top-32 right-12 hidden lg:flex flex-col items-end gap-2"
        >
          <div className="flex items-center gap-2 text-xs text-white/50">
            <div className="w-6 h-px bg-white/30" />
            <span className="font-mono">TEM-FLOW-SYS</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-white/30">
            <div className="w-4 h-px bg-white/20" />
            <span className="font-mono">v1.0.0</span>
          </div>
        </motion.div>

        {/* Main content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen pb-32">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${current}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                {/* Tag */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-3 mb-6"
                >
                  <div className="w-8 h-0.5 bg-[#145795]" />
                  <span className="text-xs font-semibold text-[#145795] uppercase tracking-[0.2em] bg-[#145795]/10 border border-[#145795]/30 px-3 py-1 rounded-full">
                    {slides[current].tag}
                  </span>
                </motion.div>

                {/* Eyebrow */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-xs sm:text-sm font-semibold text-gray-300 uppercase tracking-[0.3em] mb-4"
                >
                  {slides[current].eyebrow}
                </motion.p>

                {/* Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] text-balance mb-6"
                  style={{ fontFamily: 'var(--font-barlow, sans-serif)' }}
                >
                  {slides[current].heading}
                </motion.h1>

                {/* Subtext */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mb-10"
                >
                  {slides[current].subtext}
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-4"
                >
                  <button
                    onClick={() => handleScrollTo('#products')}
                    className="group flex items-center gap-2 bg-[#145795] hover:bg-[#1a6ab5] text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg shadow-[#145795]/30 hover:shadow-xl hover:shadow-[#145795]/40"
                  >
                    Explore Our Products
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => handleScrollTo('#contact')}
                    className="flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 backdrop-blur-sm hover:bg-white/5"
                  >
                    <Phone size={16} />
                    Request a Quote
                  </button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slide controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
          <button
            onClick={() => { prev(); setIsAutoPlaying(false) }}
            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrent(i); setIsAutoPlaying(false) }}
                className={`transition-all duration-300 rounded-full ${
                  i === current ? 'w-8 h-2 bg-[#145795]' : 'w-2 h-2 bg-white/40'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => { next(); setIsAutoPlaying(false) }}
            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Right side mobile contact */}
        <div className="absolute bottom-8 right-4 sm:right-8 z-20 flex flex-col gap-2">
          <a
            href="tel:+917574835189"
            className="flex items-center gap-2 text-xs text-white/70 hover:text-white transition-colors"
          >
            <Phone size={12} className="text-[#145795]" />
            <span className="hidden sm:inline">+91 75748 35189</span>
          </a>
        </div>
      </div>

      {/* Stats strip */}
      <div className="bg-[#145795] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px)',
        }} aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <div className="w-4 h-4 border-2 border-white/80 rounded-sm" />
                </div>
                <div>
                  <p className="text-white font-bold text-base">{stat.value}</p>
                  <p className="text-blue-200 text-xs">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
