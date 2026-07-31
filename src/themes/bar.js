// Bar theme — moody, dark-first palette with a single glowing accent.
// Dark bases read cinematic/premium for nightlife; amber is the one
// accent doing all the work.
export const bar = {
  name: 'bar',
  title: 'Amber & Ash — Craft Cocktail Bar',
  description: 'Hand-crafted cocktails in a moody, low-lit room built for slow conversation.',
  colors: {
    '--color-bg': '#15100D',        // near-black warm charcoal background
    '--color-surface': '#241A16',   // card / section surface, slightly lifted
    '--color-primary': '#C9952F',   // amber gold — headings, primary buttons
    '--color-secondary': '#7A1F1F', // deep red — secondary accents, hovers
    '--color-accent': '#E8B96A',    // lighter gold glow — small highlights
    '--color-text': '#F2E9DD',      // warm off-white text (never pure white)
    '--color-muted': '#B3A290',
    '--color-border': '#3D2B22',
  },
  fonts: {
    '--font-heading': "'Playfair Display', serif",
    '--font-body': "'Manrope', sans-serif",
  },
}
