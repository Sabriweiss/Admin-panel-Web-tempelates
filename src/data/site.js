/**
 * Business info lives here so it's not duplicated across Navbar, Footer,
 * and the Contact page. Keyed by the same 9 theme names as themes/index.js
 * so the name changes along with the colors/photos. A real single-industry
 * repo only keeps its own 3 keys - see restaurant/cafe/bar-onepage's
 * version of this file for the leaner pattern.
 */
export const SITE = {
  restaurant: {
    name: 'Ember & Oak',
    address: '123 Main St, Your City',
    phone: '(555) 123-4567',
    hours: 'Mon–Sun: 11am – 10pm',
    ratingIcon: 'utensils',
    social: [{ label: 'Instagram', href: '#' }, { label: 'Facebook', href: '#' }],
  },
  'restaurant-vegetarian': {
    name: 'Ember & Oak — Garden Table',
    address: '123 Main St, Your City',
    phone: '(555) 123-4567',
    hours: 'Mon–Sun: 11am – 10pm',
    ratingIcon: 'utensils',
    social: [{ label: 'Instagram', href: '#' }, { label: 'Facebook', href: '#' }],
  },
  'restaurant-seafood': {
    name: 'Ember & Oak — Coastal Table',
    address: '123 Main St, Your City',
    phone: '(555) 123-4567',
    hours: 'Mon–Sun: 11am – 10pm',
    ratingIcon: 'utensils',
    social: [{ label: 'Instagram', href: '#' }, { label: 'Facebook', href: '#' }],
  },
  cafe: {
    name: 'Cedar & Bloom',
    address: '45 Elm Street, Your City',
    phone: '(555) 987-6543',
    hours: 'Mon–Sun: 7am – 6pm',
    ratingIcon: 'bean',
    social: [{ label: 'Instagram', href: '#' }, { label: 'Facebook', href: '#' }],
  },
  'cafe-matcha': {
    name: 'Cedar & Bloom — Matcha Bar',
    address: '45 Elm Street, Your City',
    phone: '(555) 987-6543',
    hours: 'Mon–Sun: 7am – 6pm',
    ratingIcon: 'bean',
    social: [{ label: 'Instagram', href: '#' }, { label: 'Facebook', href: '#' }],
  },
  'cafe-bakery': {
    name: 'Cedar & Bloom — Bakery',
    address: '45 Elm Street, Your City',
    phone: '(555) 987-6543',
    hours: 'Mon–Sun: 7am – 6pm',
    ratingIcon: 'bean',
    social: [{ label: 'Instagram', href: '#' }, { label: 'Facebook', href: '#' }],
  },
  bar: {
    name: 'Amber & Ash',
    address: '88 Vine Alley, Your City',
    phone: '(555) 456-7890',
    hours: 'Tue–Sun: 5pm – 2am',
    ratingIcon: 'wine',
    social: [{ label: 'Instagram', href: '#' }, { label: 'Facebook', href: '#' }],
  },
  'bar-wine': {
    name: 'Amber & Ash — Wine Room',
    address: '88 Vine Alley, Your City',
    phone: '(555) 456-7890',
    hours: 'Tue–Sun: 5pm – 2am',
    ratingIcon: 'wine',
    social: [{ label: 'Instagram', href: '#' }, { label: 'Facebook', href: '#' }],
  },
  'bar-tropical': {
    name: 'Amber & Ash — Tiki House',
    address: '88 Vine Alley, Your City',
    phone: '(555) 456-7890',
    hours: 'Tue–Sun: 5pm – 2am',
    ratingIcon: 'wine',
    social: [{ label: 'Instagram', href: '#' }, { label: 'Facebook', href: '#' }],
  },
}
