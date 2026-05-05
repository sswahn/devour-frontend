

const interceptFetch = event => {
  try {
    const { request, respondWith } = event
    const response = fetch(request)
    const cache = caches.open('getRequests')
    const cache.put(request, response.clone())
    return respondWith(response)
  } catch (error) {
    return respondWith(caches.match(request))
  }
}

self.addEventListener('fetch', interceptFetch)
