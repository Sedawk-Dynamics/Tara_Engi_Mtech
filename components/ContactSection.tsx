'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react'

const productOptions = [
  'External Gear Pumps',
  'Internal Gear Pumps',
  'Rotary Gear Pumps',
  'Lobe Pumps',
  'Centrifugal Pumps',
  'High-Pressure Pumps',
  'Chemical Process Pumps',
  'Customized Solutions',
  'General Enquiry',
]

type FormState = {
  fullName: string
  companyName: string
  phone: string
  email: string
  productInterest: string
  message: string
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    productInterest: '',
    message: '',
  })
  const [status, setStatus] = useState<SubmitStatus>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
      if (!accessKey) {
        // Fallback: open mail client
        const subject = encodeURIComponent(`Pump Enquiry from ${form.fullName} - ${form.companyName}`)
        const body = encodeURIComponent(
          `Name: ${form.fullName}\nCompany: ${form.companyName}\nPhone: ${form.phone}\nEmail: ${form.email}\nProduct Interest: ${form.productInterest}\n\nMessage:\n${form.message}`
        )
        window.location.href = `mailto:taraengimechllp@gmail.com?subject=${subject}&body=${body}`
        setStatus('success')
        return
      }

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Pump Enquiry from ${form.fullName} — ${form.companyName}`,
          from_name: form.fullName,
          ...form,
          botcheck: '',
        }),
      })

      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm({ fullName: '', companyName: '', phone: '', email: '', productInterest: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#145795]" />
            <span className="text-xs font-bold text-[#145795] uppercase tracking-[0.25em]">
              Contact Us
            </span>
            <div className="w-8 h-0.5 bg-[#145795]" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a2332] leading-[1.1] text-balance"
            style={{ fontFamily: 'var(--font-barlow, sans-serif)' }}
          >
            {"Let's Discuss Your"}{' '}
            <span className="text-[#145795]">Requirement</span>
          </h2>
          <p className="text-[#586670] mt-4 max-w-xl mx-auto leading-relaxed">
            Reach out with your application details and our engineering team will respond with
            a suitable recommendation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-[#F5F7F9] rounded-2xl border border-[#DDE3E8] p-6">
              <h3 className="text-sm font-bold text-[#1a2332] uppercase tracking-widest mb-5">
                Contact Details
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#145795]/10 border border-[#145795]/20 flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-[#145795]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#586670] mb-1 font-medium">Phone</p>
                    <a href="tel:+917574835189" className="text-sm font-bold text-[#1a2332] hover:text-[#145795] transition-colors block">
                      +91 75748 35189
                    </a>
                    {/* <a href="tel:+919825411864" className="text-sm font-bold text-[#1a2332] hover:text-[#145795] transition-colors block">
                      +91 98254 11864
                    </a> */}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#145795]/10 border border-[#145795]/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={16} className="text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#586670] mb-1 font-medium">WhatsApp</p>
                    <a
                      href="https://wa.me/917574835189?text=Hello%20TARA%20ENGIMECH%20LLP%2C%20I%20would%20like%20to%20enquire%20about%20your%20pumping%20solutions."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#25D366] hover:text-green-600 transition-colors block"
                    >
                      +91 75748 35189
                    </a>
                    <a
                      href="https://wa.me/919825411864?text=Hello%20TARA%20ENGIMECH%20LLP%2C%20I%20would%20like%20to%20enquire%20about%20your%20pumping%20solutions."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#25D366] hover:text-green-600 transition-colors block"
                    >
                      +91 98254 11864
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#145795]/10 border border-[#145795]/20 flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-[#145795]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#586670] mb-1 font-medium">Email</p>
                    <a
                      href="mailto:taraengimechllp@gmail.com"
                      className="text-sm font-bold text-[#1a2332] hover:text-[#145795] transition-colors break-all"
                    >
                      taraengimechllp@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#145795]/10 border border-[#145795]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-[#145795]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#586670] mb-1 font-medium">Office Location</p>
                    {/* TODO: Add exact office address */}
                    {/* TODO: Add latitude and longitude for map integration */}
                    <p className="text-sm text-[#586670]">Gujarat, India</p>
                    <p className="text-xs text-[#586670] opacity-60">(Full address coming soon)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp quick links */}
            <div className="bg-[#25D366]/10 rounded-2xl border border-[#25D366]/20 p-5">
              <p className="text-sm font-bold text-[#1a2332] mb-3">Quick WhatsApp Enquiry</p>
              <div className="space-y-2">
                <a
                  href="https://wa.me/917574835189?text=Hello%20TARA%20ENGIMECH%20LLP%2C%20I%20would%20like%20to%20enquire%20about%20your%20pumping%20solutions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-[#25D366] text-white rounded-lg text-sm font-semibold hover:bg-[#20bb5a] transition-colors"
                >
                  <MessageCircle size={16} />
                  Chat: +91 75748 35189
                </a>
                <a
                  href="https://wa.me/919825411864?text=Hello%20TARA%20ENGIMECH%20LLP%2C%20I%20would%20like%20to%20enquire%20about%20your%20pumping%20solutions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white border border-[#25D366]/30 text-[#25D366] rounded-lg text-sm font-semibold hover:bg-[#25D366]/5 transition-colors"
                >
                  <MessageCircle size={16} />
                  Chat: +91 98254 11864
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="bg-[#F5F7F9] rounded-2xl border border-[#DDE3E8] p-8">
              <h3 className="text-sm font-bold text-[#1a2332] uppercase tracking-widest mb-6">
                Submit Enquiry
              </h3>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <CheckCircle size={48} className="text-[#145795] mb-4" />
                  <h4 className="text-xl font-bold text-[#1a2332] mb-2">Enquiry Received!</h4>
                  <p className="text-[#586670] text-sm max-w-xs">
                    Thank you for your enquiry. Our team will review your requirement and
                    respond shortly at {form.email || 'your provided email'}.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm text-[#145795] hover:underline font-semibold"
                  >
                    Submit another enquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot spam protection */}
                  <input type="checkbox" name="botcheck" className="hidden" aria-hidden="true" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold text-[#1a2332] uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 bg-white border border-[#DDE3E8] rounded-lg text-sm text-[#1a2332] placeholder:text-gray-400 focus:outline-none focus:border-[#145795] focus:ring-1 focus:ring-[#145795] transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="companyName" className="block text-xs font-bold text-[#1a2332] uppercase tracking-wider mb-2">
                        Company Name *
                      </label>
                      <input
                        id="companyName"
                        name="companyName"
                        type="text"
                        required
                        value={form.companyName}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="w-full px-4 py-3 bg-white border border-[#DDE3E8] rounded-lg text-sm text-[#1a2332] placeholder:text-gray-400 focus:outline-none focus:border-[#145795] focus:ring-1 focus:ring-[#145795] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-[#1a2332] uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 bg-white border border-[#DDE3E8] rounded-lg text-sm text-[#1a2332] placeholder:text-gray-400 focus:outline-none focus:border-[#145795] focus:ring-1 focus:ring-[#145795] transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-[#1a2332] uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 bg-white border border-[#DDE3E8] rounded-lg text-sm text-[#1a2332] placeholder:text-gray-400 focus:outline-none focus:border-[#145795] focus:ring-1 focus:ring-[#145795] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="productInterest" className="block text-xs font-bold text-[#1a2332] uppercase tracking-wider mb-2">
                      Product Interest
                    </label>
                    <select
                      id="productInterest"
                      name="productInterest"
                      value={form.productInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-[#DDE3E8] rounded-lg text-sm text-[#1a2332] focus:outline-none focus:border-[#145795] focus:ring-1 focus:ring-[#145795] transition-colors"
                    >
                      <option value="">Select product category...</option>
                      {productOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-[#1a2332] uppercase tracking-wider mb-2">
                      Message / Application Requirement *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Please describe your application requirement — fluid type, flow rate, pressure, temperature, etc."
                      className="w-full px-4 py-3 bg-white border border-[#DDE3E8] rounded-lg text-sm text-[#1a2332] placeholder:text-gray-400 focus:outline-none focus:border-[#145795] focus:ring-1 focus:ring-[#145795] transition-colors resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg p-3">
                      <AlertCircle size={16} />
                      Submission failed. Please try again or contact us directly via WhatsApp.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex items-center justify-center gap-2 bg-[#145795] hover:bg-[#0e3f6e] disabled:bg-[#145795]/60 text-white font-bold py-4 rounded-lg transition-all duration-200 shadow-lg shadow-[#145795]/20 text-sm"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting Enquiry...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Submit Enquiry
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-[#586670]">
                    All enquiries are sent to{' '}
                    <a href="mailto:taraengimechllp@gmail.com" className="text-[#145795] hover:underline">
                      taraengimechllp@gmail.com
                    </a>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
