# Bolt Spin slots

Hold & Spin style slot machines in the browser. **Virtual play only** — entertainment, not real-money gambling.

## Play

1. Open `index.html` in a modern browser, or host this folder on any static host (GitHub Pages works well).
2. First load needs network (CDN for CSS / icons / confetti). The service worker helps on repeat visits.
3. Tap **TAP TO START** once to unlock audio.
4. Pick a machine from the **lobby**, then spin. Use **Back** to return to the lobby.

## Features

- Multiple themed machines with level unlock progression
- 50-line base game, Hold & Spin, Free Games, Express / Fireball board
- Bolt Train event, Reward Wheel, Bolt Cabinet
- Daily bonus, XP / level, per-machine progressive-style meters
- Save progress in this browser (`localStorage`)
- Installable PWA (portrait), Options, mute, volumes, haptics

## Controls

| Control | Role |
|---------|------|
| **BET** | Coin / stake amount |
| **MULTI ×** | Multiplier (total bet = BET × MULTI) |
| **SPIN** | Play (also used for Hold & Spin / Express respins) |
| **AUTO** | Auto-spin in base game only |
| **TAKE** | Bank a paused win |

Free Games auto-play. Hold & Spin and Express board require pressing **SPIN** each respin.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Full game |
| `manifest.json` | PWA manifest |
| `sw.js` | Service worker cache (`bolt-spin-v60`) |
| `LICENSE` | MIT |
| `README.md` | This file |

## Disclaimer

Outcomes are for fun and are **not** certified casino odds. No real money, no prizes of value. Progress is stored only on the player’s device. Not affiliated with Aristocrat or any real casino brand.

## License

MIT — see `LICENSE`.
