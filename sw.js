const CACHE_NAME = 'bolt-spin-v634';
const ASSETS = [
  './','./index.html','./manifest.json','./tone-music.js',
  './icon-192.png','./icon-512.png','./apple-touch-icon.png',
  'https://cdn.jsdelivr.net/npm/tone@14.8.49/build/Tone.js',
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
  'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js',
  'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Russo+One&display=swap'
];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS).catch(()=>{})));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',e=>{
  if(e.request.mode==='navigate'||e.request.url.endsWith('.html')){
    e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(CACHE_NAME).then(cache=>cache.put(e.request,c));return r}).catch(()=>caches.match(e.request).then(x=>x||caches.match('./index.html'))));
  }else{
    e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(r=>{if(r&&r.status===200){const c=r.clone();caches.open(CACHE_NAME).then(cache=>cache.put(e.request,c))}return r}).catch(()=>cached)));
  }
});
