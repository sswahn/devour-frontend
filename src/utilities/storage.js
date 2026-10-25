const storage = {
  local: { 
    get(key) {
      if (typeof key !== 'string') {
        throw new TypeError('local.get: argument must be of type string.')
      }
      try {
        return JSON.parse(
          localStorage.getItem(key)
        )
      } catch (error) {
        throw new Error(`Error reading item from local storage using key: ${key}.`)
      }
    },
    set(key, value) {
      if (typeof key !== 'string') {
        throw new TypeError('local.set: first argument must be of type string.')
      }
      if (typeof value !== 'object') {
        throw new TypeError('local.set: second argument must be of type object.')
      }
      try {
        localStorage.setItem(key, JSON.stringify(value))
      } catch (error) {
        throw new Error(`Error writing to local storage using key: ${key}.`)
      }
    },
    remove(key) {
      if (typeof key !== 'string') {
        throw new TypeError('local.remove: argument must be of type string.')
      }
      try {
        localStorage.removeItem(key)
      } catch (error) {
        throw new Error(`Error removing item from local storage using key: ${key}`)
      }
    },
    clear() {
      try {
        localStorage.clear()
      } catch (error) {
        throw new Error('Error clearing items from local storage.')
      }
    },
    key(n) {
      if (typeof n !== 'number') {
        throw new TypeError('local.key: argument must be of type number.')
      }
      try {
        return localStorage.key(n)
      } catch (error) {
        throw new Error(`Error retrieving key from local storage using index: ${n}.`)
      }
    }
  },
  session: { 
    get(key) {
      if (typeof key !== 'string') {
        throw new TypeError('session.get: argument must be of type string.')
      }
      try {
        return JSON.parse(
          sessionStorage.getItem(key)
        )
      } catch (error) {
        throw new Error(`Error reading item from session storage using key: ${key}.`)
      }
    },
    set(key, value) {
      if (typeof key !== 'string') {
        throw new TypeError('session.set: first argument must be of type string.')
      }
      if (typeof value !== 'object') {
        throw new TypeError('session.set: second argument must be of type object.')
      }
      try {
        sessionStorage.setItem(key, JSON.stringify(value))
      } catch (error) {
        throw new Error(`Error writing item to session storage using key: ${key}.`)
      }
    },
    remove(key) {
      if (typeof key !== 'string') {
        throw new TypeError('session.remove: argument must be of type string.')
      }
      try {
        sessionStorage.removeItem(key)
      } catch (error) {
        throw new Error(`Error removing item from session storage using key: ${key}`)
      }
    },
    clear() {
      try {
        sessionStorage.clear()
      } catch (error) {
        throw new Error('Error clearing items from session storage.')
      }
    },
    key(n) {
      if (typeof n !== 'number') {
        throw new TypeError('session.key: argument must be of type number.')
      }
      try {
        return sessionStorage.key(n)
      } catch (error) {
        throw new Error(`Error retrieving key from session storage using index: ${n}.`)
      }
    }
  }
}

export default storage
