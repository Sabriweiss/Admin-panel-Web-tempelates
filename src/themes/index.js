import { restaurant } from './restaurant'
import { restaurantVegetarian } from './restaurant-vegetarian'
import { restaurantSeafood } from './restaurant-seafood'
import { cafe } from './cafe'
import { cafeMatcha } from './cafe-matcha'
import { cafeBakery } from './cafe-bakery'
import { bar } from './bar'
import { barWine } from './bar-wine'
import { barTropical } from './bar-tropical'

// All 9 combos live here (3 industries x 3 color variants each) since this
// workspace is the source for future forks. A real single-industry repo
// only keeps its own 3 variants - see restaurant/cafe/bar-onepage's
// version of this file for the leaner pattern.
export const themes = {
  restaurant,
  'restaurant-vegetarian': restaurantVegetarian,
  'restaurant-seafood': restaurantSeafood,
  cafe,
  'cafe-matcha': cafeMatcha,
  'cafe-bakery': cafeBakery,
  bar,
  'bar-wine': barWine,
  'bar-tropical': barTropical,
}

/**
 * Swap the whole site's look by changing ACTIVE_THEME below. This is the
 * ONE line each repo changes — components never need to know which
 * industry or color variant they're rendering.
 */
export const ACTIVE_THEME = 'restaurant'

export function applyTheme(themeName = ACTIVE_THEME) {
  const theme = themes[themeName]
  if (!theme) throw new Error(`Unknown theme: ${themeName}`)
  const root = document.documentElement
  Object.entries(theme.colors).forEach(([key, value]) => root.style.setProperty(key, value))
  Object.entries(theme.fonts).forEach(([key, value]) => root.style.setProperty(key, value))
  root.dataset.theme = theme.name

  if (theme.title) document.title = theme.title

  if (theme.description) {
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', theme.description)
  }

  return theme
}
