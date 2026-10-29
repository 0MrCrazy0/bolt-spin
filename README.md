# Bolt Spin Slots

**Hold & Spin** style slots in the browser.  
**Virtual play only** — entertainment, not real-money gambling.

![PWA](https://img.shields.io/badge/PWA-ready-gold?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)
![Platform](https://img.shields.io/badge/platform-Web-lightgrey?style=flat-square)
![Release](https://img.shields.io/badge/release-v7.2.3-yellow?style=flat-square)

> No real money. No purchases. Not affiliated with any casino, pub, or slot manufacturer.

---

## What’s inside

| | |
|:--|:--|
| **Cabinets** | **20** lobby regulars + **1** Bolt Token Premium (⚡) + **1** secret Flush Fortune = **22** cabinets |
| **Features** | Hold & Spin · Free Games (retriggers stack) · Express boards · shared Bolt Train pots · **themed Scratch** mini-game (base + free) |
| **Progress** | XP, levels, goals, mastery badges, achievements, bankroll titles |
| **Extras** | Reward Wheel · daily / weekly / monthly · Lifestyle · Bolt Track racing · Raffle |
| **Save** | localStorage + **Backup / Restore** (Options → export JSON file or import) |
| **Install** | Progressive Web App — installable, works offline after first load |

Progress is saved in **localStorage** on that device/browser only. Use **Backup** in Options to keep a portable copy.

---

## Quick start

1. Open `index.html` locally, or host the folder on any static host (GitHub Pages works well).
2. First visit needs network for CDN assets (Tailwind, icons fonts, confetti). Later visits can run offline via the service worker.
3. Tap **TAP TO START**, pick a machine, set bet / multi (or ⚡ on Premium), and **SPIN**.

### Project files

```
├── index.html          # Game (v7.2.3)
├── music/              # Wav music beds (optional at runtime — cached on first play)
├── manifest.json       # PWA manifest
├── sw.js               # Service worker (cache + update prompt)
├── icon-192.png
├── icon-512.png
├── apple-touch-icon.png
├── og-image.png        # Link-preview banner (1200×630) for Discord / X / WhatsApp etc.
├── LICENSE
└── README.md
```

---

## How to play

1. **Lobby** — unlock machines by leveling up; badges show mastery (NEW → etc.).
2. **Bet** — cash machines use $ bet × multi. **Bolt Token Premium** spends ⚡ (wins still pay **cash**).
3. **Base game** — line wins on the paylines; feature symbols and orbs can trigger bonuses. **Scratch** mini-games (themed per machine) — match 3 amounts, pays all three.
4. **6+ orbs** → **Hold & Spin** (respins while new orbs lock).
5. **3+ scatters** → **Free Games** (retriggers **stack**).
6. **Express** — land Express symbols during Hold & Spin to open that machine’s 8-cell board after Hold ends.
7. **Bolt Train pots** — **three matching purple train tiers** on the board pay the shared 🚂 pot (MINI / MAJOR / GRAND). One or two purples do not pay the pot.
8. **Win totals** — after a big total, **Tap SPIN to continue** (or Totals soft-clear if you wait).

**High bet = high risk** — not a guaranteed win.

---

## Disclaimer

This is a **fan-made virtual game** for entertainment only.  
It is **not** real-money gambling and is **not** affiliated with any real casino, venue, or machine manufacturer.  
Play responsibly with your time.

---

## License

MIT — see [LICENSE](./LICENSE).
