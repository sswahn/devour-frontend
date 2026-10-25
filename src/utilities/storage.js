
const createStorageWrapper = storageType => {
  const api = window[storageType]

  return {
    get(key, fallback = null) {
      if (typeof key !== 'string') {
        throw new TypeError(`${storageType}.get: argument must be of type string.`)
      }
      try {
        const item = api.getItem(key)
        // If the key doesn't exist, return the developer-defined fallback
        return item ? JSON.parse(item) : fallback
      } catch (error) {
        console.error(`Error reading key "${key}" from ${storageType}:`, error)
        return fallback 
      }
    },

    set(key, value) {
      if (typeof key !== 'string') {
        throw new TypeError(`${storageType}.set: first argument must be of type string.`)
      }
      try {
        // Works flawlessly for primitives (strings, booleans, numbers) AND objects/arrays
        api.setItem(key, JSON.stringify(value))
        return true
      } catch (error) {
        console.error(`Error writing key "${key}" to ${storageType}:`, error)
        return false // Returns false instead of crashing the UI
      }
    },

    remove(key) {
      if (typeof key !== 'string') {
        throw new TypeError(`${storageType}.remove: argument must be of type string.`)
      }
      try {
        api.removeItem(key)
      } catch (error) {
        console.error(`Error removing key "${key}" from ${storageType}:`, error)
      }
    },

    clear() {
      try {
        api.clear()
      } catch (error) {
        console.error(`Error clearing ${storageType}:`, error)
      }
    },

    key(n) {
      if (typeof n !== 'number') {
        throw new TypeError(`${storageType}.key: argument must be of type number.`)
      }
      try {
        return api.key(n)
      } catch (error) {
        console.error(`Error retrieving index ${n} from ${storageType}:`, error)
        return null
      }
    }
  }
}

const storage = {
  local: createStorageWrapper('localStorage'),
  session: createStorageWrapper('sessionStorage')
}

export default storage
