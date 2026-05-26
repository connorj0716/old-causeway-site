# The Old Causeway — Steak & Oyster House

A redesigned marketing site for The Old Causeway, an LBI bayside steak and oyster house and member of the Tide Table Group. Built as a static, multi-page site for fast hosting (Vercel) and easy maintenance.

**Live:** https://old-causeway-site.vercel.app
**Repo:** https://github.com/connorj0716/old-causeway-site
**Current site (for reference):** https://www.oldcauseway.com

## Pages

| Page | File |
|---|---|
| Home | `index.html` |
| Menu (dinner / brunch / happy hour) | `menu.html` |
| Our Story (1914 timeline) | `story.html` |
| Live Music | `music.html` |
| Private Events & Catering | `events.html` |
| Visit (hours / map / FAQ / shuttle) | `visit.html` |

## Stack

- Pure HTML + CSS + JS — no build step, no framework
- Shared styles in `styles.css`, shared scripts in `script.js`
- Google Fonts: Cormorant Garamond (display), Inter (body), Pinyon Script (accent)
- Color palette sampled from the official Old Causeway stamp logo (deep navy + brand red + cream)

## Assets

- `assets/oc-logo.png` — official logo (also used as favicon)
- `assets/oc-01.jpg … oc-06.jpg` — official food photography pulled from oldcauseway.com's Squarespace CDN
- `assets/oc-brunch.jpg`, `assets/oc-catering.jpg` — brunch and catering photos
- `assets/family/` — sister-restaurant photos for the Tide Table family showcase

## Tide Table family links

- Old Causeway (this site)
- [Hollow Pines](https://hollowpines.cjresults.com) — newest concept (West Creek)
- [Parker's Garage](https://parkersgarage.cjresults.com) — new website
- [Mud City Crabhouse](https://mudcitycrabhouse.com)
- [Black Whale Bar & Fish House](https://blackwhalebar.com)
- [Bird & Betty's](https://birdandbettys.com)
- [Ship Bottom Shellfish](https://shipbottomshellfish.com)
- [Ellis Chicken & Crabcakes](https://elliscrabcakes.com)

## Local dev

Just open `index.html` in a browser — no server needed.

```
open index.html
```

Or serve with any static server:

```
python3 -m http.server 8000
```

## Integrations to wire up

- **Reservations:** all Reserve CTAs currently point to a presumed OpenTable URL. Update once the live URL is confirmed.
- **Online ordering:** placeholder Toast URL — update to the live restaurant URL.
- **Reservation widget:** the inline form on home posts to OpenTable in a new tab. Could be wired to OpenTable's direct API for an inline experience.
- **Newsletter:** form alerts a thank-you message — connect to Mailchimp / Klaviyo / SendGrid.
- **Live music calendar:** sample data hard-coded — connect to a CMS or Google Calendar feed for dynamic updates.
