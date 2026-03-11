const CACHE_NAME = 'jet-academy-v1';
const SHELL = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
];

// Install — cache shell
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

// Activate — clean old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch — network first for API, cache first for shell
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  const url = e.request.url;

  // Google Apps Script API — always network, no cache
  if (url.includes('script.google.com')) {
    e.respondWith(fetch(e.request).catch(() =>
      new Response(JSON.stringify({ ok: false, error: 'OFFLINE' }), {
        headers: { 'Content-Type': 'application/json' }
      })
    ));
    return;
  }

  // Shell — cache first, fallback network
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (!res || res.status !== 200) return res;
        const clone = res.clone();
        caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
        return res;
      });
    }).catch(() => caches.match('/index.html'))
  );
});
