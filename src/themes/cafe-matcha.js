// Matcha/green-tea variant — soft matcha greens instead of coffee browns.
// Same fonts as the classic cafe theme, only the color story changes.
export const cafeMatcha = {
  name: 'cafe-matcha',
  title: 'Cedar & Bloom — Matcha & Green Tea Bar',
  description: 'Ceremonial-grade matcha and green tea drinks in a calm, minimalist space.',
  colors: {
    '--color-bg': '#F8FAF3',        // soft cream, green-tinted
    '--color-surface': '#EAF0DD',   // light matcha card surface
    '--color-primary': '#5C7A3E',   // matcha green — headings, buttons
    '--color-secondary': '#8AA05C', // lighter matcha — CTAs, hover states
    '--color-accent': '#D9B65C',    // toasted caramel gold — small highlights
    '--color-text': '#2B3420',      // near-black green for body text
    '--color-muted': '#6B7A56',
    '--color-border': '#DCE6C9',
  },
  fonts: {
    '--font-heading': "'Lora', serif",
    '--font-body': "'Nunito', sans-serif",
  },
}
