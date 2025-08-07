const cacheName = 'meditation-cache-v1';

const assetsToCache = [
  './mediation.html',
  './logomediation.png',
  './manifest.json',
  './service-worker.js'
];

// Installer le cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(assetsToCache))
  );
});

// Répondre aux requêtes
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
