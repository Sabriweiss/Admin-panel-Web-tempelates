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
 * One horizontally-scrollable row of pill buttons. On narrow screens the
 * row scrolls instead of wrapping (wrapping would grow past ADMIN_BAR_HEIGHT
 * and collide with the Navbar below it).
 *
 * The edge fade uses a CSS mask (not an overlay div) - it fades the row's
 * own pixels to transparent, so whatever color is actually near the edge
 * (white, gray, emerald, whatever) fades smoothly to nothing. An overlay
 * div drawn on top would mix its own color with the button underneath and
 * create a visible seam, which is exactly what a plain gradient overlay did
 * here before - especially obvious against the bright emerald active pill.
 */
function ScrollRow({ label, children }) {
  const fadeMask = {
    maskImage: 'linear-gradient(to right, black, black calc(100% - 40px), transparent)',
    WebkitMaskImage: 'linear-gradient(to right, black, black calc(100% - 40px), transparent)',
  }
  return (
    <div
      style={fadeMask}
      className="flex items-center gap-3 overflow-x-auto pb-0.5 pr-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <span className="text-xs uppercase tracking-[0.15em] text-neutral-500 w-16 md:w-20 shrink-0">
        {label}
      </span>
      {children}
    </div>
  )
}

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
        <ScrollRow label="Branch">
          {branchKeys.map((key) => (
            <button
              key={key}
              onClick={() => onSelectBranch(key)}
              className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                branch === key
                  ? 'bg-white text-neutral-950'
                  : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
              }`}
            >
              {BRANCHES[key].label}
            </button>
          ))}
        </ScrollRow>

        <ScrollRow label="Theme">
          {currentThemes.map((t) => (
            <button
              key={t.key}
              onClick={() => onSelectTheme(t.key)}
              className="relative shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap"
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
        </ScrollRow>
      </div>
    </div>
  )
}
