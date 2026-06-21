# King Hill Villa, website

Marketing/booking site for **King Hill Villa at Mudjin Harbor**, a beachfront
rental on Middle Caicos, Turks & Caicos.

**Live:** https://kinghillvilla.github.io (GitHub Pages, served from `main` root).

> Working on this site with Claude? Read **`CLAUDE.md`** first. It has the
> architecture, the build step, the deploy rules, and the copy/accuracy rules.

## Make a change

The visible `.js` files are compiled from `.jsx` source, so editing source
requires a rebuild:

```
npm install      # first time only
# edit a file in kh/ (e.g. kh/booking.jsx)
npm run build    # regenerates kh/*.js
```

Commit both the `.jsx` and the regenerated `.js`, then push to `main`. GitHub
Pages redeploys within about a minute.

## How it's built

- Static site, no backend. React 18 (UMD, self-hosted in `vendor/`), classic
  `React.createElement`, no Babel in the browser.
- UI source: `kh/*.jsx` compiled to `kh/*.js` by `build.mjs`.
- Design system + tokens: `_ds/`. Page shell, SEO, and styles: `index.html`.
- **`.nojekyll`** at the root is required. Without it, Pages drops the `_ds/`
  folder and the site goes blank.

## Property facts

The villa's real, verified facts (and the items still awaiting owner
confirmation) are tracked in **`docs/CONTENT-TODO.md`**. Don't publish invented
details, check there first.

## Custom domain (later)

The owner has a GoDaddy domain (`kinghillvilla.com`). To wire it: add a `CNAME`
file with the domain, set it under repo Settings → Pages → Custom domain, then
in GoDaddy DNS point the apex `A` records to GitHub Pages (185.199.108.153
through 185.199.111.153) and a `www` `CNAME` to `kinghillvilla.github.io`.
