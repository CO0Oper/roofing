# Ultimate Roof Repair — concept site

An independent website concept for **Ultimate Roof Repair** (San Jose, CA), built from the
company's public Google Business Profile. It sits alongside the other concepts in this repo
without touching any of them.

**Live:** `https://co0oper.github.io/roofing/ultimate/`

---

## What this is

Plain static HTML, CSS and JavaScript. No framework, no build step, no dependencies.
Archivo and IBM Plex Sans come from Google Fonts.

```
ultimate/
├── index.html   structure, meta, LocalBusiness JSON-LD
├── styles.css   design system + every layout rule
├── app.js       review wall filter/search/expand, demo form
├── reviews.js   the Google reviews as data (+ listing summary)
└── README.md    this file
```

`assets/` is not in the repo. The Pages workflow generates `hero-880/1280/1800.jpg` and
`detail-800/1200.jpg` into the published folder from the two source PNGs in
`public/assets`, so the repo carries one copy of each photograph rather than six.

First load is roughly 45 KB of HTML/CSS/JS plus fonts and one hero image
(88–310 KB depending on viewport). The 2.5 MB source PNGs in `/public/assets` are left
untouched.

## What is different from the earlier concept at `/`

- **Real reviews.** All eight written Google reviews, quoted in full rather than summarised.
- **A review wall** with service filters, free-text search, and per-card expand.
- **A quote form in the hero** — three fields, for the visitor who is ready now. The
  fuller request form (address plus a description of the problem) stays at the bottom
  of the page for the visitor who read everything first.
- **Rating breakdown** — 16 × 5★, 3 × 4★, and an explicit note that 11 of the 19 ratings
  carry no written text. The earlier concept showed the 4.8 without that context.
- **Services and process** derived from the listing and from what reviewers describe,
  rather than generic roofing copy.
- **Images at a sane weight** — resized JPEGs with correct `srcset`/`sizes`
  (88–310 KB), instead of two 2.5 MB PNGs served at full size.

## Where the content comes from

Every factual statement traces to one of two sources:

1. **The Google Business Profile** — name, category, address, phone, hours, the 4.8/19
   rating, the wheelchair-accessible attribute, and the business description quoted in
   the About section.
2. **What a reviewer actually wrote** — insurance coordination, magnet-roller cleanup,
   fascia/soffit/gutter-guard work, bathroom-fan venting, the named crew members
   (Mason, Douglas, Gregory, Chase), the workmanship warranty and payment options.

No licence number, insurance or bonding status, years in business, crew size, or warranty
terms are asserted anywhere, because none of those are publicly verifiable.
**Fill them in with the owner before launch.**

The two photographs are illustrative concept renders carried over from the earlier demo,
not real project photos. Swap them before going live.

## Refreshing the reviews

Replace the `REVIEWS` array in `reviews.js` and the `LISTING` object above it. Nothing else
needs touching — the chip counts, the wall and the star bars all derive from that data.
Each entry takes `name`, `meta`, `when`, `rating`, `service`, `tag`, `text`.

Reviews were captured from the live listing on **27 August 2026**.

## Structured data

The page carries `RoofingContractor` JSON-LD with address, geo, phone and hours.
It deliberately does **not** carry `aggregateRating` or `review` markup: Google's structured
data policy is that a site may only mark up reviews it collected itself, and these were
collected by Google. The rating belongs to the Business Profile and should stay there.

## Local preview

```bash
# generate the images once, the way the workflow does:
mkdir -p assets
for w in 880 1280 1800; do convert ../public/assets/ultimate-roof-hero.png -resize ${w}x -quality 82 assets/hero-$w.jpg; done
for w in 800 1200; do convert ../public/assets/ultimate-roof-detail.png -resize ${w}x -quality 82 assets/detail-$w.jpg; done
python3 -m http.server 8000
# then open http://localhost:8000/ultimate/
```

## Before launch

- [ ] Replace both images with real project photos
- [ ] Add the CSLB licence number, insurance and bonding details
- [ ] Confirm the warranty terms and put them in the FAQ in writing
- [ ] Point the demo form at a real endpoint (email + SMS) and allow photo upload
- [ ] Register the domain properly, set `<link rel="canonical">` and `og:image`
- [ ] Add the website URL to the Google Business Profile
- [ ] Re-check the rating and review count — they move
