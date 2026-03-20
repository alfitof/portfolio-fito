const CACHE_NAME = "alfito-portfolio-v2";

const PRECACHE_ASSETS = [
  "/",
  "/blog",
  "/projects",
  "/gallery/avatar-1.webp",
  "/manifest.json",
  "/offline.html",
];

// Install — pre-cache semua halaman penting
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS);
    }),
  );
  self.skipWaiting();
});

// Activate — hapus cache lama
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key)),
        ),
      ),
  );
  self.clients.claim();
});

// Fetch strategy:
// - HTML pages → network first, fallback cache, fallback offline.html
// - Assets (img, css, js) → cache first, fallback network
// - API → network only
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  // Skip API calls
  if (url.pathname.startsWith("/api/")) return;

  // HTML navigation requests → network first
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Cache the fresh response
          const clone = response.clone();
          caches
            .open(CACHE_NAME)
            .then((cache) => cache.put(event.request, clone));
          return response;
        })
        .catch(() =>
          // Try cache first
          caches
            .match(event.request)
            .then((cached) => cached || caches.match("/offline.html")),
        ),
    );
    return;
  }

  // Static assets → cache first
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request).then((response) => {
        const clone = response.clone();
        caches
          .open(CACHE_NAME)
          .then((cache) => cache.put(event.request, clone));
        return response;
      });
    }),
  );
});
