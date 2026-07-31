// Wine bar variant — deep burgundy instead of amber-gold, same gold accent
// carried over for a consistent luxury feel. Same fonts as the classic bar
// theme, only the color story changes.
export const barWine = {
  name: 'bar-wine',
  title: 'Amber & Ash — Wine Bar',
  description: 'A curated wine list by the glass and bottle, in a warm, intimate room.',
  colors: {
    '--color-bg': '#160C0E',        // near-black, wine-tinted background
    '--color-surface': '#271317',   // deep burgundy-black card surface
    '--color-primary': '#7A1F35',   // deep wine/burgundy — headings, buttons
    '--color-secondary': '#A63A4C', // lighter wine red — CTAs, hover states
    '--color-accent': '#C9952F',    // gold — small highlights, icons
    '--color-text': '#F2E9E7',      // warm off-white text
    '--color-muted': '#B39B9E',
    '--color-border': '#3D1F26',
  },
  fonts: {
    '--font-heading': "'Playfair Display', serif",
    '--font-body': "'Manrope', sans-serif",
  },
}
