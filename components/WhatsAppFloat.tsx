'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Phone } from 'lucide-react'

const contacts = [
  {
    name: 'Enquiries — Line 1',
    number: '+91 75748 35189',
    href: 'https://wa.me/917574835189?text=Hello%20TARA%20ENGIMECH%20LLP%2C%20I%20would%20like%20to%20enquire%20about%20your%20pumping%20solutions.',
  },
  {
    name: 'Enquiries — Line 2',
    number: '+91 98254 11864',
    href: 'https://wa.me/919825411864?text=Hello%20TARA%20ENGIMECH%20LLP%2C%20I%20would%20like%20to%20enquire%20about%20your%20pumping%20solutions.',
  },
]

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Mobile sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex sm:hidden border-t border-[#DDE3E8] bg-white">
        <a
          href="tel:+917574835189"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-[#145795] font-bold text-sm border-r border-[#DDE3E8]"
        >
          <Phone size={18} />
          Call Us
        </a>
        <a
          href="https://wa.me/917574835189?text=Hello%20TARA%20ENGIMECH%20LLP%2C%20I%20would%20like%20to%20enquire%20about%20your%20pumping%20solutions."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#25D366] text-white font-bold text-sm"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>

      {/* Desktop floating WhatsApp button */}
      <div className="fixed bottom-8 right-6 z-50 hidden sm:flex flex-col items-end gap-3">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl border border-[#DDE3E8] p-4 w-72"
            >
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#DDE3E8]">
                <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1a2332]">TARA ENGIMECH LLP</p>
                  <p className="text-xs text-[#586670]">Typically replies quickly</p>
                </div>
              </div>

              <p className="text-xs text-[#586670] mb-4 leading-relaxed">
                Select a contact below to start a WhatsApp conversation.
              </p>

              <div className="space-y-2">
                {contacts.map((contact) => (
                  <a
                    key={contact.number}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#F5F7F9] hover:bg-[#25D366]/10 border border-[#DDE3E8] hover:border-[#25D366]/30 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                      <MessageCircle size={14} className="text-[#25D366]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1a2332] group-hover:text-[#25D366] transition-colors">
                        {contact.name}
                      </p>
                      <p className="text-xs text-[#586670]">{contact.number}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle button */}
        <motion.button
          onClick={() => setOpen(!open)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bb5a] text-white shadow-xl shadow-[#25D366]/30 flex items-center justify-center transition-colors"
          aria-label={open ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X size={22} />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <MessageCircle size={22} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  )
}
