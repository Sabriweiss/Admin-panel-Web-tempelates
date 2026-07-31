import { motion } from 'framer-motion'

export const BRANCHES = {
  restaurant: {
    label: 'Restaurant',
    themes: [
      { key: 'restaurant', label: 'Classic' },
      { key: 'restaurant-vegetarian', label: 'Vegetarian' },
      { key: 'restaurant-seafood', label: 'Seafood' },
    ],
  },
  cafe: {
    label: 'Cafe',
    themes: [
      { key: 'cafe', label: 'Classic' },
      { key: 'cafe-matcha', label: 'Matcha' },
      { key: 'cafe-bakery', label: 'Bakery' },
    ],
  },
  bar: {
    label: 'Bar',
    themes: [
      { key: 'bar', label: 'Classic' },
      { key: 'bar-wine', label: 'Wine' },
      { key: 'bar-tropical', label: 'Tropical' },
    ],
  },
}

// Height in px this bar takes up - Navbar's stickyOffset and the page's
// top padding both need to match this so nothing sits underneath it.
export const ADMIN_BAR_HEIGHT = 108

/**
 * Fixed control bar, deliberately styled dark/neutral so it never looks
 * like part of whichever branded theme is currently showing underneath -
 * this is a tool, not content. Two rows: branch (restaurant/cafe/bar),
 * then that branch's 3 theme variants. Switching branch jumps to that
 * branch's classic theme by default.
 */
export default function AdminControls({ branch, activeTheme, onSelectBranch, onSelectTheme }) {
  const branchKeys = Object.keys(BRANCHES)
  const currentThemes = BRANCHES[branch].themes

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] bg-neutral-950 text-neutral-100 border-b border-neutral-800"
      style={{ height: ADMIN_BAR_HEIGHT }}
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center gap-2 py-2">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs uppercase tracking-[0.15em] text-neutral-500 w-20 shrink-0">
            Branch
          </span>
          {branchKeys.map((key) => (
            <button
              key={key}
              onClick={() => onSelectBranch(key)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                branch === key
                  ? 'bg-white text-neutral-950'
                  : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
              }`}
            >
              {BRANCHES[key].label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs uppercase tracking-[0.15em] text-neutral-500 w-20 shrink-0">
            Theme
          </span>
          {currentThemes.map((t) => (
            <button
              key={t.key}
              onClick={() => onSelectTheme(t.key)}
              className="relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
            >
              {activeTheme === t.key && (
                <motion.span
                  layoutId="theme-pill"
                  className="absolute inset-0 bg-emerald-500 rounded-full"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
              <span
                className={`relative ${
                  activeTheme === t.key ? 'text-neutral-950' : 'text-neutral-300 hover:text-white'
                }`}
              >
                {t.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
