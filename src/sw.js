const STATIC_CACHE = 'static-v1'
const RUNTIME_CACHE = 'runtime-v1'
const PRECACHE_ASSETS = ['/', '/index.html', '/index.css']

const install = async event => {
  const cache = await caches.open(STATIC_CACHE)
  await cache.addAll(PRECACHE_ASSETS)
  self.skipWaiting()
}

const onInstall = event => {
  event.waitUntil(install())
})

self.addEventListener('install', onInstall)


const activate = async () => {
  const keys = await caches.keys()
  await Promise.all(keys
    .filter(key => ![STATIC_CACHE, RUNTIME_CACHE].includes(key))
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
    const cache = await caches.open(RUNTIME_CACHE)
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
