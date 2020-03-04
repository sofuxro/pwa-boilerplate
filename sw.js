importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js"
);

// --------------------------------------------------
// Configure
// --------------------------------------------------

// Set workbox config
workbox.setConfig({
    debug: false
});

// Start controlling any existing clients as soon as it activates
workbox.core.clientsClaim();

// Skip over the SW waiting lifecycle stage
workbox.core.skipWaiting();

workbox.precaching.cleanupOutdatedCaches();

// --------------------------------------------------
// Precaches
// --------------------------------------------------

workbox.precaching.precacheAndRoute([
    { url: "/", revision: "1" },
    { url: "/favicon.ico", revision: "1" },
    { url: "/pwa/manifest.1.json" },
    { url: "/pwa/icon_64.1.png" },
    { url: "/pwa/icon_144.1.png" }
]);
// --------------------------------------------------
