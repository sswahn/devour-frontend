const STATIC_CACHE = 'static-v1'
const RUNTIME_CACHE = 'runtime-v1'

const PRECACHE_ASSETS = [
  '/'
]

const MAX_RUNTIME_ENTRIES = 50

self.addEventListener('install', event => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(STATIC_CACHE)

      await Promise.allSettled(
        PRECACHE_ASSETS.map(url => cache.add(url))
      )

      await self.skipWaiting()
    })()
  )
})

self.addEventListener('activate', event => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys()

      await Promise.all(
        keys
          .filter(key => ![STATIC_CACHE, RUNTIME_CACHE].includes(key))
          .map(key => caches.delete(key))
      )

      await self.clients.claim()
    })()
  )
})

self.addEventListener('fetch', event => {
  const { request } = event

  if (request.method !== 'GET') return

  const url = new URL(request.url)

  if (url.origin !== self.location.origin) return

  // Don't cache API responses
  if (url.pathname.startsWith('/api/')) return

  // SPA navigation requests
  if (request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const response = await fetch(request)

          event.waitUntil(
            caches.open(RUNTIME_CACHE).then(async cache => {
              await cache.put(request, response.clone())
              await trimCache(cache, MAX_RUNTIME_ENTRIES)
            })
          )

          return response
        } catch {
          return (
            (await caches.match('/')) ||
            (await caches.match('/index.html')) ||
            Response.error()
          )
        }
      })()
    )

    return
  }

  // Serve precached assets
  if (PRECACHE_ASSETS.includes(url.pathname)) {
    event.respondWith(caches.match(url.pathname))
    return
  }

  event.respondWith(staleWhileRevalidate(request, event))
})

self.addEventListener('push', event => {
  let notificationData = {
    title: 'Notification',
    body: '',
    url: '/'
  }

  if (event.data) {
    try {
      notificationData = event.data.json()
    } catch {
      notificationData.body = event.data.text()
    }
  }

  const options = {
    body: notificationData.body,
    icon: notificationData.icon || '/images/default-icon.png',
    badge: '/images/badge.png',
    data: {
      url: notificationData.url || '/'
    },
    vibrate: [200, 100, 200]
  }

  event.waitUntil(
    self.registration.showNotification(
      notificationData.title,
      options
    )
  )
})

self.addEventListener('notificationclick', event => {
  event.notification.close()

  const targetUrl = event.notification.data?.url || '/'
  const absoluteUrl = new URL(
    targetUrl,
    self.location.origin
  ).href

  event.waitUntil(
    clients.matchAll({
      type: 'window',
      includeUncontrolled: true
    }).then(windowClients => {
      for (const client of windowClients) {
        if (client.url === absoluteUrl && 'focus' in client) {
          return client.focus()
        }
      }

      if (clients.openWindow) {
        return clients.openWindow(absoluteUrl)
      }
    })
  )
})

async function staleWhileRevalidate(request, event) {
  const cache = await caches.open(RUNTIME_CACHE)
  const cached = await cache.match(request)

  const networkPromise = fetch(request)
    .then(async response => {
      if (
        response &&
        response.ok &&
        response.type === 'basic'
      ) {
        await cache.put(request, response.clone())
        await trimCache(cache, MAX_RUNTIME_ENTRIES)
      }

      return response
    })
    .catch(() => null)

  event.waitUntil(networkPromise)

  if (cached) {
    return cached
  }

  const networkResponse = await networkPromise

  return networkResponse || Response.error()
}

async function trimCache(cache, maxEntries) {
  const keys = await cache.keys()

  while (keys.length > maxEntries) {
    await cache.delete(keys.shift())
  }
}
