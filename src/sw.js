
const cacheResponse = (request, response) => {
  if (response.ok) {
    const cache = await caches.open('getRequests')
    cache.put(request, response.clone())
  }
}

const fetchRequest = async event => {
    try {
    const { request } = event
    const response = await fetch(request)
    cahceResponse(request, response)
    return response
  } catch (error) {
    return caches.match(request)
  }
}

const interceptFetch = event => {
  if (request.method === 'GET') {
    event.respondWith(fetchRequest(event))
  }
}

self.addEventListener('fetch', interceptFetch)
