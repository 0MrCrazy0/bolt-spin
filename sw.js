/* Bolt Spin Slots — Service Worker v7.2.3
   Cache shell + CDN chrome after first online visit.
   Music (music/*.wav) is cache-on-first-play (large).
   Supports update prompt: new SW notifies clients → UI can offer restart.
*/
const CACHE_NAME = 'bolt-spin-v7.2.3';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
  'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js',
  'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Russo+One&display=swap'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(c => c.addAll(ASSETS).catch(() => {}))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
      .then(() => {
        // Tell open tabs a new version is active so they can prompt restart
        return self.clients.matchAll({ type: 'window' }).then(clients => {
          clients.forEach(c => {
            try {
              c.postMessage({ type: 'BOLT_SW_UPDATED', version: CACHE_NAME });
            } catch (_) {}
          });
        });
      })
  );
});

self.addEventListener('message', e => {
  if (!e.data) return;
  if (e.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (e.data.type === 'CLIENTS_CLAIM') {
    self.clients.claim();
  }
});

self.addEventListener('fetch', e => {
  const url = e.request.url || '';
  const isMusic = /\/music\//.test(url) || /\.wav(\?|$)/i.test(url);

  if (e.request.mode === 'navigate' || url.endsWith('.html')) {
    e.respondWith(
      fetch(e.request)
        .then(r => {
          const c = r.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, c));
          return r;
        })
        .catch(() =>
          caches.match(e.request).then(x => x || caches.match('./index.html'))
        )
    );
  } else if (isMusic) {
    // Cache-first for WAV beds after first successful fetch
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request)
          .then(r => {
            if (r && r.status === 200) {
              const c = r.clone();
              caches.open(CACHE_NAME).then(cache => cache.put(e.request, c));
            }
            return r;
          })
          .catch(() => cached);
      })
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(cached =>
        cached ||
        fetch(e.request)
          .then(r => {
            if (r && r.status === 200) {
              const c = r.clone();
              caches.open(CACHE_NAME).then(cache => cache.put(e.request, c));
            }
            return r;
          })
          .catch(() => cached)
      )
    );
  }
});
