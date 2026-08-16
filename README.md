# Bolt Spin Slots

**Release v383.7** — Hold & Spin virtual slots for friends & family.

A fast, mobile-friendly **Hold & Spin** style slot experience for the browser.  
Virtual play only — built for fun, not real-money gambling.

![PWA](https://img.shields.io/badge/PWA-ready-gold?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)
![Platform](https://img.shields.io/badge/platform-Web-lightgrey?style=flat-square)

> Entertainment only. No real money. No affiliation with any casino brand or manufacturer.

---

## Features

- **20 themed machines** — unlock from Level 1 to 195 (levels never cap)
- **Hold & Spin** — land 6+ orbs (or an Express train) to lock values and respin
- **Free Games** — 3+ scatters; per-machine free boosts
- **Express boards** — themed 8-cell bonus after Hold & Spin (cash, tokens, rare board-color progressives, Fortune on 8/8)
- **Bolt Train** — rare free Hold & Spin · 3× purple pots · global ⚡ Bolt Pot chance
- **Bolt Token Premium** — played with ⚡ tokens only (1/5/10⚡ per spin; not a cash high-roller)
- **Reward Wheel & daily / weekly / monthly** — cash, XP, tokens, ⚡
- **Goals & mastery badges** — challenges per machine
- **Bankroll titles** — free ranks from peak balance (Spinner → Bolt Baron)
- **Level ranks** — Rookie → Grinder → … → Immortal (by level or machines unlocked)
- **Lifestyle shop** — spend virtual cash on homes, cars, bling & more (cosmetic; small XP on first buy only)
- **Achievements** — 313 badges with claimable XP (lobby ACH button)
- **XP** — scales mildly with stake (capped); dead spins show **XP-ONLY** on the WIN meter
- **Progressive-style meters** — Mini, Minor, Major, Grand per cabinet
- **Auto-spin controls** — limits, stop-loss floor, auto-continue options
- **Installable PWA** — offline after first load (needs network once for CDN assets)

---

## Play

Open `index.html` in a modern browser, or host the folder on any static site host:

| Host | Notes |
|------|--------|
| [GitHub Pages](https://pages.github.com/) | Enable Pages on the repo root |
| Netlify / Vercel / Cloudflare Pages | Drag-and-drop or git deploy |
| Local | Double-click `index.html` or use any static server |

**First visit** needs network access for Tailwind, fonts, and confetti (CDN). After that, the service worker caches assets for offline play.

### Install as an app

On supported mobile and desktop browsers, use **Add to Home Screen** / **Install** for a fullscreen PWA experience.

---

## Project layout

```
├── index.html      # Game (UI + logic)
├── icon-192.png    # PWA icon
├── icon-512.png    # PWA icon
├── apple-touch-icon.png
├── tone-music.js   # Optional Tone.js machine beds (loads Tone from jsDelivr CDN — not malware)
├── manifest.json   # PWA manifest
├── sw.js           # Service worker (offline cache)
├── LICENSE         # MIT
└── README.md
```

No build step. No backend. Progress is stored in the browser (`localStorage`).

---

## How to play

1. Pick a machine from the lobby (Bolt Token Premium sits at the top — costs ⚡).
2. Set your bet and press **SPIN** (or enable auto-spin).
3. Watch for:
   - **Line wins** across 50 paylines  
   - **6+ orbs / Express** → Hold & Spin  
   - **3+ scatters** → Free Games  
   - **Board-color MINI/MINOR/MAJOR orbs** → that machine’s progressive (1 pays)  
   - **Purple trains** → 3 matching for shared 🚂 pot  
4. Complete machine **goals**, claim rewards, buy **Lifestyle** cosmetics.
5. Level up to unlock higher cabinets (through Level 195).

Full rules are in-game under **Help** — pick any machine for **per-cabinet** free package, meters, Express name, and boosts.

---

## Settings

| Option | Purpose |
|--------|---------|
| Sound / Music | SFX, machine music, lobby music |
| Haptics | Vibration on supported devices |
| Auto-continue | Clear big-win pauses automatically |
| Popup auto-close | Feature dialogs close on a timer |
| Auto-spin limit | Fixed count or unlimited |
| Stop-loss floor | Stop auto-spin before balance drops too low |

---

## Privacy & storage

- Everything runs **client-side**
- Progress (balance, level, unlocks, tokens, lifestyle, race tickets, mid-feature snapshot) is saved in **localStorage** on that device/browser
- Clearing site data resets progress
- No accounts, no server, no tracking backend in this project

---

## Disclaimer

**18+ entertainment.** This project is **fiction / entertainment software**. It is **not** real-money gambling, does not offer cash-out, and is **not** affiliated with any real casino, pub machine, or game manufacturer. Symbols and mechanics are original-style implementations for a browser game.

Play responsibly. If you need help with gambling-related issues, seek local professional support.

---

## License

MIT — see [LICENSE](./LICENSE).  
You may use, copy, modify, and distribute this software with attribution, free of charge.
