importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js"
);
workbox.routing.registerRoute(
  ({ request }) => request.destination === "style",
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "styles-cache",
  })
);

workbox.routing.registerRoute(
  ({ request }) => request.destination === "script",
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "scripts-cache",
  })
);

workbox.routing.registerRoute(
  ({ request }) => request.destination === "image",
  new workbox.strategies.CacheFirst({
    cacheName: "images-cache",
  })
);

workbox.routing.registerRoute(
  ({ request }) => request.destination === "fetch",
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "fetches-cache",
  })
);

workbox.routing.registerRoute(
  ({ request }) => request.destination === "font",
  new workbox.strategies.CacheFirst({
    cacheName: "fonts-cache",
  })
);

workbox.routing.registerRoute(
  ({ request }) => request.destination === "document",
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "pages-cache",
  })
);
