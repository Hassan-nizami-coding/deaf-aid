const CACHE_NAME = "blind-assistant-cache-v1";
const urlsToCache = [
  "/deaf-aid/index.html",
  "/deaf-aid/lib/tf.min.js",
  "/deaf-aid/lib/coco-ssd.min.js"
];


self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
