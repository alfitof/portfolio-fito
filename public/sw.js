const CACHE_NAME = "alfito-portfolio-v3";

// Semua halaman yang di-pre-cache saat install
const PRECACHE_ASSETS = [
  "/",
  "/blog",
  "/projects",
  "/offline.html",
  "/manifest.json",
  "/gallery/avatar-1.webp",
];

// Fetch semua slug blog dari API lalu cache halamannya
async function precacheBlogPosts() {
  try {
    const res = await fetch("/api/posts");
    if (!res.ok) return;
    const slugs = await res.json();
    const cache = await caches.open(CACHE_NAME);
    await Promise.all(
      slugs.map((slug) => cache.add(`/blog/${slug}`).catch(() => {})),
    );
  } catch {}
}

// Install
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_ASSETS))
      .then(() => precacheBlogPosts()),
  );
  self.skipWaiting();
});

// Activate
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

// Fetch
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.pathname.startsWith("/api/")) return;

  // HTML navigation — network first, fallback cache, fallback offline
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const clone = response.clone();
          caches
            .open(CACHE_NAME)
            .then((cache) => cache.put(event.request, clone));
          return response;
        })
        .catch(() =>
          caches
            .match(event.request)
            .then((cached) => cached || caches.match("/offline.html")),
        ),
    );
    return;
  }

  // Static assets — cache first
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
