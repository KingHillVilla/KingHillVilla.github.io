# King Hill Villa at Mudjin Harbor, Design System

> *"A hidden villa perched above one of the most beautiful beaches in the Caribbean."*

A complete brand & UI system for **King Hill Villa at Mudjin Harbor**, a private villa escape on Middle Caicos overlooking the turquoise waters of Mudjin Harbor. Est. 2024.

## Brand context

| | |
|---|---|
| **What** | A single private luxury villa rental (not a resort) on Middle Caicos, Turks & Caicos. |
| **Feeling** | Relaxed luxury · private escape · authentic Caribbean · timeless · nature-first. |
| **NOT** | Flashy resort · party destination · ultra-modern · corporate · tropical cliché. |
| **Mascot** | **Kai the Turtle**, a premium illustrated sea turtle (chatbot, guide, welcome emails). Never a cartoon. |
| **Best tagline** | *"Where the Caribbean Slows Down"* (alt: *"Discover the Quiet Side of Paradise"*). |

### Sources
This system was built from a single uploaded **brand guide composite** (`uploads/5723E9D9-3B8A-4877-88B8-E19FAD9B9228.PNG`) plus the written brand notes that accompanied it. All logos, the turtle mascot, photography, and brand marks in `assets/` were programmatically cropped from that composite. No codebase or Figma was provided.

---

## CONTENT FUNDAMENTALS, how copy is written

- **Voice:** calm, warm, quietly confident. The brand *slows down*; the writing does too. Short sentences. Lots of breathing room.
- **Person:** addresses the guest as **you** ("Book your stay", "Wake to the sound of the surf"). The villa is *it/the villa*, occasionally *we* for hospitality ("We'll send your confirmation here").
- **Casing:** Headlines in **Cinzel** are Title Case or rendered uppercase by the font's caps feel. Eyebrows / labels / buttons are **UPPERCASE with wide tracking** ("AT MUDJIN HARBOR", "EST 2024", "BOOK YOUR STAY"). Body is sentence case.
- **Tone words that fit:** private, quiet, turquoise, golden hour, perched, hidden, empty beaches, slow. **Avoid:** "luxe", "ultimate", "paradise found", exclamation-heavy hype, all-inclusive/resort language.
- **Emoji:** essentially none in marketing copy. The *one* sanctioned exception is **Kai the turtle** (🐢) inside the chatbot's own voice, playful there, nowhere else.
- **Numbers/stats:** sparse. This is an emotional, place-led brand, no dashboards of figures. Prices/dates appear only in booking context.
- **Examples:**
  - Hero headline: *Experience Middle Caicos*
  - Hero sub: *A private Caribbean villa overlooking the turquoise waters of Mudjin Harbor.*
  - CTA pair: **Book Your Stay** / **Explore the Villa**
  - Section eyebrow: *✦ Discover the Quiet Side of Paradise ✦*

---

## VISUAL FOUNDATIONS

**Colors.** The logo *is* the palette. Ocean Blue `#0B3A63` (primary, headlines, nav, buttons), Caribbean Aqua `#1E9CC3` (links, hover, accents), Sandstone Gold `#D6A45A` (EST 2024, decorative, premium accents), Palm Green `#456B3A` (nature/supporting), Ivory White `#F8F4EC` (backgrounds), Driftwood Tan `#B88A5B` (borders/frames, sparingly). Two background colors dominate: ivory for light sections, deep ocean for dark bands. Gold is an *accent only*, never a background field.

**Type.** Cinzel (serif caps, logo-inspired) for all display/headings; Source Sans 3 for body (modern, readable, mobile-first). Headings track wide (`0.02–0.04em`); the signature eyebrow tracks very wide (`0.28em`) and is flanked by gold ✦ diamonds, echoing the logo's "AT MUDJIN HARBOR". Body line-height is generous (1.65).

**Spacing & layout.** 8px base scale. Generous section padding (96px vertical). Centered, editorial compositions, content breathes, never edge-to-edge text. Max content width ~1160px.

**Backgrounds & imagery.** Photography-led: real Mudjin Harbor cliffs, turquoise water, golden-hour skies, aerial drone shots, empty beaches, ocean life. Warm, naturally saturated (never oversaturated), never generic stock. Full-bleed hero images carry an ocean-navy **protection gradient** (top→bottom, `--scrim-ocean`) so light type stays legible. Subtle palm-frond / sand textures exist for accents (`assets/texture_*`).

**Corners & frames.** Gentle radii (6–16px), never bubbly pills except on small badges. The signature curve is **the Mudjin arch** (`--radius-arch`), used to clip hero/feature media inside a 2px **driftwood-tan frame**, mirroring the logo's arched window.

**Shadows.** Warm, low, diffuse, like sun on sand, tinted with ocean-blue not grey (`0 8px 24px rgba(11,58,99,0.10)`). No hard black drop shadows.

**Borders.** Hairline warm-sand `#E3D6BD` on ivory; driftwood-tan 2px for decorative frames; translucent gold on dark surfaces.

**Motion.** Calm, the Caribbean slows down. Long eases (`cubic-bezier(0.22,0.61,0.36,1)`), 160–480ms. Fades and gentle 3px lifts on cards. **No bounces, no springy overshoot, no infinite loops.**

**Hover states.** Buttons darken to the next shade (ocean → ocean-700, gold → gold-600); secondary fills in; cards lift 3px and deepen their shadow. **Press:** buttons nudge down 1px. Focus: 3px aqua glow ring.

**Transparency / blur.** Used over imagery only, the transparent nav over the hero uses a light backdrop-blur; the booking bar is solid ivory glass floating on the hero seam.

---

## ICONOGRAPHY

The brand uses a small set of **hand-illustrated line marks** drawn in ocean blue with gold detailing, not a generic icon font. Four core brand marks: **palm tree, sea turtle, compass rose, waves** (`assets/icon_palm.png`, `icon_turtle.png`, `icon_compass.png`, `icon_waves.png`). A matching **social-highlight set** (circular gold line icons: The Villa, Beaches, Local Guide, Sunsets, Ocean Life, Reviews) lives in `assets/social_icons_row.png`.

- These are **raster PNGs cropped from the brand guide**, treat them as illustrations, not a scalable icon system. For UI utility icons (chevrons, close, arrows) the system uses simple Unicode glyphs (▼ ✦ etc.) styled in brand colors, or you may substitute a thin-stroke CDN set (e.g. **Lucide**, 1.5px stroke, ocean-blue) to match the hand-drawn line weight, **flag any such substitution to the user.**
- **Emoji** are not part of the UI iconography (the turtle 🐢 only appears in Kai's chat voice).
- **No new SVG icons were hand-drawn** for this system; reuse the supplied marks or request vector originals from the brand owner.

> ⚠️ **Substitution flag:** No vector logo or icon files were provided, every logo/mark/photo is a crop from the single brand-guide PNG. For print or large-scale use, request vector (SVG/PDF) originals.

---

## VISUAL ASSETS (`assets/`)
`primary_logo.png` (illustrated arch lockup) · `secondary_logo.png` (type lockup) · `icon_badge.png` (arch scene mark / favicon) · `kai_turtle.png` (mascot) · brand marks `icon_palm/turtle/compass/waves.png` · `social_icons_row.png` · photography `photo_cliffs/beach/villa_pool/dining/sunset/turtle.png` · textures `texture_palm/sand.png`.

---

## INDEX / MANIFEST

**Root**
- `styles.css`, global entry point (import this); `@import`s all tokens & fonts.
- `readme.md`, this guide.
- `SKILL.md`, Agent-Skill front matter for portable use.

**`tokens/`**, `fonts.css` (Cinzel + Source Sans 3 via Google Fonts), `colors.css`, `typography.css`, `spacing.css`, `effects.css` (radii, shadows, motion, scrims).

**`components/`**, reusable primitives (namespace `window.DesignSystem_cf87b7`):
- `core/`, **Button**, **Card**, **Badge**
- `forms/`, **Input**, **Select**
- `brand/`, **Eyebrow** (ornamented label), **Wordmark** (type-only logo lockup)

**`guidelines/`**, foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

**`ui_kits/website/`**, interactive marketing homepage recreation (hero, booking bar, experience grid, Kai chatbot, footer). Marked as a Starting Point.

**`assets/`**, logos, mascot, brand marks, photography, textures.
