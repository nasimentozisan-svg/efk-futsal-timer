// Minimal service worker whose only job is to let the page show a system
// notification via registration.showNotification() — Android Chrome refuses
// the plain `new Notification()` constructor from page scripts and requires
// a Service Worker for that call.
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
