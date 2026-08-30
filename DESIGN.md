---
name: Dryforce Rainfall Field Station
description: A storm-monitoring field interface that turns roof and water-damage anxiety into one clear inspection action.
colors:
  storm-cell: "#071d2b"
  floodline: "#0b2a3c"
  rain-gauge: "#5ec9e8"
  inspection-amber: "#f7b733"
  storm-ledger: "#f4f0e5"
  dry-paper: "#fffdf7"
  roofline-ink: "#0c2633"
  slate-note: "#52656d"
  weathered-rule: "#a8b4b2"
typography:
  display:
    fontFamily: "IBM Plex Sans Condensed, sans-serif"
    fontSize: "clamp(5.2rem, 9.5vw, 9.5rem)"
    fontWeight: 600
    lineHeight: 0.72
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "IBM Plex Sans Condensed, sans-serif"
    fontSize: "clamp(4rem, 7vw, 7rem)"
    fontWeight: 600
    lineHeight: 0.87
    letterSpacing: "-0.035em"
  title:
    fontFamily: "IBM Plex Sans Condensed, sans-serif"
    fontSize: "2.1rem"
    fontWeight: 600
  body:
    fontFamily: "Source Sans 3, sans-serif"
    fontSize: "1.12rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "IBM Plex Sans Condensed, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 700
    letterSpacing: "0.16em"
rounded:
  square: "0"
  circle: "50%"
components:
  button-primary:
    backgroundColor: "{colors.inspection-amber}"
    textColor: "{colors.storm-cell}"
    rounded: "{rounded.square}"
    padding: "14px 21px"
    height: "54px"
  button-glass:
    backgroundColor: "rgba(7,29,43,.35)"
    textColor: "#ffffff"
    rounded: "{rounded.square}"
    padding: "14px 21px"
    height: "54px"
  button-ink:
    backgroundColor: "{colors.storm-cell}"
    textColor: "#ffffff"
    rounded: "{rounded.square}"
    padding: "14px 21px"
    height: "54px"
  inspection-field:
    backgroundColor: "#ffffff"
    textColor: "{colors.roofline-ink}"
    rounded: "{rounded.square}"
    padding: "14px 15px"
---

# Design System: Dryforce Rainfall Field Station

## Overview

**Creative North Star: "The Rainfall Field Station"**

Dryforce is presented as a calm instrument panel placed directly in the weather: deep storm surfaces, live cyan telemetry, amber action fields, documentary roof imagery, and terse operational labels. The system borrows the legibility and measured confidence of a rainfall station without turning the homeowner experience into an engineering dashboard.

The visual journey moves from threat to diagnosis to proof to contact. Scale is intentionally dramatic in the first viewport, while the remaining page is ruled, square, and highly legible; verified listing proof and owner-contact actions stay visually separate from illustrative imagery.

**Key Characteristics:**

- Storm-dark photographic first viewport with a single animated rainfall trace.
- Condensed uppercase display typography paired with plainspoken sans-serif body copy.
- Inspection amber is the decisive action field; rain cyan is telemetry and focus feedback.
- Square controls, one-pixel rules, restrained shadows, and documentary image disclosures.
- Mobile collapses to one column and keeps call and inspection actions fixed at the bottom.

## Colors

The palette reads like wet weather measured against a dry paper report: storm navy carries atmosphere, amber carries action, and cyan carries live diagnostic information.

### Primary

- **Inspection Amber:** Fills call-to-action buttons, the weather strip, the contact station, and selected image backing planes. It must remain the clearest route toward a call or inspection request.

### Secondary

- **Rain Gauge Cyan:** Draws the rainfall trace, gauge level, image inspection outline, visible focus treatment, and water-related mark detail.

### Neutral

- **Storm Cell Navy:** Anchors the hero, footer, dark buttons, and primary ink-on-light contrast.
- **Floodline Blue:** Distinguishes the diagnostic section and focused field borders from the deeper storm surround.
- **Storm Ledger Paper:** Supplies the site canvas, fixed navigation, listing proof, and mobile contact rail.
- **Dry Paper White:** Lifts reviews, forms, success states, and hover-revealed service rows above the ledger surface.
- **Roofline Ink:** Carries default text on light surfaces.
- **Slate Note:** Carries supporting copy, metadata, and secondary links.
- **Weathered Rule:** Separates repeated review records without introducing card chrome.

### Named Rules

**The Action Weather Rule.** Amber means act; cyan means observe, trace, or focus. Do not swap their jobs.

**The Storm-to-Paper Rule.** Dark surfaces establish the weather problem; paper surfaces organize the homeowner's next step.

## Typography

**Display Font:** IBM Plex Sans Condensed (with sans-serif fallback)
**Body Font:** Source Sans 3 (with sans-serif fallback)
**Label Font:** IBM Plex Sans Condensed (with sans-serif fallback)

**Character:** The condensed face feels like station readouts and field labels at monumental scale. Source Sans 3 keeps explanations, reviews, addresses, and form instructions conversational and fast to scan.

### Hierarchy

- **Display** (600, `clamp(5.2rem, 9.5vw, 9.5rem)`, 0.72): Hero statement only; uppercase with tightly stacked lines and negative tracking.
- **Headline** (600, `clamp(4rem, 7vw, 7rem)`, 0.87): Section headlines; uppercase, compressed, and allowed to dominate the grid.
- **Title** (600, `2.1rem`): Service names and compact operational headings.
- **Body** (400, `1.12rem`, 1.6): Explanations and supporting narrative, normally capped near 530-610px.
- **Label** (700, `0.68rem`, `0.16em`): Uppercase disclosure, form, and operational labels.

### Named Rules

**The Readout-and-Response Rule.** IBM Plex Sans Condensed states what the station knows; Source Sans 3 explains what the homeowner can do.

## Layout

Desktop content lives inside a 1380px maximum field with viewport-derived gutters. The fixed header is 76px tall; the hero fills at least 760px and uses layered absolute planes for photography, weather wash, rainfall trace, gauge, copy, and listing proof. Major sections use generous responsive vertical padding (`clamp(92px, 10vw, 150px)`) and alternate between two-column explanation grids and full-width ruled lists.

At 1000px the primary navigation disappears and wide grids tighten. At 720px the system becomes a single-column field report with 18px section gutters, a 68px header, stacked actions, simplified service and review rows, and a persistent 64px two-action contact rail. The hero remains deliberately tall on mobile so the title, contact actions, trace, and verified listing proof each keep their own readable band.

**The One Instrument Field Rule.** The hero may layer telemetry over photography; content sections return to an orderly grid and never compete with it using additional decorative dashboards.

## Elevation & Depth

The system is flat by default and uses rules, color planes, and offset image frames for structure. Shadows are reserved for actionable controls, verified listing proof, and the contact form, where they indicate a surface that can be acted on or trusted rather than general card decoration.

### Shadow Vocabulary

- **Control rest** (`0 8px 22px rgba(7,29,43,.2)`): Base button lift.
- **Control hover** (`0 13px 28px rgba(7,29,43,.28)`): Button response while translating upward 3px.
- **Verified proof** (`0 16px 38px rgba(4,18,27,.28)`): Separates the Google listing summary from the photographic hero.
- **Contact station** (`0 18px 44px rgba(77,49,4,.18)`): Lifts the form or success state from the amber contact field.
- **Rain glow** (`0 0 22px rgba(94,201,232,.55)`): Makes the live gauge reading visible against storm photography.

**The Evidence Has Weight Rule.** Elevation belongs to proof and action; repeated service and review content stays ruled and flat.

## Shapes

The form language is square, ruled, and infrastructural. Buttons and inputs use zero radius; cards are rectangular color planes without ornamental rounding. The one recurring curve is the circular water detail inside the rotated square brand mark, which makes the mark feel like a roof-and-drop instrument rather than softening the wider interface.

Image depth comes from geometric offsets: the diagnostic image uses a cyan outline shifted 24px, and the team image uses an amber backing plane shifted 22px. One-pixel borders define lists, navigation, inputs, and the mobile action rail.

## Components

### Buttons

- **Shape:** Square control with a one-pixel border, 54px minimum height, 14px by 21px padding, and 700 weight.
- **Primary:** Inspection Amber fill with Storm Cell text and matching border; used for the phone action and form submission.
- **Glass:** Translucent Storm Cell fill, white text, pale white border, and 8px backdrop blur; used only over the hero image.
- **Ink:** Storm Cell fill with white text; used for lower-page transitions and reset actions.
- **Hover / Focus:** Translate upward 3px over 200ms and deepen the control shadow; the global focus-visible treatment is a 3px Rain Gauge outline with 4px offset.

### Cards / Containers

- **Verified Listing Proof:** Storm Ledger background, Storm Cell text, 19px by 22px padding, and the verified-proof shadow. It stays one compact record rather than becoming a generic card family.
- **Contact Station:** Dry Paper background with responsive 28-52px padding and the contact-station shadow.
- **Ruled Records:** Services and reviews are border-separated rows, not floating cards.

### Inputs / Fields

- **Style:** White fill, Roofline Ink text, 14px by 15px padding, square corners, and a one-pixel slate border.
- **Focus:** Floodline border with a 3px translucent Rain Gauge ring.
- **Placeholder:** Muted slate copy remains fully opaque for readability.

### Navigation

The 76px fixed desktop header uses a translucent Storm Ledger surface, a one-pixel storm border, and 12px backdrop blur. Links are compact bold body text with a two-pixel underline on hover; the direct phone action is right-aligned. Below 1000px the link group disappears, and below 720px the phone action moves to the persistent bottom contact rail.

### Diagnostic Service Row

Each service is a full-width ruled link with icon, condensed title, explanation, and directional arrow. On hover, a Dry Paper field translates from fully off-canvas to reveal the row over 350ms using the system's diagnostic easing curve.

### Rainfall Trace

The cyan SVG trace draws once over 1.8 seconds after a 450ms delay while the hero image resolves over 1.1 seconds. The trace is information-shaped rather than decorative flourish. Under reduced-motion preference, animations and transitions collapse to a complete static composition.

## Do's and Don'ts

### Do:

- **Do** keep the public phone action, verified listing proof, and inspection path visually immediate.
- **Do** use Inspection Amber for decisive action and Rain Gauge Cyan for telemetry, water, focus, and inspection outlines.
- **Do** preserve square controls, one-pixel ruled records, condensed uppercase display type, and restrained evidence-oriented shadows.
- **Do** disclose illustrative concept images directly on the images.
- **Do** preserve the 1000px navigation change, 720px single-column change, reduced-motion treatment, and persistent mobile contact rail.

### Don't:

- **Don't** turn services or reviews into rounded floating card grids; their documentary rhythm comes from full-width rules.
- **Don't** add generic gradients, decorative glass panels, or extra animated charts beyond the rainfall trace and hero resolve.
- **Don't** use Rain Gauge Cyan as a competing primary button color or scatter Inspection Amber across passive content.
- **Don't** represent illustrative photography as completed company work or blur it together with verified public proof.
- **Don't** soften the system with rounded controls, friendly blob shapes, or lifestyle-brand ornament.
