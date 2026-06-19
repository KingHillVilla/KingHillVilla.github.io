# King Hill Villa — website

Marketing/booking site for **King Hill Villa at Mudjin Harbor**, a beachfront
rental on Middle Caicos, Turks & Caicos.

## Hosting

- Org GitHub Pages site: this repo (`KingHillVilla/KingHillVilla.github.io`)
  serves at **https://kinghillvilla.github.io** from the `main` branch root.
- Add an `index.html` at the repo root and it goes live on push.
- **Custom domain (later):** the owner has a GoDaddy domain. To wire it, add a
  `CNAME` file with the domain, set it under repo Settings → Pages → Custom
  domain, then in GoDaddy DNS point the apex `A` records to GitHub Pages
  (185.199.108–111.153) and a `www` `CNAME` to `kinghillvilla.github.io`.

## Property facts (from the live Airbnb listing)

- 3 bedrooms · 3 beds · 3 private baths · 6 guests · ★5.0 (13 reviews)
- Location: Middle Caicos, Caicos Islands, Turks & Caicos
- Photos live on Airbnb's CDN under
  `https://a0.muscache.com/im/pictures/hosting/Hosting-1194929163053607348/original/<id>.jpeg`
  (39 images). Confirm with the owner which to feature, and get the real
  description, nightly rate, and a booking/inquiry contact before publishing.

## To build (next session)

A single static `index.html` (plus `styles.css`/assets) is enough for Pages.
No build step required. Keep it dependency-free unless a framework is needed.
