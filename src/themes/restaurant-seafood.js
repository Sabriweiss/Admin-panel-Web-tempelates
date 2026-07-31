// Seafood/coastal variant — ocean blues with a coral accent instead of
// red/orange. Same fonts as the classic restaurant theme, only the color
// story changes.
export const restaurantSeafood = {
  name: 'restaurant-seafood',
  title: 'Ember & Oak — Coastal Seafood',
  description: 'Fresh, sustainably-sourced seafood in a bright, coastal-inspired dining room.',
  colors: {
    '--color-bg': '#F5FAFB',        // icy white-blue background
    '--color-surface': '#E1EEF0',   // pale sea-foam card surface
    '--color-primary': '#1F6E8C',   // deep ocean teal-blue — headings, buttons
    '--color-secondary': '#3FA7B8', // lighter aqua — CTAs, hover states
    '--color-accent': '#E8935B',    // coral — small highlights, icons
    '--color-text': '#132B33',      // near-black blue for body text
    '--color-muted': '#5A7A80',
    '--color-border': '#CBE2E6',
  },
  fonts: {
    '--font-heading': "'Fraunces', serif",
    '--font-body': "'Inter', sans-serif",
  },
}
