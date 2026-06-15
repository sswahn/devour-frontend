const STATIC_CACHE = 'static-v1'
const RUNTIME_CACHE = 'runtime-v1'
const PRECACHE_ASSETS = ['/']
const MAX_RUNTIME_ENTRIES = 50


self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(STATIC_CACHE)

    await Promise.allSettled(
      PRECACHE_ASSETS.map(url => cache.add(url))
    )

    await self.skipWaiting()
  })())
})


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


self.addEventListener('fetch', event => {
  const { request } = event

  if (request.method !== 'GET') return

  const url = new URL(request.url)

  if (url.origin !== self.location.origin) return


  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const response = await fetch(request)
        event.waitUntil(
          caches.open(RUNTIME_CACHE).then(cache =>
            cache.put(request, response.clone())
          )
        )
        return response
      } catch {
        return (await caches.match('/')) || (await caches.match('/index.html'))
      }
    })())
    return
  }


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
 // Check if the server sent data, then parse it
 if (event.data) {
    try {
      notificationData = event.data.json()
    } catch (error) {
      // Handle plain text payload fallback
      notificationData.body = event.data.text()
    }
  }

  // Pass the dynamic server variables into the notification
  const options = {
    body: notificationData.body,
    icon: notificationData.icon || '/images/default-icon.png',
    data: { url: notificationData.url }, // Save custom data (like a click URL)
    vibrate: [200, 100, 200],
    badge: '/images/badge.png' // Small icon for mobile status bars
  };
  event.waitUntil(
    self.registration.showNotification(notificationData.title, options)
  )
})

// handles notification click
self.addEventListener('notificationclick', event => {
  event.notification.close()
  const targetUrl = event.notification.data.url || '/'

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(windowClients) {
      // If a tab is already open, focus it. Otherwise, open a new tab.
      for (var i = 0; i < windowClients.length; i++) {
        var client = windowClients[i]
        if (client.url === targetUrl && 'focus' in client) {
          return client.focus()
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(targetUrl)
      }
    })
  )
})

async function staleWhileRevalidate(request, event) {
  const cache = await caches.open(RUNTIME_CACHE)
  const cached = await cache.match(request)

  const networkPromise = fetch(request).then(async response => {
    if (response && response.ok && response.type === 'basic') {
      await cache.put(request, response.clone())
      await trimCache(cache, MAX_RUNTIME_ENTRIES)
    }
    return response
  }).catch(() => null)

  event.waitUntil(networkPromise)

  return cached || networkPromise || Response.error()
}


async function trimCache(cache, maxEntries) {
  const keys = await cache.keys()
  while (keys.length > maxEntries) {
    await cache.delete(keys.shift())
  }
}
