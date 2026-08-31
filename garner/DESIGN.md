---
name: Garner Roof-Craft Ledger
description: A workwear-red editorial field report that turns roof detail and customer language into a clear next step.
colors:
  roofline-ink: "#241d1b"
  oxblood-field: "#701b18"
  ledger-paper: "#f2ede4"
  warm-cream: "#fffaf3"
  workwear-red: "#c92f27"
  signal-red: "#f04a3f"
  red-tint: "#f2cbc7"
typography:
  display:
    fontFamily: "Archivo Black, sans-serif"
    fontSize: "clamp(4.2rem, 7vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.84
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Archivo Black, sans-serif"
    fontSize: "clamp(3.2rem, 6vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.035em"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "1.08rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "0.63rem"
    fontWeight: 800
    letterSpacing: "0.16em"
rounded:
  square: "0"
components:
  button-primary:
    backgroundColor: "{colors.workwear-red}"
    textColor: "#ffffff"
    rounded: "{rounded.square}"
    padding: "14px 20px"
    height: "54px"
  button-secondary:
    backgroundColor: "{colors.warm-cream}"
    textColor: "{colors.roofline-ink}"
    rounded: "{rounded.square}"
    padding: "14px 20px"
    height: "54px"
---

# Design System: Garner Roof-Craft Ledger

## Overview

**Creative North Star: "The Roof-Craft Ledger"**

The system reads like a field report laid over documentary roofing work: crew-uniform red, deep oxblood, warm paper, and square ruled geometry. Monumental language makes roof-system craft memorable; customer excerpts supply the evidence.

**Key Characteristics:**

- Full-bleed roof photography with a single dark weather wash.
- Compressed black display lettering paired with plainspoken body text.
- Square controls, one-pixel rules, and masonry review highlights.
- Explicit separation between public facts, illustrative photography, and demo behavior.

## Colors

Workwear Red identifies primary action and closes the page. Oxblood carries the large structural fields; a pale red tint marks selected proof without competing with the call to action.

**The Workwear Red Rule.** Solid red means act; oxblood means structure; the pale tint means notice supporting proof.

## Typography

**Display Font:** Archivo Black (with sans-serif fallback)  
**Body Font:** DM Sans (with sans-serif fallback)

Archivo Black makes terse roofing statements feel structural. DM Sans keeps review attribution, disclosures, and form language conversational.

**The One Structural Voice Rule.** Display type states the thesis and section claims; body type explains and attributes.

## Layout

Content uses a 1380px maximum field with viewport-derived gutters. Desktop alternates full-bleed photography, four-column ruled services, a two-column detail block, a three-column masonry review wall, and a two-column contact close. At 950px wide grids tighten; at 700px the page becomes a single-column field report with 18px gutters.

## Elevation & Depth

The system is flat by default. Soft, offset shadows are reserved for public proof and actionable form surfaces; rules and tonal planes structure repeated content.

## Shapes

Controls, fields, review cards, and proof surfaces use square corners. One-pixel borders and clipped photographic planes provide the recurring geometry.

## Components

### Buttons

- Primary buttons use Workwear Red, white type, square corners, and a 54px minimum height.
- Secondary buttons use Warm Cream with the same dimensions.
- Hover lifts by 3px; focus uses a 3px workwear-red outline with 4px offset.

### Cards / Containers

- Review cards use ledger paper, warm cream, oxblood, or pale red in a three-column masonry rhythm.
- Cards stay square and ruled; they do not use generic rounded-card chrome.

### Inputs / Fields

- White fields use a one-pixel slate border and square corners.
- Browser caret, focus ring, selection, and scrollbars use the system accents.

### Navigation

The fixed paper header uses compact bold links and one red-underlined Google-listing action. Primary navigation hides below 950px.

## Motion

The authored entrance assembles like a roof detail: the image resolves, a red roofline draws across the field, the headline is uncovered as one plane, and the public-proof ledger locks into place. Service and review hover states acknowledge inspection; the demo completion check draws once. All movement uses native CSS, runs only when relevant, and has a reduced-motion alternative.

## Do's and Don'ts

### Do:

- **Do** keep public facts and demo disclosures visible.
- **Do** use solid red for action and the pale tint for supporting proof.
- **Do** attribute every review excerpt directly.
- **Do** preserve reduced-motion and keyboard focus behavior.

### Don't:

- **Don't** display the aggregate Google score in this concept.
- **Don't** represent illustrative photography as company project work.
- **Don't** introduce rounded pills, decorative glass, or generic icon cards.
- **Don't** make current-operating claims without owner verification.
