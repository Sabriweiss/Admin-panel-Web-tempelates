// Tropical/tiki variant — teal and coral instead of amber-gold, still
// dark-first. Same fonts as the classic bar theme, only the color story
// changes.
export const barTropical = {
  name: 'bar-tropical',
  title: 'Amber & Ash — Tiki & Tropical Cocktails',
  description: 'Vibrant tropical cocktails and island-inspired drinks in a lively, colorful room.',
  colors: {
    '--color-bg': '#0D1B1A',        // deep teal-black background
    '--color-surface': '#16302D',   // dark teal card surface
    '--color-primary': '#1FA396',   // vibrant teal — headings, buttons
    '--color-secondary': '#E8703A', // coral/tiki-torch orange — CTAs, hover states
    '--color-accent': '#F2C14E',    // tropical gold — small highlights, icons
    '--color-text': '#EAF5F2',      // pale teal-white text
    '--color-muted': '#8FB3AC',
    '--color-border': '#204E48',
  },
  fonts: {
    '--font-heading': "'Playfair Display', serif",
    '--font-body': "'Manrope', sans-serif",
  },
}
