# UI guidelines — how to build a *very* nice site

Distilled from a sibling project's design-system work and two references worth
reading ([the 10 rules for polished UI](https://x.com/kvnkld/status/2066863634949779464)
and [machine-readable design systems](https://x.com/Mnilax/status/2065182511739600950)).
The core idea: **polish is consistency, and consistency comes from tokens.**
Define the tokens once, build only from them, and the UI snaps into rhythm.

> Palette below is a coastal placeholder for a beachfront villa (light, airy).
> Swap in Ed's real brand colors. The **motion/shadow/radius tokens carry over
> as-is** — they're tuned by feel and aesthetic-neutral.

## The non-negotiables

1. **Tokens, never one-off values.** No inline hex, no random `13px` radius, no
   `0.3s` plucked from the air. Everything pulls from `:root`. This single rule
   kills ~80% of the "an AI built this" look.
2. **Ban the default easing.** Never `ease` / `ease-in-out`. Use the tuned
   curves below. A curve that's 0.02 off feels subtly wrong even if you can't
   name why — that's the whole game.
3. **Everything tactile.** Every clickable element scales to `0.98` on press
   (firm, not a collapse). Hover shifts, tooltips fade+lift, never instant.
4. **Entrances blur in.** Not a plain fade: opacity + a small upward rise + a
   2px blur that clears. Content focuses into place.
5. **Real depth is layered light.** Not one flat drop shadow — a hairline ring +
   a tight contact shadow + a wide soft ambient, all at low opacity (2–8%).
6. **Honor reduced motion.** Every animation collapses to instant for users who
   ask for it. Non-negotiable for polish *and* accessibility.
7. **Think in states.** A button isn't a picture, it's idle / hover / pressed /
   loading / disabled / success. Loaders shimmer, they don't spinner; numbers
   roll, they don't hard-swap. Many states only reveal themselves once you're
   clicking the live thing — that discovery *is* the polish.

## Starter tokens (copy into your CSS `:root`)

```css
:root {
  /* Palette — COASTAL PLACEHOLDER, replace with Ed's brand */
  --sand: #f6f1e7;
  --sand-deep: #e9e0cf;
  --ocean: #1f8a8a;      /* primary accent */
  --ocean-deep: #0f5f63;
  --ink: #1c2b2b;        /* text */
  --ink-soft: #5b6b6b;
  --line: rgba(28, 43, 43, 0.10);
  --bg: #ffffff;

  /* Type — pick a display + a UI face */
  --font-display: 'Fraunces', Georgia, serif;   /* warm, resort-y */
  --font-ui: 'Inter', system-ui, -apple-system, sans-serif;

  /* Radii */
  --r-sm: 10px;
  --r-md: 16px;
  --r-lg: 24px;

  /* Motion — TUNED, keep these exact */
  --dur-fast: 0.18s;
  --dur-base: 0.28s;
  --ease-smooth: cubic-bezier(0.22, 1, 0.36, 1);   /* default for transitions/entrances */
  --ease-pop:    cubic-bezier(0.34, 1.56, 0.65, 1); /* slight overshoot for things that "pop" in */

  /* Layered shadows — low opacity, light theme */
  --shadow-card:
    0 0 0 0.5px rgba(28,43,43,0.06),   /* hairline ring (replaces a 1px border) */
    0 1px 2px rgba(28,43,43,0.05),     /* contact */
    0 8px 24px -6px rgba(28,43,43,0.10); /* ambient */
  --shadow-lift:
    0 0 0 0.5px rgba(28,43,43,0.07),
    0 2px 4px rgba(28,43,43,0.05),
    0 18px 40px -12px rgba(28,43,43,0.16);
}
```

## The reusable snippets

```css
/* 1. Tactile press — every button */
button { transition: transform var(--dur-fast) var(--ease-smooth); }
@media (prefers-reduced-motion: no-preference) {
  button:not(:disabled):active { transform: scale(0.98); }
}

/* 2. Blur-in entrance — add class="reveal" to sections/cards */
@keyframes reveal {
  from { opacity: 0; transform: translateY(6px); filter: blur(2px); }
  to   { opacity: 1; transform: translateY(0);   filter: blur(0); }
}
.reveal { animation: reveal var(--dur-base) var(--ease-smooth) both; }

/* 3. Skeleton shimmer — loading placeholders (not spinners) */
@keyframes shimmer { to { background-position-x: -200%; } }
.skeleton {
  background: linear-gradient(90deg, var(--sand) 25%, var(--sand-deep) 50%, var(--sand) 75%);
  background-size: 200% 100%;
  border-radius: var(--r-sm);
  animation: shimmer 1.4s linear infinite;
}

/* 4. Expand/collapse without the max-height hack */
.collapsible { display: grid; grid-template-rows: 0fr; transition: grid-template-rows var(--dur-base) var(--ease-smooth); }
.collapsible.open { grid-template-rows: 1fr; }
.collapsible > div { overflow: hidden; }

/* 5. Honor reduced motion globally */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Use `var(--shadow-card)` on every card (not a `1px solid` border — let light
define the edge). Reserve `var(--shadow-lift)` for things that float (a sticky
booking card, a modal).

## When prompting an AI to build it

- **Give numbers, never adjectives.** "Smooth" is meaningless; `var(--ease-smooth)`
  at `var(--dur-base)` is buildable.
- **Paste the tokens first** and say "use only these, no one-off values."
- **List the states** you want; the model builds exactly what you name.
- **Iterate one variable at a time** ("now only tune the shadow", "now only the
  entrance") — that's how you reach polish without thrashing.
- **Describe a reference feel:** "should feel like an iOS sheet — weighty,
  slightly springy, settles fast."

The model is the hands; the taste is yours. Tokens + these rules get you 90% of
the way; the last 10% is staring at it and nudging.
