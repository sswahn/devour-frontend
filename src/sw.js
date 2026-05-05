
// need 'install' and 'active' event listeners

const cacheResponse = async (request, response) => {
  if (response.ok) {
    const cache = await caches.open('getRequests')
    cache.put(request, response.clone())
  }
}

const fetchRequest = async event => {
    try {
    const { request } = event
    const response = await fetch(request)
    cacheResponse(request, response)
    return response
  } catch (error) {
    return caches.match(request) || Response.error()
  }
}

const interceptFetch = event => {
  const { request, respondWith } = event
  if (request.method === 'GET') {
    respondWith(fetchRequest(event))
  }
}

self.addEventListener('fetch', interceptFetch)
