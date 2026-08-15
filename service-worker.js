/* StudyCore 12 — Service Worker for Offline Support */
const CACHE_NAME = 'studycore12-v1';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './components.css',
  './responsive.css',
  './auth.css',
  './animations.css',
  './app.js',
  './router.js',
  './search.js',
  './storage.js',
  './ui.js',
  './progress.js',
  './formulas.js',
  './periodic-table.js',
  './numericals.js',
  './elements.js',
  './physics-chapters.js',
  './chemistry-chapters.js',
  './examples.js',
  './questions.js'
];

// Install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch — Network first, fallback to cache
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
