# Bolt Spin Slots

**Release v600**

Mobile-friendly **Hold & Spin** style slot experience for the browser.  
Virtual play only — built for fun, not real-money gambling.

![PWA](https://img.shields.io/badge/PWA-ready-gold?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)
![Platform](https://img.shields.io/badge/platform-Web-lightgrey?style=flat-square)

> Entertainment only. No real money. No affiliation with any casino brand or manufacturer.

---

## Features

- **20 regular themed machines** + **Bolt Token Premium** (⚡ stake)
- **Hold & Spin** · **Free Games** (retriggers stack) · **Express boards** · **Bolt Train** (3× purple pot)
- **Bolt Token Premium** — out of ⚡ offers **Return to last machine** when you have a prior cash cabinet
- **Goals & mastery badges** — **NEW** as soon as a cabinet unlocks
- **Reward Wheel / daily / weekly / monthly** · **Lifestyle** · **Achievements**
- **Bolt Track** racing · **Raffle** · **PWA** (installable, offline-capable after first load)

---

## Play

Open `index.html` or host the folder on any static host (GitHub Pages works).  
First visit needs network for CDN assets; then offline-capable via the service worker.

Progress is stored in **localStorage** on that device/browser only.

---

## Project layout

```
├── index.html
├── tone-music.js
├── manifest.json · sw.js
├── icon-192.png · icon-512.png · apple-touch-icon.png
├── LICENSE · CHEATS.md · README.md
```

---

## How to play

1. Pick a machine (Bolt Premium costs ⚡; regular machines use $).
2. Set bet / multi (or ⚡ stake) and **SPIN**.
3. Line wins, **6+ orbs** → Hold & Spin, **3+ scatters** → Free Games.
4. On Hold & Spin: **3× same purple train** pays the shared 🚂 pot; EXPRESS locks can open the machine Express board.
5. After a win total, **Tap SPIN to continue** (or **AUTO · next spin shortly** when auto-spin is on). Screens soft-clear after a few seconds if you do nothing.

### Flush Fortune — Wipe & Poop
Secret toilet cabinet: reveal cells and **match 3** of the same amount. Win total uses the same continue prompt as other features.

---

## Settings (Options)

| Control | What it does |
|--------|----------------|
| Music / SFX volume | Separate sliders |
| Auto-spin | Hold SPIN or toggle; optional floor / unlimited |
| Speed | Normal / Fast |
| Haptics | On supported devices |
| Reduced motion | Fewer particles |

Win totals always soft-clear; you can dismiss early with **SPIN**.

**High bet = high risk** — larger stakes pay more when they hit, but cold runs can drain the bankroll. Low balance gets a slight feature nudge only.

---

## Disclaimer

Virtual entertainment only. No real-money gambling. Not affiliated with any real casino, pub, or slot manufacturer. Play responsibly with your time.

---

## License

MIT — see [LICENSE](./LICENSE).
