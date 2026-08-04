'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const products = [
  {
    id: 1,
    name: 'External Gear Pumps',
    category: 'Positive Displacement',
    image: '/images/product-gear-pump.png',
    desc: 'Precision external gear pumps designed for consistent flow in high-viscosity fluid applications. Ideal for hydraulic oil, lubricants, and chemical transfer duties.',
    applications: ['Hydraulic Systems', 'Lubricant Transfer', 'Chemical Processing', 'Fuel Handling'],
    features: ['Bi-directional operation', 'Self-priming capability', 'Low shear design', 'Multiple seal options'],
    badge: 'Most Popular',
  },
  {
    id: 2,
    name: 'Internal Gear Pumps',
    category: 'Positive Displacement',
    image: '/images/product-gear-pump.png',
    desc: 'Smooth, low-pulsation internal gear pumps engineered for sensitive fluids and applications requiring consistent, metered delivery without product degradation.',
    applications: ['Edible Oils', 'Polymers', 'Adhesives', 'Paint & Coatings'],
    features: ['Quiet operation', 'Gentle product handling', 'High efficiency', 'Wide viscosity range'],
    badge: null,
  },
  {
    id: 3,
    name: 'Rotary Gear Pumps',
    category: 'Positive Displacement',
    image: '/images/product-gear-pump.png',
    desc: 'Heavy-duty rotary gear pumps built for continuous industrial service. Engineered to handle high-viscosity fluids under demanding pressure and temperature conditions.',
    applications: ['Bitumen & Asphalt', 'Heavy Fuel Oil', 'Resins', 'Molasses'],
    features: ['Jacketed options', 'High pressure rating', 'Robust construction', 'Thermal management'],
    badge: 'Heavy Duty',
  },
  {
    id: 4,
    name: 'Lobe Pumps',
    category: 'Positive Displacement',
    image: '/images/product-lobe-pump.png',
    desc: 'Hygienic and industrial lobe pumps for gentle handling of shear-sensitive and viscous products. Available in sanitary and industrial configurations.',
    applications: ['Food Processing', 'Pharmaceuticals', 'Dairy', 'Cosmetics'],
    features: ['CIP/SIP compatible', 'Low shear design', 'Sanitary finish options', 'Easy maintenance'],
    badge: 'Hygienic',
  },
  {
    id: 5,
    name: 'Centrifugal Pumps',
    category: 'Kinetic',
    image: '/images/product-centrifugal.png',
    desc: 'High-performance centrifugal pumps for water, chemicals, and process fluids requiring reliable high-volume flow at varying pressures.',
    applications: ['Water Transfer', 'Chemical Plants', 'Cooling Systems', 'Effluent Treatment'],
    features: ['High flow capacity', 'Variable speed compatible', 'Corrosion-resistant options', 'Low NPSH'],
    badge: null,
  },
  {
    id: 6,
    name: 'Chemical Process Pumps',
    category: 'Specialty',
    image: '/images/product-centrifugal.png',
    desc: 'Corrosion-resistant chemical process pumps engineered for aggressive acids, alkalis, and solvents in demanding chemical and petrochemical environments.',
    applications: ['Acid Transfer', 'Solvent Handling', 'Alkali Processing', 'Petrochemicals'],
    features: ['PVDF/PP/SS construction', 'Magnetic drive option', 'Explosion-proof variants', 'Dry-run protection'],
    badge: 'Chemical Grade',
  },
  {
    id: 7,
    name: 'High-Pressure Pumps',
    category: 'Specialty',
    image: '/images/product-gear-pump.png',
    desc: 'Purpose-engineered high-pressure pumps for applications demanding consistent delivery against elevated system pressures in industrial and process environments.',
    applications: ['Hydraulic Systems', 'Pressure Testing', 'Boiler Feed', 'Industrial Cleaning'],
    features: ['Pressure up to 250 bar', 'Low pulsation', 'Piston & plunger options', 'Precision flow control'],
    badge: 'High Pressure',
  },
  {
    id: 8,
    name: 'Customized Solutions',
    category: 'Application-Specific',
    image: '/images/product-lobe-pump.png',
    desc: 'Application-specific pump configurations designed around your exact fluid, pressure, flow, and installation requirements. Engineering consultation included.',
    applications: ['OEM Integration', 'Skid-Mounted Systems', 'Special Fluids', 'Unique Applications'],
    features: ['Custom materials', 'Special port configurations', 'Engineered for duty', 'Full technical support'],
    badge: 'Custom',
  },
]

export default function ProductsSection() {
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', slidesToScroll: 1 },
    [autoplay.current]
  )
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  const handleScrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="products" className="py-24 bg-[#F5F7F9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#145795]" />
              <span className="text-xs font-bold text-[#145795] uppercase tracking-[0.25em]">
                Our Products
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a2332] leading-[1.1] text-balance"
              style={{ fontFamily: 'var(--font-barlow, sans-serif)' }}
            >
              Engineered Products for{' '}
              <span className="text-[#145795]">Every Flow Challenge</span>
            </h2>
            <p className="text-[#586670] mt-4 max-w-xl leading-relaxed">
              Explore our performance-driven pumping solutions designed for demanding industrial applications
              across diverse fluid handling requirements.
            </p>
          </motion.div>

          {/* Carousel controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="w-11 h-11 rounded-full border-2 border-[#DDE3E8] flex items-center justify-center text-[#586670] hover:border-[#145795] hover:text-[#145795] transition-colors disabled:opacity-40"
              aria-label="Previous product"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="w-11 h-11 rounded-full border-2 border-[#DDE3E8] flex items-center justify-center text-[#586670] hover:border-[#145795] hover:text-[#145795] transition-colors disabled:opacity-40"
              aria-label="Next product"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-6">
            {products.map((product) => (
              <motion.div
                key={product.id}
                className="flex-none w-[300px] sm:w-[340px] lg:w-[380px]"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                onHoverStart={() => setHoveredId(product.id)}
                onHoverEnd={() => setHoveredId(null)}
              >
                <div className="bg-white rounded-2xl overflow-hidden border border-[#DDE3E8] shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden bg-[#F5F7F9]">
                    <motion.div
                      animate={{ scale: hoveredId === product.id ? 1.06 : 1 }}
                      transition={{ duration: 0.5 }}
                      className="relative h-full"
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="380px"
                      />
                    </motion.div>

                    {/* Blue overlay on hover */}
                    <motion.div
                      animate={{ opacity: hoveredId === product.id ? 1 : 0 }}
                      className="absolute inset-0 bg-[#145795]/60 flex items-center justify-center"
                    >
                      <button
                        onClick={() => handleScrollTo('#contact')}
                        className="bg-white text-[#145795] font-bold text-sm px-5 py-2.5 rounded-lg flex items-center gap-2"
                      >
                        <Maximize2 size={14} />
                        Get Specifications
                      </button>
                    </motion.div>

                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-3 left-3 bg-[#145795] text-white text-xs font-bold px-3 py-1 rounded-full">
                        {product.badge}
                      </div>
                    )}

                    {/* Category tag */}
                    <div className="absolute bottom-3 right-3 bg-black/60 text-white/80 text-xs px-2.5 py-1 rounded-full">
                      {product.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-[#1a2332] mb-2"
                      style={{ fontFamily: 'var(--font-barlow, sans-serif)' }}>
                      {product.name}
                    </h3>
                    <p className="text-sm text-[#586670] leading-relaxed mb-4 flex-1">{product.desc}</p>

                    {/* Applications */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {product.applications.slice(0, 3).map((app) => (
                        <span key={app} className="text-xs bg-[#F5F7F9] border border-[#DDE3E8] text-[#586670] px-2.5 py-1 rounded-full">
                          {app}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => handleScrollTo('#contact')}
                      className="group flex items-center justify-between text-sm font-bold text-[#145795] hover:text-[#0e3f6e] transition-colors border-t border-[#DDE3E8] pt-4"
                    >
                      View Product & Enquire
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {products.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`transition-all duration-300 rounded-full ${
                i === selectedIndex ? 'w-8 h-2 bg-[#145795]' : 'w-2 h-2 bg-[#DDE3E8]'
              }`}
              aria-label={`Go to product ${i + 1}`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-[#586670] text-sm mb-4">
            Looking for a specific pump type or customized solution?
          </p>
          <button
            onClick={() => handleScrollTo('#contact')}
            className="inline-flex items-center gap-2 bg-[#145795] hover:bg-[#0e3f6e] text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg shadow-[#145795]/20"
          >
            Discuss Your Requirement
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
