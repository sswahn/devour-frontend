
const createStorage = type => {
  const getApi = () => {
    try {
      return typeof window === 'undefined' ? null : window[type]
    } catch {
      return null
    }
  }

  return {
    get(key) {
      if (typeof key !== 'string') {
        throw new TypeError('Storage key must be a string.')
      }
    
      try {
        const value = getApi()?.getItem(key)
        return value === null || value === undefined ? null : JSON.parse(value)
      } catch {
        return null
      }
    },

    set(key, value) {
      if (typeof key !== 'string') {
        throw new TypeError('Storage key must be a string.')
      }

      try {
        if (value === undefined) {
          return false
        }
        
        const serialized = JSON.stringify(value)
        if (serialized === undefined) {
          return false
        }
        
        const api = getApi()
        if (!api) {
          return false
        }

        api.setItem(key, serialized)
        return true
      } catch {
        return false
      }
    },

    remove(key) {
      if (typeof key !== 'string') {
        throw new TypeError('Storage key must be a string.')
      }

      try {
        const api = getApi()
        if (!api) {
          return false
        }
        
        api.removeItem(key)
        return true
      } catch {
        return false
      }
    },

    clear() {
      try {
        const api = getApi()
        if (!api) {
          return false
        }
        
        api.clear()
        return true
      } catch {
        return false
      }
    }
  }
}

const storage = {
  local: createStorage('localStorage'),
  session: createStorage('sessionStorage')
}

export default storage
