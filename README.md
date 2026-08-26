# Pace — Partners Landing Page

A single-page React app (Vite) for a fictional step-rewards app, "Pace." Built to follow the same scroll-driven landing page pattern as the Sweatcoin /partners page — sticky nav, gradient hero with a live-counting stat, partner logo strip, stat bar, offering cards, a horizontal case-study carousel, testimonials, and a contact footer — with entirely original copy, brand name, and color palette.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Where to edit

Everything lives in `src/App.jsx` (content and structure) and `src/index.css` (design tokens — colors, type, spacing are all CSS variables at the top of the file).

- `PARTNER_LOGOS` — swap in your real partner/client names
- `OFFERS` — the 4 "how it works" offering cards
- `CASES` — the case-study carousel cards and their metrics
- `TESTIMONIALS` — quote cards
- Hero headline, subhead, and the counter stat are directly in the `App` component
- Contact email is set in the final `<section className="contact">` block

## Swap the brand

Once you send over your real brand name, tagline, offerings, stats, and any logos, I can drop them straight into this same structure.
