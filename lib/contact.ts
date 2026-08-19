/**
 * Single source of truth for company contact details.
 *
 * These used to be typed out in five separate components, which is how the
 * site ended up showing one phone number in the contact card and a different
 * pair in the footer. Import from here instead of hardcoding.
 */

const ADDRESS_LINES = [
  'E-105, Tirupati Aakruti Industrial Estate',
  'B/h. Rashmi Growth Hub-2, Nr. Gujarat Vepari Mandal',
  'Odhav Ring Road, Ahmedabad',
  'Gujarat 382418, India',
]

/**
 * Both numbers take calls. WhatsApp runs on the first number only — the
 * second is call-only, so never build a wa.me link from it.
 */
const PHONES = [
  { display: '+91 75748 35189', tel: '+917574835189' },
  { display: '+91 98254 11864', tel: '+919825411864' },
]

const ENQUIRY_TEXT =
  'Hello TARA ENGIMECH LLP, I would like to enquire about your pumping solutions.'

export const CONTACT = {
  company: 'TARA ENGIMECH LLP',

  /** Every number that takes calls, in the order they should be listed. */
  phones: PHONES,

  /** Single-action CTAs ("Call Now", the mobile bar) use this one. */
  phone: PHONES[0],

  whatsapp: {
    display: '+91 75748 35189',
    href: `https://wa.me/917574835189?text=${encodeURIComponent(ENQUIRY_TEXT)}`,
  },

  emails: {
    /** Enquiry CTAs and the contact-form fallback use this one. */
    primary: 'taraengimechllp@gmail.com',
    sales: 'sales.taraengimechllp@gmail.com',
  },

  website: { display: 'www.taraengimechllp.com', href: 'https://www.taraengimechllp.com' },

  /** Company profile PDF served from /public. */
  catalogue: { href: '/tara-engimech-profile.pdf', filename: 'TARA-ENGIMECH-Company-Profile.pdf' },

  address: {
    lines: ADDRESS_LINES,
    full: ADDRESS_LINES.join(', '),
    mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      ADDRESS_LINES.join(', ')
    )}`,
  },
}
