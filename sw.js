// Service Worker mínimo — necessário para o Chrome oferecer instalação PWA
const CACHE = 'jet-academy-v1';
const SHELL = ['./index.html', './manifest.json', './icons/icon-192x192.png', './icons/icon-512x512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', e => {
  // Deixa todas as requisições passarem normalmente (sem cache agressivo)
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
