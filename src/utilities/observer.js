
function createObserver({ root = null, rootMargin = '0px', threshold = 0 } = {}) {
  const elementCallbacks = new Map()

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elementCallbacks.get(entry.target)
      if (callback) {
        callback(entry)
      }
    })
  }, { root, rootMargin, threshold })

  const observe = (element, callback) => {
    elementCallbacks.set(element, callback)
    observer.observe(element)
  }

  const unobserve = element => {
    elementCallbacks.delete(element)
    observer.unobserve(element)
  }

  const disconnect = () => {
    elementCallbacks.clear()
    observer.disconnect()
  }
  
  return {
    observe,
    unobserve,
    disconnect
  }
}

export default createObserver
