const STATIC_CACHE = 'static-v1'
const RUNTIME_CACHE = 'runtime-v1'

const PRECACHE_ASSETS = ['/', '/index.html', '/index.css']

const MAX_RUNTIME_ENTRIES = 50


// ---- INSTALL ----
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(STATIC_CACHE)

    // resilient precache (won’t fail entire install)
    await Promise.allSettled(
      PRECACHE_ASSETS.map(url => cache.add(url))
    )

    await self.skipWaiting()
  })())
})


// ---- ACTIVATE ----
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys()

    await Promise.all(
      keys
        .filter(key => ![STATIC_CACHE, RUNTIME_CACHE].includes(key))
        .map(key => caches.delete(key))
    )

    await self.clients.claim()
  })())
})


// ---- FETCH ----
self.addEventListener('fetch', event => {
  const { request } = event

  if (request.method !== 'GET') {
    return
  }
  
  const url = new URL(request.url)

  // only cache same-origin requests
  if (url.origin !== self.location.origin) {
    return
  }

  // ---- NAVIGATION (SPA fallback) ----
  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        return await fetch(request)
      } catch {
        return await caches.match('/index.html')
      }
    })())
    return
  }


  // ---- STATIC ASSETS (cache-first) ----
  if (PRECACHE_ASSETS.includes(url.pathname)) {
    event.respondWith(caches.match(request))
    return
  }


  // ---- RUNTIME (stale-while-revalidate) ----
  event.respondWith(staleWhileRevalidate(request, event))
})


// ---- STRATEGY ----
async function staleWhileRevalidate(request, event) {
  const cache = await caches.open(RUNTIME_CACHE)
  const cached = await cache.match(request)

  const networkPromise = fetch(request).then(async response => {
    if (response && response.status === 200) {
      await cache.put(request, response.clone())
      await trimCache(cache, MAX_RUNTIME_ENTRIES)
    }
    return response
  }).catch(() => null)

  // update cache in background
  event.waitUntil(networkPromise)

  return cached || networkPromise || Response.error()
}


// ---- CACHE TRIM (simple LRU-ish) ----
async function trimCache(cache, maxEntries) {
  const keys = await cache.keys()
  if (keys.length <= maxEntries) return

  await cache.delete(keys[0]) // delete oldest
}
