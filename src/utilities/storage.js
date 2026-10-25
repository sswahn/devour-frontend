// Helper to safely check if window and storage are accessible
const getStorageApi = (storageType) => {
  if (typeof window === 'undefined') {
    return null
  }
  try {
    const api = window[storageType]
    // Test if storage is actually writable (handles full disk / privacy blocks)
    const testKey = '__storage_test__'
    api.setItem(testKey, testKey)
    api.removeItem(testKey)
    return api
  } catch (e) {
    return null // Return null so utility falls back gracefully instead of crashing
  }
}

const createStorageWrapper = storageType => {
  return {
    get(key, fallback = null) {
      if (typeof key !== 'string') {
        throw new TypeError(`${storageType}.get: argument must be of type string.`)
      }
      const api = getStorageApi(storageType)
      if (!api) {
        return fallback
      }
      try {
        const item = api.getItem(key)
        if (item === null) {
          return fallback
        }
        // Handle explicit string "undefined" fallback safely
        if (item === 'undefined') {
          return undefined
        }
        return JSON.parse(item)
      } catch (error) {
        console.error(`Error reading key "${key}" from ${storageType}:`, error)
        return fallback 
      }
    },
    set(key, value) {
      if (typeof key !== 'string') {
        throw new TypeError(`${storageType}.set: first argument must be of type string.`)
      }
      const api = getStorageApi(storageType)
      if (!api) {
        return false
      }
      try {
        // Explicitly handle undefined before JSON processing
        if (value === undefined) {
          api.setItem(key, 'undefined')
          return true
        }
        // Handle BigInt serialization edge-case safely
        const serializedValue = JSON.stringify(value, (_, v) =>
          typeof v === 'bigint' ? v.toString() : v
        )
        api.setItem(key, serializedValue)
        return true
      } catch (error) {
        console.error(`Error writing key "${key}" to ${storageType}:`, error)
        return false
      }
    },
    remove(key) {
      if (typeof key !== 'string') {
        throw new TypeError(`${storageType}.remove: argument must be of type string.`)
      }
      const api = getStorageApi(storageType)
      if (!api) {
        return false
      }
      try {
        api.removeItem(key)
        return true
      } catch (error) {
        console.error(`Error removing key "${key}" from ${storageType}:`, error)
        return false
      }
    },
    clear() {
      const api = getStorageApi(storageType)
      if (!api) {
        return false
      }
      try {
        api.clear()
        return true
      } catch (error) {
        console.error(`Error clearing ${storageType}:`, error)
        return false
      }
    },
    key(n, fallback = null) {
      if (typeof n !== 'number') {
        throw new TypeError(`${storageType}.key: argument must be of type number.`)
      }
      const api = getStorageApi(storageType)
      if (!api) {
        return fallback
      }
      try {
        const result = api.key(n)
        return result !== null ? result : fallback
      } catch (error) {
        console.error(`Error retrieving index ${n} from ${storageType}:`, error)
        return fallback
      }
    }
  }
}

const storage = {
  local: createStorageWrapper('localStorage'),
  session: createStorageWrapper('sessionStorage')
}

export default storage
