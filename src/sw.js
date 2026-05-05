
const CACHE_NAME = 'getRequests'

const install = async event => {
  const cache = await caches.open('assets')
  await cache.addAll(['/', '/index.html', '/index.css'])
  self.skipWaiting()
}

const onInstall = event => {
  event.waitUntil(install())
})

self.addEventListener('install', onInstall)



const activate = async event => {
  const names = await caches.keys()
  return Promise.all(names.map(cache => {
    if (cache !== CACHE_NAME) {
      return caches.delete(cache)
    }
  }))
}

const onActivate = event => {
  event.waitUntil(activate())
  self.clients.claim()
}

self.addEventListener('activate', onActivate)


const cacheResponse = async (request, response) => {
  if (response.ok) {
    const cache = await caches.open(CACHE_NAME)
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
