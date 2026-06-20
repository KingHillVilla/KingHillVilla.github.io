# Content status: verified vs. needs replacement

Tracks every factual claim on the site so nothing invented ships as real.
Verified against: the live Airbnb listing (rooms/1194929163053607348),
kinghillvilla.com, and the owner's printed brochure card. Update as the owner confirms more.

## Verified and live on the site
- 3 bedrooms · 3.5 baths · sleeps 7
- Infinity (lap) pool + ocean-view hot tub, sunset-facing
- Three terraces, outdoor shower, Italian marble floors
- 5-minute walk to the beach
- 360-degree views: Dragon Cay, Mudjin Harbor, sunrise + sunset, open ocean
- Highest point on Middle Caicos, Turks & Caicos
- 5.0 rating, Guest Favorite on Airbnb (links to the live listing)
- Host: Ed Fogarty · (412) 512-4300
- Geography: fly to Provo, ferry to North Caicos, causeway to Middle Caicos;
  Conch Bar Caves, Bambarra Beach, Crossing Place Trail, Mudjin Bar & Grill, whales Jan to Apr

## Photos
- 6 real villa photos in use (aerial, pool, hot tub, living room, sunsets).
- 133 source photos available from the owner; no real bedroom shots yet (suite
  cards currently reuse pool/interior images, flagged "indicative" on the page).

## Still needs owner confirmation or real assets
| Item | Where | Action |
|---|---|---|
| Bed types per room (King / 2 Queens) | `kh/suites.jsx` | Confirm; shown as "indicative" |
| A/C, Wi-Fi provider/speed, kitchen details | `kh/view.jsx`, `kh/kai.jsx` | Confirm |
| Self check-in / smart lock | `kh/guide.jsx`, `kh/kai.jsx` | Confirm |
| The Film section | `kh/video.jsx` | Marked "Coming Soon"; swap real drone footage |
| Booking form submission | `kh/booking.jsx` | Wire to a real inbox (currently a demo) |
| Kai answers + "digital guest guide" | `kh/kai.jsx`, `kh/guide.jsx` | Canned demo; connect the real guide |
| Restaurant/grocery specifics | `kh/kai.jsx` | Confirm names/hours |
