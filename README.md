# Bolt Spin Slots

Hold & Spin style slot machines in the browser. **Virtual play only** — entertainment, not real-money gambling.

## Play

- Open `index.html` in a modern browser, or host the folder on any static host (GitHub Pages works well).
- First load needs network (CDN for CSS/icons/confetti). After that the service worker helps with repeat visits.
- Tap **TAP TO START** once to unlock audio.

## Features

- Multiple themed machines with unlock progression
- Hold & Spin, Free Games, Express Board features
- Reward Wheel (wheel tokens) and **Bolt Cabinet** (⚡ tokens from the wheel only)
- Save progress in this browser (`localStorage`)
- Installable PWA (portrait), Options, mute, volumes

## Files

| File | Purpose |
|------|---------|
| `index.html` | Full game |
| `manifest.json` | PWA manifest |
| `sw.js` | Service worker cache |

## Disclaimer

Outcomes are for fun and are **not** certified casino odds. No real money, no prizes of value. Progress is stored only on the player’s device.

## License

MIT — see `LICENSE`.
