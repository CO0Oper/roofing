---
name: J Roofing Material Sample Deck
description: A proof-first Stockton roofing pitch built from tactile material bands, verified reviews, and direct contact.
colors:
  asphalt: "#162321"
  mineral: "#f2f0e7"
  paper: "#fffef8"
  safety-orange: "#ff5c35"
  sage-shingle: "#b8c1aa"
  muted-copy: "#53615d"
  ruled-line: "#a9b0a8"
  review-field: "#26332f"
  gutter-green: "#4e625b"
typography:
  display:
    fontFamily: "IBM Plex Sans Condensed, sans-serif"
    fontSize: "clamp(4.5rem, 8vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.82
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "IBM Plex Sans Condensed, sans-serif"
    fontSize: "clamp(3.9rem, 7vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.87
    letterSpacing: "-0.03em"
  title:
    fontFamily: "IBM Plex Sans Condensed, sans-serif"
    fontSize: "2rem"
    fontWeight: 600
    lineHeight: 1
  body:
    fontFamily: "Source Sans 3, sans-serif"
    fontSize: "1.12rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Source Sans 3, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 700
    letterSpacing: "0.13em"
rounded:
  chip: "6px"
  caption: "8px"
  control: "13px"
  card: "14px"
  avatar: "50%"
spacing:
  gutter-mobile: "18px"
  gutter-default: "24px"
  control-x: "22px"
  card: "30px"
components:
  button-primary:
    backgroundColor: "{colors.safety-orange}"
    textColor: "{colors.asphalt}"
    rounded: "{rounded.control}"
    padding: "14px 22px"
    height: "56px"
  button-quiet:
    backgroundColor: "rgba(255,255,255,.08)"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "14px 22px"
    height: "56px"
  review-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.asphalt}"
    rounded: "{rounded.card}"
    padding: "30px"
---

# Design System: J Roofing Material Sample Deck

## Overview

**Creative North Star: "The Material Sample Deck"**

J Roofing is presented through the tactile language of a contractor's physical sample kit: overlapping shingle-like bands, clipped roof geometry, restrained mineral colors, and precise soft depth. Monumental condensed type supplies confidence while verified Google proof—not invented claims—does the persuading.

This is a route-specific visual world. It must not inherit another roofing template, its section format, its imagery, or its decorative assets; only shared product facts may cross route boundaries.

**Key Characteristics:**

- A fanned stack of material and proof bands replaces the generic house-photo hero.
- Asphalt green and mineral paper provide the field; safety orange is the action and proof signal.
- Google evidence and direct calling stay visible at decision points, especially on mobile.
- Generated roofing photography is treated as illustrative concept material, never company project evidence.

## Colors

The palette feels like charcoal roofing, mineral granules, aged sage material samples, and one high-visibility contractor marker.

### Primary

- **Safety Orange:** Reserved for primary calls, verified rating fields, focus rings, active underlines, and selected proof cards.

### Secondary

- **Sage Shingle:** A tactile material color for sample bands and selected review emphasis.
- **Gutter Green:** A dark metal-like secondary band and review-card variation.

### Neutral

- **Asphalt:** The hero, header, footer, dark call surfaces, avatar field, and primary text.
- **Mineral:** The main services and gallery canvas.
- **Paper:** Review cards, labels over imagery, and light foreground surfaces.
- **Review Field:** A softened dark-green field that separates customer proof from the hero.
- **Muted Copy:** Supporting text on light surfaces.
- **Ruled Line:** Service-row and structural dividers.

### Named Rules

**The Safety Marker Rule.** Orange signals action, focus, or verified proof; it is not ambient decoration.

**The Material Neutral Rule.** Green neutrals must read as asphalt, shingle, or metal—not as generic wellness branding.

## Typography

**Display Font:** IBM Plex Sans Condensed (with sans-serif fallback)  
**Body Font:** Source Sans 3 (with sans-serif fallback)

**Character:** Compressed headings feel stamped onto material samples; the open body face keeps review excerpts and practical details readable.

### Hierarchy

- **Display:** Uppercase hero statement with tight line-height and tracking; keep it short enough to act as a physical label.
- **Headline:** Uppercase section statements at near-hero scale.
- **Title:** Uppercase service names and contact numerals.
- **Body:** Explanations and review excerpts, generally held to a 520–630px reading width outside cards.
- **Label:** Small bold metadata with wide tracking for source, address, rating, and material annotations.

### Named Rules

**The Stamp-and-Explain Rule.** Condensed type names the fact; Source Sans explains or substantiates it.

## Layout

The desktop field is capped at 1380px with fluid outer gutters. The 74px fixed header frames a two-column hero: concise sales copy occupies the smaller column and the fanned sample deck occupies the larger. Services repeat the asymmetric split with a sticky introduction and ruled records. Reviews use a 12-column masonry-like arrangement; contact closes in two balanced columns.

At 980px, navigation is removed, service content stacks, and reviews become two-up. At 720px, gutters reduce to 18px, the header becomes 66px, hero and contact become one column, actions become full-width, the sample deck compresses into a 290px stack, and reviews become an 86vw horizontal snap rail. A fixed 66px bottom bar preserves call and Google actions; footer space clears it.

**The Proof-in-Reach Rule.** Every major layout state keeps a call path and Google proof within immediate reach without introducing a form or unsupported promise.

## Elevation & Depth

Depth is tactile and localized. Sample bands overlap, rotate slightly, and separate with broad shadows; cards and contact actions use softer lift. Ruled service rows and proof strips stay flat so the sample deck remains the signature dimensional moment.

- **Sample band:** `0 22px 40px rgba(0,0,0,.24)` for the fanned material stack.
- **Review card:** `0 14px 30px rgba(3,12,10,.16)` for customer excerpts.
- **Primary control:** orange-tinted lift that grows from `0 10px 28px rgba(255,92,53,.24)` on hover.
- **Dark contact action:** `0 16px 34px rgba(22,35,33,.24)`.

**The Tactile Center Rule.** Concentrate rotation, overlap, and perspective in the sample deck; the rest of the route organizes evidence calmly.

## Shapes

Rounded rectangles resemble sample tabs and physical swatches: controls use 13px corners, cards and image frames use 14px, and small disclosure labels use 6–8px. The brand's orange J shield is the one clipped polygon; circular geometry is limited to reviewer initials. Do not introduce blob shapes or unrelated ornamental silhouettes.

## Components

### Buttons

- **Primary:** Asphalt text on Safety Orange, 56px minimum height, 14px by 22px padding, and confident soft lift.
- **Quiet:** Paper text on translucent white with an inset border; use only on dark surfaces.
- **Hover / Focus:** Raise 3px over 180ms; all keyboard focus uses a 3px Safety Orange outline with 4px offset.

### Cards / Containers

- **Sample Deck:** Four overlapping bands—concept crew image, shingle detail, gutter detail, and Google rating—with small, restrained rotations and a shared lower-edge tick pattern where applicable.
- **Review Card:** Paper, orange, sage, and gutter-green variants in a deliberately irregular grid; 14px corners and 30px padding.
- **Proof Strip:** Three edge-to-edge ruled records on orange; it is not a floating card group.

### Navigation

The fixed asphalt header uses the clipped orange J mark, centered desktop links, and a right-aligned phone action. Hover exposes an orange underline. Below 980px, links disappear; below 720px, phone and Google actions are repeated in the persistent bottom bar.

### Service Row

Each full-width ruled record pairs an orange line icon, condensed service title, short evidence-led explanation, and an arrow that moves diagonally on hover. Rows never become generic cards.

### Concept Image Label

Generated imagery must be identified as concept material in useful alt text and with a visible on-image disclosure wherever it could be mistaken for completed J Roofing work. The gallery uses “Original concept image for this pitch”; the hero crew chip uses “Original crew concept.” New appearances must preserve equally explicit visible language.

## Do's and Don'ts

### Do:

- **Do** keep the sample deck as the route's unique first-viewport device.
- **Do** separate verified Google facts and customer quotations from illustrative photography.
- **Do** preserve the 980px and 720px layout changes, reduced-motion behavior, visible focus, and mobile contact bar.
- **Do** source every new visual specifically for this route and label generated imagery as concept material.

### Don't:

- **Don't** reuse a prior website template, imagery set, page format, signature component, or decorative asset.
- **Don't** imply that generated crew, shingle, or gutter images document J Roofing's completed projects.
- **Don't** invent licensing, warranties, financing, certifications, response times, project history, or owner-approved service claims.
- **Don't** replace the fanned material logic with a generic contractor hero, feature-card grid, or stock-roof collage.
