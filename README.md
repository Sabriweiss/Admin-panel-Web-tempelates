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

## Deploying to Vercel

This is a standard Vite + React project, so Vercel's zero-config detection
handles it — `vercel.json` is included but mostly just documents the build
settings explicitly (`vite build`, output in `dist/`).

**Easiest path (no CLI):**
1. Push this folder to a GitHub repo.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import that repo.
3. Vercel auto-detects Vite. Click **Deploy**.
4. You'll get a live URL like `your-project.vercel.app` in about a minute.

**CLI path:**
```bash
npm i -g vercel
vercel login
vercel --prod
```
First run asks a few setup questions (project name, etc.) — accept the
defaults, it'll detect Vite automatically.

## Note on this being an internal tool

`AdminControls` is deliberately styled dark/neutral, not themed — so it
never looks like part of whichever branded site is showing underneath.
There's no login/auth here, so if this needs to stay private, put it
behind Vercel's password protection (Project Settings → Deployment
Protection) or restrict it to your team rather than relying on the URL
being obscure.
