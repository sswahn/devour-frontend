
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
  const keys = await caches.keys()
  await Promise.all(keys
    .filter(key => key !== CACHE_NAME)
    .map(key => caches.delete(key))
  )
  await self.clients.claim()
}

const onActivate = event => {
  event.waitUntil(activate())
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
