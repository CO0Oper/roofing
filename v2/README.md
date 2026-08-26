# TopGuard Roofing — v2 concept

A second, independent website concept for TopGuard Roofing (San Jose, CA), built to sit
alongside the original React/Vite version in this repo without changing any of it.

**Live:** `https://co0oper.github.io/roofing/v2/`
**Original:** `https://co0oper.github.io/roofing/`

---

## What this is

Plain static HTML, CSS and JavaScript. No framework, no build step, no dependencies.
The whole thing is four files plus optimised images, and it deploys by being copied.

```
v2/
├── index.html     structure, meta tags, LocalBusiness JSON-LD
├── styles.css     design system + all layout
├── app.js         review wall filtering/search, nav, demo form, reveal
├── reviews.js     the 19 written Google reviews as data
└── assets/        responsive WebP + JPEG derivatives of the two source images
```

Total transfer on first load is roughly 200 KB plus one hero image (~70–250 KB depending
on viewport). The original 2.5 MB source PNGs in `/public/assets` are left untouched;
`v2/assets` holds resized WebP/JPEG versions at 880 / 1280 / 1800 px.

## Design decisions

- **Palette** — shingle charcoal `#14181c`, limestone `#faf7f2`, copper flashing `#c0682c`.
  Copper rather than the usual contractor red: warmer, reads premium, and it's the colour
  of the flashing detail the site keeps talking about.
- **Type** — Fraunces for display (sturdy, crafted, established), Inter for body. Both from
  Google Fonts with a full local fallback stack.
- **Structure** — hero → trust bar → services → craft → process → review wall → crew →
  quote form → FAQ → closing CTA. Two conversion paths are always reachable: a phone
  number in the header and a sticky call/inspection bar on mobile.

## The review wall

The centrepiece. All 21 Google reviews (19 with written text, 2 rating-only) captured from
the live Google Business Profile on 21 Aug 2026 and stored verbatim in `reviews.js`.

- Masonry layout, deterministic avatar colours, Google mark on every card
- Filter chips by service — replacement, repairs, storm, gutters, skylights, metal
- Free-text search across name, body and service tags
- Long reviews clamp to 7 lines with a "Read full review" toggle
- Star distribution bars and a "Verify on Google" link straight to the listing

To refresh the reviews later, replace the array in `reviews.js` — nothing else needs
touching. Each entry takes `name`, `meta`, `when`, `price`, `tags`, `services`, `text`.

## Accuracy

Every factual claim on the page traces to either the Google Business Profile (address,
phone, hours, veteran-owned, 5.0 / 21 reviews, roofing-contractor category) or to something
a reviewer actually wrote (financing, insurance coordination, next-day written estimates
with diagrams, daily photo updates, one-day reroofs, attic inspections, cleanup).

No licence number, insurance status, years in business, warranty terms or crew roles are
asserted anywhere, because none of those are publicly verifiable. The footer says the copy
is a concept pending owner review. **Fill those in with the owner before launch.**

The two photographs are illustrative stock-style renders carried over from the original
demo, not TopGuard project photos. Swap them for real job photos before going live.

## Deploying

`.github/workflows/deploy-pages-v2.yml` builds both versions into one Pages artifact:
the original Vite build at `/`, this folder copied to `/v2/`.

GitHub Pages serves only one site per repository, so **disable the older
"Deploy to GitHub Pages" workflow in the Actions tab** — otherwise the two race each
other for the Pages deployment lock and whichever finishes last wins.

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000/v2/
```

No build, no install.

## Before launch

- [ ] Replace both images with real TopGuard project photos
- [ ] Add CSLB licence number, insurance and bonding details
- [ ] Confirm warranty terms and add them to the FAQ
- [ ] Point the demo form at a real endpoint (email + SMS) and enable photo upload
- [ ] Register a domain, update `<link rel="canonical">`, `og:image` and the JSON-LD `url`
- [ ] Add the website URL to the Google Business Profile (it currently has none)
