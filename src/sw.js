

const fetchRequest = async event => {
    try {
    const { request } = event
    const response = await fetch(request)
    const cache = await caches.open('getRequests')
    cache.put(request, response.clone())
    return response
  } catch (error) {
    return caches.match(request)
  }
}

const interceptFetch = event => {
  event.respondWith(fetchRequest(event))
}

self.addEventListener('fetch', interceptFetch)
