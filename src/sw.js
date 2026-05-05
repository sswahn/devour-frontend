
// need 'install' and 'active' event listeners


const install = async event => {
  const cache = await caches.open('assets')
  cache.addAll(['/', '/index.html', '/index.css'])
  self.skipWaiting()
}

const onInstall = event => {
  event.waitUntil(install())
})

self.addEventListener('install', onInstall)



const cacheResponse = async (request, response) => {
  if (response.ok) {
    const cache = await caches.open('getRequests')
    cache.put(request, response.clone())
  }
}

const getRequest = async event => {
    try {
    const { request, waitUntil } = event
    const response = await fetch(request)
    waitUntil(cacheResponse(request, response))
    return response
  } catch (error) {
    return caches.match(request) || Response.error()
  }
}

const onFetch = event => {
  const { request, respondWith } = event
  if (request.method === 'GET') {
    respondWith(getRequest(event))
  }
}

self.addEventListener('fetch', onFetch)
