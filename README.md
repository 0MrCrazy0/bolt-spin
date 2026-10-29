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

## Backup & Restore (new in v7.2.0)

Open **Options** (cog):

- **Backup** — downloads a JSON file of your full progress (balance, level, unlocks, tokens, stats, etc.).
- **Restore** — pick a previous backup file; confirms before overwriting the current browser save, then reloads.

Use this before clearing site data, switching browsers/devices, or after a reset.

---

## Offline / updates

- **First visit** needs network (CDN assets + latest shell). This is intentional so players receive the current release.
- **After first successful online visit**, the service worker caches the app shell and CDN chrome. Music beds cache **on first play** of each track.
- **True offline play** is supported once the shell has been cached. Fully offline first paint on a never-online device is not a goal of this build.
- When a **new version** is deployed, an open tab may show an **Update available** banner. Tap **Restart** to load the latest release. Progress remains in localStorage (or your Backup file).

---

## Options

| Control | What it does |
|--------|----------------|
| Sound effects / music / lobby music | On/off + volume |
| Auto-spin | Hold SPIN or use the control; optional balance floor / unlimited |
| Speed | Normal or Fast |
| Haptics | Vibration on supported devices |
| Reduced motion | Fewer particles / calmer effects |
| **Backup / Restore** | Export or import save JSON |
| Reset save data | Wipe this browser’s progress |

UI scale is fixed at **100%** — use the browser zoom if you need larger or smaller chrome.

---

## Tips

- Complete **goal sets** on a machine to raise its stake ladder (full ladder after enough sets).
- **Weekly** and **monthly** challenges pay extra rewards from the lobby when ready.
- Switch machines if a cabinet feels cold — variance is real; bankroll management matters.
- Make a **Backup** before major browser updates or device changes.

---

## Changelog

- **v7.2.3** — Link previews: added Open Graph / Twitter Card tags and `og-image.png` (1200×630) so shared links show a Bolt Spin Slots banner in Discord, Messenger, WhatsApp, iMessage, X and Slack. No gameplay changes.
- **v7.2.2** — Polish/fix release: help text now lists all Premium stakes (1–50⚡) and states 🚂 pots don't scale with stake; Restore only accepts genuine Bolt Spin backup files and clears stale session data; backup filename uses local time; free-spin counter resets when a feature ends in the base game; reloading on a Hold & Spin total now still opens its pending Express board (no double pay); resume snapshot saved after each Express spin.
- **v7.2.1** — Bug-fix release: board-colour jackpot orbs (MINI/MINOR/MAJOR) in Hold & Spin / Express now pay once (were over-credited); reloading on a Hold/Express/Free total no longer replays and re-pays the feature; balances/XP above ~$2.1B no longer reset to 0 on save (and cents are kept); Machine GRAND meter now resets after it pays; Bolt Pot on a full Bolt Train board is now credited; Scratch wins during Free Games count in the Free total, and skipping the Scratch total (or a dead card) no longer cancels the remaining Free Games; Update banner no longer shows on the very first visit; restore error text is shown as plain text; an unreadable main save now falls back to the ll_v20 mirror instead of starting a new game.

---

## Disclaimer

This is a **fan-made virtual game** for entertainment only.  
It is **not** real-money gambling and is **not** affiliated with any real casino, venue, or machine manufacturer.  
Play responsibly with your time.

---

## License

MIT — see [LICENSE](./LICENSE).
