# CLAUDE.md

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

### Comment sparingly (REQUIRED)

**At most 2 lines of comment on any function or block of code.** Default to
zero: clear names and small functions beat narration. A comment earns its
place only when it explains *why* something non-obvious is done, not *what*
the code does. This is a hard cap going forward; do not retro-edit existing
over-commented code to comply (that's churn), just write new and changed
code this way.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.

## Project: King Hill Villa website

Static marketing/booking site for **King Hill Villa at Mudjin Harbor**, Middle
Caicos, Turks & Caicos. Hosted free on GitHub Pages at
**https://kinghillvilla.github.io** (org `KingHillVilla`), served from the
`main` branch root. No backend, no database.

### Architecture (no framework, no bundler)

- React 18 UMD (production build), self-hosted in `vendor/`. Classic
  `React.createElement`, no JSX in the browser, no Babel at runtime.
- UI source is JSX in `kh/*.jsx`. A build step compiles each to plain-JS
  `kh/*.js`, and those `.js` files are what `index.html` actually loads.
- Components share one global scope (top-level `const`/`function`). The design
  system bundle (`_ds/`) sets `window.DesignSystem_cf87b7` with Button, Card,
  Badge, Input, Select, etc.
- Design tokens (colors, radii, motion) live in `_ds/.../styles.css` `:root` as
  `--kh-*`, `--ease-*`, `--dur-*`. Use the tokens, never one-off hex or durations.

### Build: the step that's easy to forget

Editing a `kh/*.jsx` does **nothing** on the live site until it is recompiled.
After any `.jsx` change:

```
npm install      # first time only, installs the compiler
npm run build    # compiles kh/*.jsx -> kh/*.js (minified)
```

Commit **both** the `.jsx` source and the regenerated `.js`. If you forget the
build, the site won't change.

### Deploy

Push to `main`. GitHub Pages rebuilds and serves from the repo root, usually
within a minute. **Keep `.nojekyll` at the root.** Without it, Pages' Jekyll
step drops the `_ds/` folder (underscore-prefixed dirs) and the whole site goes
blank.

### Content accuracy (REQUIRED)

This is a real person's rental. **Never invent property facts** (bed types,
prices, amenities, distances, reviews). `docs/CONTENT-TODO.md` tracks what is
verified vs. what still needs the owner to confirm. If a fact isn't verified,
mark it or ask, don't fabricate.

### User-facing copy (REQUIRED)

- **Never use em-dashes (`—`) in user-facing text.** They read as AI-generated.
  Use a period, comma, colon, or parentheses, or rewrite the sentence. Same for
  the en-dash (`–`). A literal hyphen `-` is fine. (In-code comments may use any
  punctuation; this rule is only about text a visitor sees.)

### Verify before calling it done

- `npm run build` succeeds, then open `index.html` locally (or the live URL
  after deploy) and confirm: the page renders, no console errors, and no
  sideways scroll at phone widths.
