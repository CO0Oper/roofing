---
name: Garner Roof-Craft Ledger
description: A warm editorial field report that turns roof detail and customer language into a clear next step.
colors:
  roofline-ink: "#142721"
  mineral-field: "#18332d"
  ledger-paper: "#f3efe3"
  warm-cream: "#fffaf0"
  action-copper: "#d35f32"
  safety-lime: "#dfe75d"
  weathered-rule: "#9fa99e"
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
    backgroundColor: "{colors.safety-lime}"
    textColor: "{colors.roofline-ink}"
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

The system reads like a field report laid over documentary roofing work: mineral green, warm paper, square ruled geometry, and decisive safety-lime action. Monumental language makes roof-system craft memorable; customer excerpts supply the evidence.

**Key Characteristics:**

- Full-bleed roof photography with a single dark weather wash.
- Compressed black display lettering paired with plainspoken body text.
- Square controls, one-pixel rules, and masonry review highlights.
- Explicit separation between public facts, illustrative photography, and demo behavior.

## Colors

Safety Lime identifies primary action and selected proof. Action Copper closes the page and carries focus. Mineral Field and ledger neutrals organize atmosphere and reading.

**The Proof and Action Rule.** Lime means act or notice verified proof; copper means focus, contact, or the closing transition.

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

- Primary buttons use Safety Lime, Roofline Ink, square corners, and a 54px minimum height.
- Secondary buttons use Warm Cream with the same dimensions.
- Hover lifts by 3px; focus uses a 3px copper outline with 4px offset.

### Cards / Containers

- Review cards use ledger paper, warm cream, mineral field, or safety lime in a three-column masonry rhythm.
- Cards stay square and ruled; they do not use generic rounded-card chrome.

### Inputs / Fields

- White fields use a one-pixel slate border and square corners.
- Browser caret, focus ring, selection, and scrollbars use the system accents.

### Navigation

The fixed paper header uses compact bold links and one copper-underlined Google-listing action. Primary navigation hides below 950px.

## Do's and Don'ts

### Do:

- **Do** keep public facts and demo disclosures visible.
- **Do** use Safety Lime sparingly for action and proof.
- **Do** attribute every review excerpt directly.
- **Do** preserve reduced-motion and keyboard focus behavior.

### Don't:

- **Don't** display the aggregate Google score in this concept.
- **Don't** represent illustrative photography as company project work.
- **Don't** introduce rounded pills, decorative glass, or generic icon cards.
- **Don't** make current-operating claims without owner verification.
