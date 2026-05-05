const STATIC_CACHE = 'static-v1'
const RUNTIME_CACHE = 'runtime-v1'
const PRECACHE_ASSETS = ['/', '/index.html', '/index.css']

// ---- INSTALL (precache critical assets) ----
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(STATIC_CACHE)
    await cache.addAll(PRECACHE_ASSETS)
    await self.skipWaiting()
  })())
})


// ---- ACTIVATE (clean old caches) ----
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


// ---- FETCH STRATEGIES ----
self.addEventListener('fetch', event => {
  const { request } = event

  if (request.method !== 'GET') return

  // HTML → network-first (fresh content)
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(networkFirst(request, event))
    return
  }

  // Everything else → stale-while-revalidate
  event.respondWith(staleWhileRevalidate(request, event))
})


// ---- STRATEGIES ----

// Network first (good for HTML)
async function networkFirst(request, event) {
  try {
    const response = await fetch(request)

    event.waitUntil(updateCache(RUNTIME_CACHE, request, response))

    return response
  } catch {
    return (await caches.match(request)) || Response.error()
  }
}


// Stale while revalidate (fast + updates in background)
async function staleWhileRevalidate(request, event) {
  const cached = await caches.match(request)

  const networkPromise = fetch(request).then(response => {
    event.waitUntil(updateCache(RUNTIME_CACHE, request, response))
    return response
  })

  return cached || networkPromise
}


// ---- CACHE HELPER ----
async function updateCache(cacheName, request, response) {
  if (!response || !response.ok) return

  const cache = await caches.open(cacheName)
  await cache.put(request, response.clone())
}
