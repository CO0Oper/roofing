---
name: J Roofing Roofline Evidence Board
description: A proof-first Stockton roofing pitch built from direct craft imagery, verified reviews, and low-friction estimate contact.
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
  estimate-field:
    backgroundColor: "{colors.review-field}"
    textColor: "{colors.paper}"
    rounded: "10px"
    padding: "13px 15px"
    height: "54px"
---

# Design System: J Roofing Roofline Evidence Board

## Overview

**Creative North Star: "The Roofline Evidence Board"**

J Roofing is presented as a clear roofline evidence board: one strong, visibly disclosed crew concept establishes craft, a compact Google badge supplies verified proof, and direct service and estimate actions carry the visitor forward. Monumental condensed type supplies confidence while customer language—not invented claims—does the persuading.

This is a route-specific visual world. It must not inherit another roofing template, its section format, its imagery, or its decorative assets; only shared product facts may cross route boundaries.

**Key Characteristics:**

- One generated crew image anchors the hero, paired with a compact verified Google proof badge.
- The hero opens directly on the roof statement; Stockton location proof lives in the factual proof strip rather than a decorative eyebrow.
- Asphalt green and mineral paper provide the field; safety orange is the action and proof signal.
- Service rows lead directly to a preselected estimate request; the form opens a prefilled SMS to the verified phone.
- Generated roofing photography is treated as illustrative concept material, never company project evidence.

## Colors

The palette feels like charcoal roofing, mineral granules, aged sage roof material, and one high-visibility contractor marker.

### Primary

- **Safety Orange:** Reserved for primary calls, verified rating fields, focus rings, active underlines, and selected proof cards.

### Secondary

- **Sage Shingle:** A tactile image fallback and selected review emphasis.
- **Gutter Green:** A dark metal-like review-card variation.

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

The desktop field is capped at 1380px with fluid outer gutters. The 74px fixed header frames a two-column hero: concise sales copy begins directly with the roof statement in the smaller column—there is no location eyebrow—and one 540px-minimum crew image with an overlaid proof badge occupies the larger. Stockton location proof remains in the factual strip below. Services repeat the asymmetric split with a sticky introduction and actionable ruled records. The dark estimate section uses an 0.8/1.2 copy-to-form split before the craft gallery and review proof. Reviews use a 12-column masonry-like arrangement; contact closes in two balanced columns.

At 980px, navigation is removed, service content stacks, and reviews become two-up. At 720px, gutters reduce to 18px, the header becomes 66px, hero, estimate, gallery, and contact become one column, actions become full-width, the hero image becomes a 300px field, and reviews become an 86vw horizontal snap rail. Form fields stack in source order. A fixed 66px bottom bar preserves call and Google actions; footer space clears it.

**The Proof-in-Reach Rule.** Every major layout state keeps estimate, call, and Google proof paths within immediate reach without inventing a service promise.

## Elevation & Depth

Depth is tactile and localized. The single hero image carries the strongest broad shadow; cards and contact actions use softer lift. On initial load, that image settles from a subtly enlarged, desaturated, high-contrast, 3px-blurred state into focus over 1 second using the tactile-out easing. Ruled service rows, form fields, and proof strips stay flat so imagery and action retain clear hierarchy. Reduced-motion preference collapses the entrance to the global near-instant fallback.

- **Hero visual:** `0 28px 54px rgba(0,0,0,.28)` for the single crew concept image.
- **Review card:** `0 14px 30px rgba(3,12,10,.16)` for customer excerpts.
- **Primary control:** orange-tinted lift that grows from `0 10px 28px rgba(255,92,53,.24)` on hover.
- **Dark contact action:** `0 16px 34px rgba(22,35,33,.24)`.

**The Single Visual Anchor Rule.** Keep the hero to one clearly disclosed image with one compact proof badge; the rest of the route organizes evidence calmly.

## Shapes

Rounded rectangles feel practical rather than soft: form fields and the hero proof badge use 10px corners, controls use 13px, review and gallery cards use 14px, the hero visual uses 18px, and disclosure labels use 6–8px. The brand's orange J shield is the one clipped polygon; circular geometry is limited to reviewer initials. Do not introduce blob shapes or unrelated ornamental silhouettes.

## Components

### Buttons

- **Primary:** Asphalt text on Safety Orange, 56px minimum height, 14px by 22px padding, and confident soft lift.
- **Quiet:** Paper text on translucent white with an inset border; use only on dark surfaces.
- **Hover / Focus:** Raise 3px over 180ms; all keyboard focus uses a 3px Safety Orange outline with 4px offset.

### Cards / Containers

- **Hero Visual:** One full-bleed crew concept image with a visible disclosure at lower left and an orange Google proof badge at lower right. The image performs the one-time roof-settle entrance; below 720px, the disclosure moves to the top-left so it remains distinct from the proof badge. Do not reintroduce stacked or rotating image bands.
- **Review Card:** Paper, orange, sage, and gutter-green variants in a deliberately irregular grid; 14px corners and 30px padding.
- **Proof Strip:** Three edge-to-edge ruled records on orange; it is not a floating card group.

### Navigation

The fixed asphalt header uses the clipped orange J mark, centered desktop links, and a right-aligned phone action. Hover exposes an orange underline. Below 980px, links disappear; below 720px, phone and Google actions are repeated in the persistent bottom bar.

### Service Row

Each full-width ruled record is an accessible estimate link pairing an orange line icon, condensed service title, short evidence-led explanation, and an arrow that moves diagonally on hover. Activating a row moves to the estimate form and preselects that exact service. Rows never become generic cards.

### Estimate Form

The native form sits on Asphalt in a two-column grid with explicit visible labels. Inputs, select, and textarea use Review Field fill, Paper text, 10px corners, 54px minimum control height, a Safety Orange caret, and high-contrast focus. Submission does not send data to a server: it opens the visitor's messaging app with a prefilled SMS to the verified J Roofing number. The note beneath the button must state this behavior and retain the direct call alternative. Name, phone, property address, selected service, and project details remain required.

### Viewport Theme

The page chrome belongs to the material palette: the global thin scrollbar uses an Asphalt track and Safety Orange thumb, with a 3px Asphalt inset border in WebKit engines. Text-entry carets use Safety Orange. These accents are functional orientation cues, not extra decoration.

### Concept Image Label

Generated imagery must be identified as concept material in useful alt text and with a visible on-image disclosure wherever it could be mistaken for completed J Roofing work. The gallery uses “Original concept image for this pitch”; the hero crew chip uses “Original crew concept.” New appearances must preserve equally explicit visible language.

## Do's and Don'ts

### Do:

- **Do** keep the first viewport to one disclosed crew concept image and one compact Google proof badge.
- **Do** separate verified Google facts and customer quotations from illustrative photography.
- **Do** preserve the 980px and 720px layout changes, reduced-motion behavior, visible focus, and mobile contact bar.
- **Do** keep the hero free of a location eyebrow, retain the one-time roof-settle entrance, and move the concept disclosure to the top-left on mobile.
- **Do** theme the global scrollbar and form caret with the established Asphalt and Safety Orange roles.
- **Do** make every service row link to the estimate form with its service preselected.
- **Do** disclose that estimate submission opens a prefilled SMS to the verified phone and keep the direct-call fallback.
- **Do** source every new visual specifically for this route and label generated imagery as concept material.

### Don't:

- **Don't** reuse a prior website template, imagery set, page format, signature component, or decorative asset.
- **Don't** imply that generated crew, shingle, or gutter images document J Roofing's completed projects.
- **Don't** invent licensing, warranties, financing, certifications, response times, project history, or owner-approved service claims.
- **Don't** reintroduce a layered sample deck, multi-image hero collage, or generic contractor feature-card grid.
- **Don't** imply the estimate form submits to a backend, stores information, or contacts the business automatically.
