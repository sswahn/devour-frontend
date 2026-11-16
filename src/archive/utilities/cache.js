const cache = {
  async get(name, request) {
    if (typeof name !== 'string') {
      throw new TypeError('get: first argument must be of type string.')
    }
    if (!(request instanceof Request)) {
      throw new TypeError('get: second argument must be an instance of Request.')
    }
    try {
      const cache = await caches.open(name)
      const response = await cache.match(request)
      const cacheControlHeader = response.headers.get('Cache-Control')
      const maxAge = cacheControlHeader.split('max-age=')[1]
      const cacheExpirationTime = Date.now() + Number(maxAge) * 1000
      if (cacheExpirationTime < Date.now()) {
        await cache.delete(request)
        return null
      }
      return response
    } catch (error) {
      throw new Error(`Failed to retrieve from cache ${name}.`)
    }
  },
  async set(name, request, response, maxAgeSeconds = 180) {
    if (typeof name !== 'string') {
      throw new TypeError('set: first argument must be of type string.')
    }
    if (!(request instanceof Request)) {
      throw new TypeError('set: second argument must be an instance of Request.')
    }
    if (!(response instanceof Response)) {
      throw new TypeError('set: third argument must be an instance of Response.')
    }
    try {
      const cache = await caches.open(name)
      const clonedBody = await response.clone().blob()
      // Merge headers safely
      const originalHeaders = Object.fromEntries(response.headers.entries())
      const headersWithCacheControl = {
        ...originalHeaders,
        'Cache-Control': `max-age=${maxAgeSeconds}`
      }
      const responseWithCacheControl = new Response(clonedBody, {
        status: response.status,
        statusText: response.statusText,
        headers: headersWithCacheControl
      })
      await cache.put(request, responseWithCacheControl)
    } catch (error) {
      throw new Error(`Failed to set cache entry for ${name}.`)
    }
  },
  async delete(name, request) {
    if (typeof name !== 'string') {
      throw new TypeError('delete: first argument must be of type string.')
    }
    if (!(request instanceof Request)) {
      throw new TypeError('delete: second argument must be an instance of Request.')
    }
    try {
      const cache = await caches.open(name)
      await cache.delete(request)
    } catch (error) {
      throw new Error(`Failed to delete cache entry from ${name}.`)
    }
  },
  async clear(name) {
    if (typeof name !== 'string') {
      throw new TypeError('clear: argument must be of type string.')
    }
    try {
      const cache = await caches.open(name)
      const keys = await cache.keys()
      for (let key of keys) {
        await cache.delete(key)
      }
    } catch (error) {
      throw new Error(`Failed to clear cache ${name}.`)
    }
  },
  async keys(name) {
    if (typeof name !== 'string') {
      throw new TypeError('keys: argument must be of type string.')
    }
    try {
      const cache = await caches.open(name)
      return cache.keys()
    } catch (error) {
      throw new Error(`Failed to retrieve keys from cache ${name}.`)
    }
  }
}

export default cache
