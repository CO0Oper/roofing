---
name: Marco Roofing
description: A proof-first Fremont roofing concept built as a tactile material sample book.
colors:
  paper: "#f5f2ea"
  paper-deep: "#e8e7df"
  ink: "#17201f"
  muted: "#53605d"
  roof: "#293432"
  line: "#c4cac3"
  orange: "#e95b24"
  orange-dark: "#a93814"
  white: "#fffdf8"
typography:
  display:
    fontFamily: "IBM Plex Sans Condensed, sans-serif"
    fontSize: "clamp(4.4rem, 7.2vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.86
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "IBM Plex Sans Condensed, sans-serif"
    fontSize: "clamp(3rem, 5.4vw, 5.25rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Source Sans 3, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.62
  label:
    fontFamily: "Source Sans 3, sans-serif"
    fontSize: "0.76rem"
    fontWeight: 800
    letterSpacing: "0.06em"
rounded:
  structural: "2px"
spacing:
  shell-gutter: "24px"
  shell-gutter-mobile: "16px"
  action-x: "22px"
  action-y: "14px"
  section: "clamp(88px, 10vw, 144px)"
components:
  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "#20130f"
    rounded: "{rounded.structural}"
    padding: "{spacing.action-y} {spacing.action-x}"
    height: "54px"
  button-primary-hover:
    backgroundColor: "#f16833"
  button-secondary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.structural}"
    padding: "{spacing.action-y} {spacing.action-x}"
    height: "54px"
  field-default:
    backgroundColor: "#fff"
    textColor: "{colors.ink}"
    rounded: "{rounded.structural}"
    padding: "13px 14px"
  proof-bar:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
  review-feature:
    backgroundColor: "{colors.roof}"
    textColor: "{colors.white}"
---

# Design System: Marco Roofing

## Overview

**Creative North Star: "The Fremont Roof Book"**

Marco Roofing is a reputation-led local-service concept with the physical logic of a roofing material sample book. Warm paper carries the reading surface; charcoal roof planes create the heavy, weatherproof chapters; galvanized lines divide evidence and services into inspectable rows. Safety orange stays deliberate: it marks the concept disclosure, the direct phone path, proof highlights, and small workmanlike icons.

The world is editorial but not precious. Large condensed headlines make the company feel established, while the evidence board, ledger-like service rows, and direct form clarify that a homeowner can verify the business and act without wading through a generic contractor card grid. Photography is illustrative and always visibly labeled as such. Structural borders do most of the work; shadows are reserved for things that should feel handled or lifted.

**Key Characteristics:**

- Proof arrives before the service catalogue, through a dark public-record bar and a review board.
- Paper, roof charcoal, galvanized dividers, and safety orange read as tangible roofing materials.
- Typography is compressed, architectural, and left-aligned; copy remains plainspoken and legible.
- The phone call is a first-class action at desktop and mobile widths.

## Colors

The palette is warm, weatherproof, and utilitarian: paper surfaces hold the narrative, charcoal establishes permanence, and orange is an action signal rather than a decorative wash.

### Primary

- **Safety Orange:** Calls, rating panels, selected proof marks, and small confirmation marks. Keep it rare enough that an orange block still means act or verify.
- **Safety Orange Deep:** Darker orange used on icon strokes, field focus, and compact supporting labels where the primary orange would be too bright.

### Neutral

- **Warm Paper:** The default page ground and fixed-navigation backdrop.
- **Deep Paper:** A subtly darker paper used to differentiate the services chapter without introducing a new color family.
- **Roof Charcoal:** The large, protective dark plane for the materials chapter and the featured review panel.
- **Structural Ink:** Primary text, rules, proof-bar ground, and the most decisive visual outlines.
- **Galvanized Line:** Divider and border color used to make the sample-book structure visible.
- **Quiet Ink:** Secondary reading copy, minor metadata, and sublabels.
- **Off-White Stock:** Raised cards, forms, and light controls against the paper ground.

**The Safety Signal Rule.** Orange communicates an action, evidence marker, or meaningful emphasis; do not use it as a broad background for ordinary content.

## Typography

**Display Font:** IBM Plex Sans Condensed (with sans-serif fallback)

**Body Font:** Source Sans 3 (with sans-serif fallback)

**Character:** The condensed display face makes headings feel stenciled onto a roof plan: large, compact, and firm. Source Sans 3 counterbalances it with accessible body copy, sturdy form labels, and clean public-record metadata.

### Hierarchy

- **Display** (700, fluid 4.4–6rem, 0.86 line-height): Hero statements and major rating figures. It is oversized, tightly tracked, and balanced rather than centered.
- **Headline** (700, fluid 3–5.25rem, 0.92 line-height): Section statements and principal editorial moves.
- **Title** (600–700, 1.55–2.5rem where observed): Service names, county rows, and form-success headings.
- **Body** (400, 1rem base, 1.62 line-height): Explanatory text, descriptions, and transparent concept disclosures.
- **Label** (800, 0.76rem, 0.06em tracking, uppercase where used): Review-source flags, proof metadata, and compact support labels.

**The Compressed Headline Rule.** Keep display and section headings left-aligned and short enough for their tight line-height; do not pair the condensed face with decorative script or centered promotional type.

## Layout

Desktop content sits in a centered shell capped at 1220px with 24px side gutters. The hero intentionally breaks that container: text occupies the left roof plane and the illustrative image extends to the viewport edge on the right. Sections use a generous fluid vertical interval; evidence, services, and county coverage resolve as ruled grids rather than card mosaics.

At 1040px, the primary navigation becomes a bordered overlay and the proof bar changes from four columns to two. At 760px, the shell moves to 16px gutters, all major two-column areas stack, hero actions fill the available width, and a persistent two-part call/request bar holds the lowest edge. The desktop contact copy may remain sticky beside the form; it returns to normal document flow on mobile.

## Elevation & Depth

This is a mostly flat, structural system. Separation comes from paper shifts, dark roof planes, one- and two-pixel rules, image cropping, and overlapping blocks. Shadows appear only on raised controls and tactile objects: the skewed logo plate, primary and secondary actions, rating placard, visual photography, form card, mobile action rail, and open navigation.

### Shadow Vocabulary

- **Control lift** (`0 6px 18px rgba(23, 32, 31, .09)`): Secondary controls at rest; it grows slightly on hover.
- **Orange action lift** (`0 7px 18px rgba(169, 56, 20, .22)`): Primary calls to action; hover adds both height and orange presence.
- **Hero placard** (`0 18px 44px rgba(23, 32, 31, .2)`): The proof rating sitting over photography.
- **Raised form** (`0 24px 60px rgba(23,32,31,.13)`): The contact form and success state lifted from the pale contact field.

**The Structural-First Rule.** Use rules and tonal planes for ordinary separation. Add a shadow only when the element should read as a physical object above the page.

## Shapes

The system uses near-square, structural corners throughout: the canonical radius is 2px for buttons, fields, the menu trigger, and rectangular panels. Straight borders are part of the visual language. The exception is the logo plate, which gets a restrained negative skew to imply a cut roofing sample; its internal monogram counter-skews to remain readable. Photography is rectangular and framed by offset outline details rather than softened corners.

## Components

### Buttons

Actions are direct, weighty, and tool-like rather than pill-shaped.

- **Shape:** Sharp structural corner with a one-pixel outline and a 54px minimum height.
- **Primary:** Safety orange ground, dark text, bold Source Sans 3 label, and compact icon gap. It is used for the direct call and quote-request preview.
- **Hover / Focus:** Hover rises by one pixel and deepens its shadow; primary action brightens. Keyboard focus uses a three-pixel orange outline set away from the control.
- **Secondary:** Off-white background, ink text, and a subtle neutral lift for adjacent or lower-priority action.

### Navigation

The fixed header lives below the fixed orange concept banner. The brand lockup anchors the left, plain-weight links occupy the middle, and the direct phone call closes the right edge. Orange appears only as a hover underline. At tablet widths, a square outlined menu button opens the navigation as a paper overlay; at mobile widths the phone moves to the persistent bottom rail.

### Proof Bar

The proof bar is a dark public-record ledger. Four equal desktop cells pair orange icons or year figures with white assertions and quiet secondary source labels. Thin translucent dividers keep the evidence factual and grid-bound. It resolves to two cells at tablet and a single ruled stack on mobile.

### Review Board

The signature proof pattern joins one charcoal score panel to white review notes. The score panel uses oversized condensed numerals and orange stars; the adjacent notes use large condensed summaries, small uppercase source labels, and a compact author/date footer. It stacks vertically below 760px rather than becoming a carousel or repeating card set.

### Service Rows

Services behave as a catalogue: a two-pixel top rule, one row per offering, a deep-orange duotone icon, a condensed service name, and plain supporting text. Desktop separates the icon, title, and description into columns; mobile keeps the icon/title pair and nests the explanation beneath it.

### Quote Form

The form is a raised off-white work sheet against a soft green-grey contact field. A pale orange concept notice appears first, then bold labels and square inputs. Fields use grey-green borders; hover darkens the border and focus changes it to deep orange with a soft orange ring. The submit action spans the full form width, followed by a direct-call fallback.

### Mobile Action Rail

Mobile preserves two decisive actions at the viewport bottom: a white direct-call half and an orange quote-preview half. Its elevated white rail makes contact persistent without obscuring the page’s paper-and-charcoal hierarchy.

## Do's and Don'ts

### Do:

- **Do** lead a new page or section with a verifiable proof, a clear work category, or a direct contact decision—not generic promotional filler.
- **Do** use the warm-paper / roof-charcoal contrast to create chapters, then use galvanized rules to organize evidence and services.
- **Do** reserve safety orange for calls, public-proof markers, field focus, and explicit concept disclosures.
- **Do** maintain square structural corners, compact button labels, and visible keyboard focus.
- **Do** label illustrative photography as concept imagery until real Marco project assets are supplied.

### Don't:

- **Don't** replace ledger rows and public-record proof with interchangeable rounded service cards.
- **Don't** flood a section with orange, gradients, or glossy chrome; the material contrast is the visual drama.
- **Don't** round components into pills or soften the grid with oversized border radii.
- **Don't** imply that the concept form submits data or that illustrative roofing photos are completed Marco work.
