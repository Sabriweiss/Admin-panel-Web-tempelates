# Admin Panel — Live Theme Preview

One page, one live preview. Pick a branch (Restaurant / Cafe / Bar), then
pick one of that branch's 3 theme variants — colors, fonts, photos,
business name, menu, testimonials, and the page title/meta description all
switch together, instantly, no reload.

Built from the same shared component library and 9-theme data as the 6
client repos — this isn't a separate design, it's a control panel wrapped
around the same content.

## Run it locally

```bash
npm install
npm run dev
```

## How it works

- `src/components/AdminControls.jsx` — the fixed bar at the top. Two rows:
  branch buttons, then that branch's 3 theme buttons. Switching branch
  jumps to that branch's classic theme by default.
- `src/App.jsx` — holds `branch` and `activeTheme` as React state (not a
  hardcoded constant like the 6 client repos). Every time `activeTheme`
  changes, `applyTheme()` runs again, live.
- Everything else — `src/components/`, `src/themes/`, `src/data/`,
  `src/lib/` — is the exact same shared library and 9-key data (`SITE`,
  `MENU`, `TESTIMONIALS`, `ABOUT_COPY`, `IMAGES`, all keyed by the same 9
  theme names) used across the real repos. No content is duplicated here;
  it's read from the same source.
- `Navbar` got one small addition for this project: a `stickyOffset` prop
  (defaults to `0`, so it's a no-op everywhere else) so it can stick right
  below the fixed admin bar instead of colliding with it.
