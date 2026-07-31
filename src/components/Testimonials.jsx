import { Star, UtensilsCrossed, Wine } from 'lucide-react'
import { RevealGroup } from './Reveal'

// Lucide's stock "Bean" icon is a generic legume/kidney-bean shape, not a
// coffee bean specifically - so this is a small hand-built one instead: an
// oval outline with the characteristic center crease. The crease is drawn
// in the surface color (the section's own background) so it reads as a
// carved groove rather than a colored line, regardless of theme.
function CoffeeBeanIcon({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path
        d="M12 2.5C7.3 2.5 3.5 6.7 3.5 12S7.3 21.5 12 21.5 20.5 17.3 20.5 12 16.7 2.5 12 2.5z"
        fill="currentColor"
      />
      <path
        d="M13.6 4.4c-2.7 2.5-2.7 5.9-.3 8.3.1.1.2.2.3.3 2.4 2.4 2.4 5.8-.3 8.3"
        fill="none"
        stroke="var(--color-surface)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

const RATING_ICONS = {
  star: Star,
  bean: CoffeeBeanIcon,
  utensils: UtensilsCrossed,
  wine: Wine,
}

/**
 * reviews: [{ quote, author, rating }]
 * icon: 'star' | 'bean' | 'utensils' | 'wine' - which icon fills the rating row.
 * Pass SITE[ACTIVE_THEME].ratingIcon from data/site.js so it stays consistent per business.
 */
export default function Testimonials({ title = 'What Guests Say', reviews = [], icon = 'star' }) {
  const Icon = RATING_ICONS[icon] || Star

  return (
    <section className="bg-brand-surface py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-heading text-4xl text-brand-text mb-12 text-center">{title}</h2>
        <RevealGroup className="grid md:grid-cols-3 gap-8" stagger={0.15}>
          {reviews.map((r, i) => (
            <div key={i} className="text-center">
              <div className="flex justify-center gap-1 text-brand-accent mb-3">
                {Array.from({ length: r.rating || 5 }).map((_, j) => (
                  <Icon key={j} size={18} fill="currentColor" strokeWidth={1.5} />
                ))}
              </div>
              <p className="font-body text-brand-text italic mb-4">"{r.quote}"</p>
              <p className="font-body text-sm text-brand-muted">— {r.author}</p>
            </div>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
