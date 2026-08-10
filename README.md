# Bolt Spin Slots

A fast, mobile-friendly **Hold & Spin** style slot experience for the browser.  
Virtual play only — built for fun, not real-money gambling.

![PWA](https://img.shields.io/badge/PWA-ready-gold?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)
![Platform](https://img.shields.io/badge/platform-Web-lightgrey?style=flat-square)

> Entertainment only. No real money. No affiliation with any casino brand or manufacturer.

---

## Features

- **Multiple machines** — unlock new cabinets as you level up
- **Hold & Spin** — land 6+ orbs (or an Express train) to lock values and respin
- **Free Games** — 3+ scatters trigger free spins with automatic play
- **Machine Express boards** — themed 8-cell bonus after Hold & Spin
- **Bolt Train** — rare free Hold & Spin with matching train prizes
- **Bolt Cabinet** — premium machine played with Bolt tokens
- **Reward Wheel & daily bonus** — extra cash, XP, and tokens
- **Goals & mastery badges** — challenges per machine
- **Progressive-style meters** — Mini, Minor, Major, Grand per cabinet
- **Auto-spin controls** — limits, stop-loss floor, auto-continue options
- **Installable PWA** — works offline after first load

---

## Play

Open `index.html` in a modern browser, or host the folder on any static site host:

| Host | Notes |
|------|--------|
| [GitHub Pages](https://pages.github.com/) | Enable Pages on the repo root |
| Netlify / Vercel / Cloudflare Pages | Drag-and-drop or git deploy |
| Local | Double-click `index.html` or use any static server |

### Install as an app

On supported mobile and desktop browsers, use **Add to Home Screen** / **Install** for a fullscreen PWA experience.

---

## Project layout

```
├── index.html      # Game (UI + logic)
├── manifest.json   # PWA manifest
├── sw.js           # Service worker (offline cache)
├── LICENSE         # MIT
└── README.md
```

No build step. No backend. Progress is stored in the browser (`localStorage`).

---

## How to play

1. Pick a machine from the lobby (Bolt Cabinet sits at the top).
2. Set your bet and press **SPIN** (or enable auto-spin).
3. Watch for:
   - **Line wins** across 50 paylines  
   - **6+ orbs / Express** → Hold & Spin  
   - **3+ scatters** → Free Games  
   - **Purple trains** → collect 3 matching for Mini / Major / Grand  
4. Complete machine **goals** and claim rewards.
5. Level up to unlock higher cabinets.

Full rules are available in-game under **Help**.

---

## Settings

| Option | Purpose |
|--------|---------|
| Sound / Music | SFX and machine / lobby music |
| Haptics | Vibration on supported devices |
| Auto-continue | Clear big-win pauses automatically |
| Popup auto-close | Feature dialogs close on a timer |
| Auto-spin limit | Fixed count or unlimited |
| Stop-loss floor | Stop auto-spin before balance drops too low |

---

## Privacy & storage

- Everything runs **client-side**
- Progress (balance, level, unlocks, tokens) is saved in **localStorage** on that device/browser
- Clearing site data resets progress
- No accounts, no server, no tracking backend in this project

---

## Disclaimer

This project is **fiction / entertainment software**. It is **not** real-money gambling, does not offer cash-out, and is **not** affiliated with any real casino, pub machine, or game manufacturer. Symbols and mechanics are original-style implementations for a browser game.

Play responsibly. If you need help with gambling-related issues, seek local professional support.

---

## License

MIT — see [LICENSE](./LICENSE).  
You may use, copy, modify, and distribute this software with attribution, free of charge.
