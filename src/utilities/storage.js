
const createStorageWrapper = storageType => {
  const api = window[storageType]

  return {
    get(key, fallback = null) {
      if (typeof key !== 'string') {
        throw new TypeError(`${storageType}.get: argument must be of type string.`)
      }
      try {
        const item = api.getItem(key)
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
        api.setItem(key, JSON.stringify(value))
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
      try {
        api.removeItem(key)
        return true
      } catch (error) {
        console.error(`Error removing key "${key}" from ${storageType}:`, error)
        return false
      }
    },

    clear() {
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
      try {
        const result = api.key(n)
        return result !== null ? result : fallback;
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
