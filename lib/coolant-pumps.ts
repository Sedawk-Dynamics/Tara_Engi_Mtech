/* ─────────────────────────────────────────────────────────────────────────
   TARA ENGIMECH LLP — Coolant Pump Range
   Model prefixes: TE/RG (single & multi stage), TE/MC (vertical multistage)
   ───────────────────────────────────────────────────────────────────────── */

export type PerfTable = {
  title: string
  note?: string
  /** Fixed leading columns (model, power, etc.) */
  headers: string[]
  /**
   * Optional spanning band rendered above a set of numeric columns —
   * `cols` are the sub-headers, and each row must supply one cell per entry.
   */
  group?: { label: string; cols: string[] }
  rows: string[][]
}

export type CoolantPump = {
  slug: string
  model: string
  name: string
  fullTitle: string
  tagline: string
  image: string
  thumb: string
  badge: string | null
  intro: string
  highlights: { label: string; value: string }[]
  features: string[]
  applications: string[]
  construction?: { part: string; material: string }[]
  usedOn?: string[]
  tables: PerfTable[]
  dimensionImage?: string
}

/** Shared across the range — machine-shop duties these pumps are built for. */
export const COOLANT_APPLICATIONS = [
  'Turning',
  'Grinding',
  'Granite cutting',
  'Boring',
  'Filtration',
  'Fountains',
  'Drilling',
  'Coolant circulation',
  'Parts washing',
  'Milling',
  'Printing',
  'Heat treatment',
  'Cutting',
  'Conveyor systems',
  'Oil transfer',
  'Sawing',
  'Machine cooling',
]

export const coolantPumps: CoolantPump[] = [
  /* ── TE/RG Single Stage ─────────────────────────────────────────────── */
  {
    slug: 'te-rg-single-stage',
    model: 'TE/RG',
    name: 'TE/RG Single Stage',
    fullTitle: 'TE/RG Single Stage Coolant Pumps',
    tagline: 'Seal-less vertical immersion pump for everyday machine-tool coolant duty',
    image: '/images/coolant/te-rg-single-stage.jpg',
    thumb: '/images/coolant/coolant-single-thumb.jpg',
    badge: 'Most Popular',
    intro:
      'The TE/RG Single Stage is our workhorse vertical immersion coolant pump — the unit that sits in the tank of a lathe, grinder or drilling machine and simply keeps running. Because the wet end carries no shaft seal at all, there is nothing to wear out and nothing to replace, which is why these pumps routinely outlast the machines they are fitted to. A semi-open impeller lets chips and fine solids pass straight through instead of blocking the pump, and column lengths are built to order so the unit matches your tank depth exactly.',
    highlights: [
      { label: 'Motor Rating', value: '0.1 HP to 1.0 HP' },
      { label: 'Immersion Depth', value: '120 mm to 600 mm' },
      { label: 'Discharge', value: 'Up to 250 LPM' },
      { label: 'Outlet Size', value: '20 mm / 25 mm / 40 mm' },
    ],
    features: [
      'Offered across a very wide capacity range to suit any machine size',
      'High design flexibility — column length and outlet built to your tank',
      'Available in Cast Iron, SS 316, SS 304, Bronze and Alloy-20',
      'Dynamically balanced shaft and rotor with premium-grade stamping and winding wire for high motor efficiency',
      'Runs virtually silent, even in enclosed machine enclosures',
      'Made to any immersion length and for practically any liquid',
      'Extruded powder-coated motor body on ratings up to 1 HP',
      'No shaft seal anywhere in the wet end — 100% maintenance free',
      'Semi-open impeller allows free passage of chips and suspended solids',
      'Held in large stock for same-week despatch',
    ],
    applications: COOLANT_APPLICATIONS,
    construction: [
      { part: 'Motor Body', material: 'Extruded Aluminium, Powder Coated' },
      { part: 'Bowl / Casing', material: 'Cast Iron / SS 304 / SS 316' },
      { part: 'Impeller', material: 'Semi-Open — Aluminium / Bronze / SS' },
      { part: 'Shaft', material: 'Stainless Steel' },
      { part: 'Bearing Bush', material: 'Gun Metal' },
      { part: 'Shaft Seal', material: 'None — seal-less design' },
    ],
    tables: [
      {
        title: 'Performance Chart — TE/RG Series',
        note: 'Discharge in LPM against total head in metres.',
        headers: ['Model', 'Imme. Depth (mm)', 'Outlet Size', 'KW / HP'],
        group: { label: 'Head in Metres vs LPM', cols: ['2', '4', '6', '8', '10', '12', '14'] },
        rows: [
          ['TE/RG 25', '120 / 170 / 220', '20 mm', '0.08 KW / 0.1 HP', '25', '10', '0', '0', '0', '0', '0'],
          ['TE/RG 40', '120 / 170 / 220', '20 mm', '0.12 KW / 0.15 HP', '40', '25', '0', '0', '0', '0', '0'],
          ['TE/RG 63', '120 / 170 / 220 / 350', '20 mm', '0.18 KW / 0.25 HP', '63', '40', '0', '0', '0', '0', '0'],
          ['TE/RG 80', '220 / 270 / 600', '20 mm', '0.18 KW / 0.25 HP', '80', '60', '30', '0', '0', '0', '0'],
          ['TE/RG 100', '170 / 220 / 270 / 350 / 600', '25 mm', '0.25 KW / 0.33 HP', '100', '80', '65', '0', '0', '0', '0'],
          ['TE/RG 160', '170 / 220 / 270 / 350 / 600', '25 mm', '0.37 KW / 0.5 HP', '160', '140', '120', '75', '15', '0', '0'],
          ['TE/RG 250', '220 / 270 / 350 / 440 / 600', '40 mm', '0.75 KW / 1.0 HP', '250', '245', '200', '130', '80', '0', '0'],
        ],
      },
    ],
  },

  /* ── TE/RG Multi Stage ──────────────────────────────────────────────── */
  {
    slug: 'te-rg-multi-stage',
    model: 'TE/RG',
    name: 'TE/RG Multi Stage',
    fullTitle: 'TE/RG Multi Stage Coolant Pumps',
    tagline: 'Stacked-stage immersion pump where a single impeller cannot make the pressure',
    image: '/images/coolant/te-rg-multi-stage.jpg',
    thumb: '/images/coolant/te-rg-multi-stage.jpg',
    badge: null,
    intro:
      'When a machining centre needs more pressure than a single impeller can deliver — through-tool coolant, deep-hole drilling, high-lift circulation — the TE/RG Multi Stage stacks two, three or four stages on one shaft to build head without increasing footprint. Every unit is assembled from materials we specify and inspect ourselves: CRNO stamping, a cast-iron bowl, stainless shaft and gun-metal bearing bush. Available in one to four stages as standard, with dimensional variants to suit the mounting plate you already have.',
    highlights: [
      { label: 'Stages', value: '1 to 4 stage' },
      { label: 'Motor Rating', value: '0.37 KW to 1.70 KW' },
      { label: 'Fluid Temperature', value: '0°C to 80°C' },
      { label: 'Weight Range', value: '12 kg to 36 kg' },
    ],
    features: [
      'One to four stages on a common shaft for higher head in the same footprint',
      'CRNO stamping for low core loss and cooler running',
      'Cast-iron bowl with aluminium impellers as standard',
      'Stainless-steel shaft running in a gun-metal bearing bush',
      'Handles water, cooling emulsion and cutting oil alike',
      'Rated for fluid temperatures from 0°C to 80°C',
      'Standard PCD and mounting dimensions for straight retrofit',
      'Manufactured to a range of specifications on request',
    ],
    applications: [
      'Water',
      'Cooling emulsion',
      'Cooling / cutting oil',
      'Coolant circulation',
      'Industrial washing',
      'Pressure boosting',
    ],
    usedOn: [
      'All CNC machines, lathes and machining centres',
      'Best suited to through-tool cooling and deep-hole drilling',
      'Also suitable for industrial washing systems',
    ],
    construction: [
      { part: 'Stamping', material: 'CRNO' },
      { part: 'Impeller', material: 'Aluminium' },
      { part: 'Bowl', material: 'Cast Iron' },
      { part: 'Shaft', material: 'Stainless Steel' },
      { part: 'Bearing Bush', material: 'Gun Metal' },
    ],
    dimensionImage: '/images/coolant/multi-stage-dims.jpeg',
    tables: [
      {
        title: 'Motor Detail & Dimensions — TE/RG Multi Stage',
        note: 'All dimensions in mm unless stated otherwise.',
        headers: [
          'Type',
          'No. of Stage',
          'H1',
          'H2',
          'D',
          'L1',
          'L2',
          'E',
          'PCD',
          'Power (KW)',
          'Weight (kg)',
        ],
        rows: [
          ['TE/RG-100/180', '1', '180', '245', '122', '100', '95', '25', '155', '0.37', '12'],
          ['TE/RG-120/215', '2', '215', '245', '122', '100', '95', '25', '155', '0.50', '14'],
          ['TE/RG-253/255', '3', '255', '315', '172', '135', '95', '25', '155', '1.50', '31'],
          ['TE/RG-254/315', '4', '315', '340', '172', '135', '95', '25', '155', '1.70', '36'],
        ],
      },
    ],
  },

  /* ── TE/MC Multi Stage ──────────────────────────────────────────────── */
  {
    slug: 'te-mc-multi-stage',
    model: 'TE/MC',
    name: 'TE/MC Multi Stage',
    fullTitle: 'TE/MC Multi Stage Coolant Pumps',
    tagline: 'High-pressure vertical multistage for through-spindle and high-lift coolant',
    image: '/images/coolant/temc-hero.png',
    thumb: '/images/coolant/temc-multi-stage.jpg',
    badge: 'High Pressure',
    intro:
      'The TE/MC range is where our coolant line reaches genuine high pressure — up to 183 metres of head from a 5 HP motor. Two hydraulic families are offered: the TE/MC-2 for higher head at moderate flow, and the TE/MC-4 for larger volumes at the same duty point. Both are built for continuous production on CNC machining centres, with TC/carbon seal options for high-pressure service and stainless or PP wet ends where the coolant chemistry demands it.',
    highlights: [
      { label: 'Motor Rating', value: '0.5 HP to 5 HP (0.37–3.7 KW)' },
      { label: 'Immersion Depth', value: '142 mm to 700 mm' },
      { label: 'Pumping Capacity', value: '10 to 250 LPM' },
      { label: 'Max Head', value: 'Up to 183 metres' },
    ],
    features: [
      'Offered across a very wide capacity range',
      'High flexibility of design to suit the installation',
      'Available in Cast Iron, SS 316, SS 304, Bronze and Alloy-20',
      'Dynamically balanced shaft and rotor with premium-grade stamping and winding wire for high motor efficiency',
      'Runs virtually silent under continuous load',
      'Built to any immersion length and for practically any liquid',
      'TC / carbon seal arrangement available for high-pressure duty',
      'Stainless-steel bowls and impellers, with PP construction on request',
      'Held in large stock for earliest despatch',
    ],
    applications: COOLANT_APPLICATIONS,
    usedOn: [
      'CNC turning centres, VMC and machining centres',
      'Through-spindle coolant and deep-hole drilling',
      'Grinding, drilling and milling machines',
      'Pressure-boosting systems needing constant pressure and flow',
      'Plastic moulding and cooling systems',
    ],
    construction: [
      { part: 'Bowl / Casing', material: 'SS 304 / SS 316 / Cast Iron / PP' },
      { part: 'Impeller', material: 'Stainless Steel / PP' },
      { part: 'Shaft', material: 'Stainless Steel' },
      { part: 'Seal', material: 'TC / Carbon (high-pressure duty)' },
      { part: 'Outlet Size', material: '25 mm standard' },
      { part: 'Phase', material: 'Three Phase' },
    ],
    tables: [
      {
        title: 'Performance Data — TE/MC-2 Series',
        note: 'Head in metres against flow in LPM.',
        headers: ['Pump Model', 'Motor KW / HP', 'Length (mm)'],
        group: {
          label: 'Flow in LPM → Head in Metres',
          cols: ['17', '18', '25', '32', '38', '45', '50', '55'],
        },
        rows: [
          ['TE/MC 2-20', '0.37 / 0.5', '142', '18', '17', '16', '15', '13', '12', '10', '8'],
          ['TE/MC 2-30', '0.37 / 0.5', '160', '27', '26', '24', '22', '20', '18', '15', '12'],
          ['TE/MC 2-40', '0.75 / 1', '178', '26', '35', '33', '30', '26', '24', '20', '16'],
          ['TE/MC 2-50', '0.75 / 1', '196', '45', '43', '40', '37', '33', '30', '24', '20'],
          ['TE/MC 2-60', '0.75 / 1', '214', '53', '52', '50', '45', '40', '36', '30', '24'],
          ['TE/MC 2-70', '0.75 / 1', '232', '63', '61', '57', '52', '47', '41', '35', '28'],
          ['TE/MC 2-90', '1.1 / 1.5', '268', '80', '78', '73', '67', '67', '54', '45', '37'],
          ['TE/MC 2-110', '1.1 / 1.5', '304', '98', '95', '89', '82', '73', '64', '54', '44'],
          ['TE/MC 2-130', '1.5 / 2', '340', '116', '114', '106', '98', '89', '78', '65', '52'],
          ['TE/MC 2-150', '1.5 / 2', '376', '134', '130', '123', '112', '100', '90', '73', '60'],
          ['TE/MC 2-180', '2.2 / 3', '430', '161', '157', '148', '136', '121', '108', '91', '76'],
          ['TE/MC 2-220', '2.2 / 3', '502', '198', '192', '180', '165', '148', '130', '110', '90'],
          ['TE/MC 2-260', '3.0 / 4', '574', '232', '228', '214', '198', '179', '158', '130', '110'],
        ],
      },
      {
        title: 'Performance Data — TE/MC-4 Series',
        note: 'Head in metres against flow in LPM.',
        headers: ['Pump Model', 'Motor KW / HP', 'Length (mm)'],
        group: {
          label: 'Flow in LPM → Head in Metres',
          cols: ['25', '33', '50', '64', '80', '96', '112', '128'],
        },
        rows: [
          ['TE/MC 4-20', '0.37 / 0.5', '160', '19', '18', '17', '15', '13', '10', '8', '6'],
          ['TE/MC 4-30', '0.75 / 1', '187', '28', '27', '26', '24', '20', '18', '13', '10'],
          ['TE/MC 4-40', '0.75 / 1', '214', '38', '36', '34', '32', '27', '24', '19', '13'],
          ['TE/MC 4-50', '1.1 / 1.5', '241', '47', '45', '43', '40', '34', '31', '23', '17'],
          ['TE/MC 4-60', '1.1 / 1.5', '268', '56', '54', '52', '48', '41', '37', '28', '20'],
          ['TE/MC 4-70', '1.5 / 2', '295', '66', '63', '61', '56', '48', '43', '33', '24'],
          ['TE/MC 4-80', '1.5 / 2', '322', '74', '72', '70', '64', '55', '50', '38', '27'],
          ['TE/MC 4-100', '2.2 / 3', '376', '96', '90', '87', '81', '71', '62', '48', '34'],
          ['TE/MC 4-120', '2.2 / 3', '430', '114', '108', '104', '95', '85', '75', '58', '41'],
          ['TE/MC 4-140', '3 / 4', '484', '136', '126', '122', '112', '101', '89', '78', '55'],
          ['TE/MC 4-160', '3 / 4', '538', '152', '144', '140', '129', '115', '101', '78', '55'],
          ['TE/MC 4-190', '3.7 / 5', '619', '183', '171', '168', '153', '137', '122', '93', '67'],
          ['TE/MC 4-220', '3.7 / 5', '700', '211', '200', '192', '178', '160', '138', '108', '79'],
        ],
      },
    ],
  },
]

export function getCoolantPump(slug: string) {
  return coolantPumps.find((p) => p.slug === slug)
}
