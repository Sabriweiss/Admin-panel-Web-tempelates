import { useEffect, useState } from "react";
import { applyTheme } from "./themes";
import SmoothScroll from "./lib/SmoothScroll";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MenuCard from "./components/MenuCard";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import AdminControls, {
  BRANCHES,
  ADMIN_BAR_HEIGHT,
} from "./components/AdminControls";
import { IMAGES } from "./lib/placeholderImages";
import { SITE } from "./data/site";
import { MENU } from "./data/menu";
import { TESTIMONIALS } from "./data/testimonials";
import { ABOUT_COPY } from "./data/about";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

// Admin panel: pick a branch (restaurant/cafe/bar), then one of its 3
// theme variants, and the entire page below updates live - colors, fonts,
// photos, name, menu, testimonials, and the page title/meta description
// all switch together, no reload. AdminControls is a fixed bar at the top;
// everything else gets pushed down by ADMIN_BAR_HEIGHT (both as padding on
// this wrapper and as Navbar's stickyOffset) so nothing sits underneath it.
export default function App() {
  const [branch, setBranch] = useState("restaurant");
  const [activeTheme, setActiveTheme] = useState("restaurant");

  useEffect(() => {
    applyTheme(activeTheme);
  }, [activeTheme]);

  function handleSelectBranch(nextBranch) {
    setBranch(nextBranch);
    setActiveTheme(BRANCHES[nextBranch].themes[0].key); // default to that branch's classic theme
  }

  const { HERO_IMAGE, ABOUT_IMAGE, GALLERY_IMAGES } = IMAGES[activeTheme];
  const site = SITE[activeTheme];
  const about = ABOUT_COPY[activeTheme];
  const menu = MENU[activeTheme];
  const showReservationFields = branch !== "cafe";

  return (
    <>
      <AdminControls
        branch={branch}
        activeTheme={activeTheme}
        onSelectBranch={handleSelectBranch}
        onSelectTheme={setActiveTheme}
      />
      <div style={{ paddingTop: ADMIN_BAR_HEIGHT }}>
        <SmoothScroll>
          <div className="font-body">
            <ScrollProgress />
            <Navbar
              logo={site.name}
              stickyOffset={ADMIN_BAR_HEIGHT}
              links={[
                { label: "About", href: "#about" },
                { label: "Menu", href: "#menu" },
                { label: "Gallery", href: "#gallery" },
                { label: "Contact", href: "#contact" },
              ]}
              ctaLabel="Reserve"
            />
            <Hero
              eyebrow="Live Preview"
              title={site.name}
              subtitle={about.title}
              ctaLabel="View Menu"
              onCtaClick={() => {
                const target = document.querySelector("#menu");
                if (window.__lenis && target) window.__lenis.scrollTo(target);
                else target?.scrollIntoView({ behavior: "smooth" });
              }}
              imageUrl={HERO_IMAGE}
            />

            <About
              eyebrow={about.eyebrow}
              title={about.title}
              paragraphs={about.pageParagraphs}
              imageUrl={ABOUT_IMAGE}
            />

            <section id="menu" className="max-w-5xl mx-auto px-6 py-20">
              <h2 className="font-heading text-4xl text-brand-text mb-10 text-center">
                Menu
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {menu.map((section) => (
                  <MenuCard
                    key={section.category}
                    category={section.category}
                    items={section.items}
                  />
                ))}
              </div>
            </section>

            <Gallery title="Gallery" images={GALLERY_IMAGES} />

            <Testimonials
              icon={site.ratingIcon}
              reviews={TESTIMONIALS[activeTheme]}
            />

            <ContactForm
              title="Reserve"
              subtitle="Live preview - this form isn't wired to a backend."
              showReservationFields={showReservationFields}
            />

            <Footer
              logo={site.name}
              address={site.address}
              phone={site.phone}
              hours={site.hours}
              social={site.social}
            />
          </div>
        </SmoothScroll>
      </div>
    </>
  );
}
