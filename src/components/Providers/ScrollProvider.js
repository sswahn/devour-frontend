import { useRef, useCallback, useEffect, createContext } from 'react'
import scroll from '../../utilities/scrollEngine'

const ScrollContext = createContext(null)

const ScrollProvider = ({ children }) => {
  const subscribers = useRef(new Set())
  const deltaY = useRef(0)
  const scrollStart = useRef(0)
  const prevScrollY = useRef(0)
  const prevTimestamp = useRef(0)
  const ticking = useRef(false)
  const scrollRef = useRef(null)
  const setScrollRef = useCallback(node => {
    if (node && scrollRef.current !== node) {
      scrollRef.current = node  
      addListeners(node)
      prevScrollY.current = node.scrollTop
      scrollStart.current = node.scrollTop
    }
    return () => {
      removeListeners(node)
    }
  }, [])

  const subscribe = fn => {
    if (typeof fn !== 'function') {
      throw new TypeError('scroll.subscribe arugument must be of type "function".')
    }
    subscribers.current.add(fn)
    fn({ deltaY: deltaY.current, direction: 'idle', velocity: 0 })
    return () => {
      subscribers.current.delete(fn)
      if (subscribers.current.size === 0) {
        stop()
      }
    }
  }

  const notify = data => {
    for (const fn of subscribers.current) {
      fn(data)
    }
  }

  const update = timestamp => {
    const scrollY = scrollRef.current.scrollTop
    deltaY.current = scrollY - scrollStart.current
    
    const dY = scrollY - prevScrollY.current
    const direction = dY > 0 ? 'down' : dY < 0 ? 'up' : 'idle'
    prevScrollY.current = scrollY
  
    // Calculate scroll velocity
    const deltaTime = timestamp - prevTimestamp.current
    const velocity = dY / deltaTime
    prevTimestamp.current = timestamp
    
    notify({ deltaY: deltaY.current, direction, velocity })
  }

  function onScroll(event) {
    if (!ticking.current) {
      ticking.current = true
      requestAnimationFrame(timestamp => {
        update(timestamp)
        ticking.current = false
      })
    }
  }
  
  function onScrollEnd(event) {
    scrollStart.current = scrollRef.current.scrollTop
    notify({ deltaY: deltaY.current, direction: 'idle', velocity: 0 })
  }

  const addListeners = element => {
    element.addEventListener('scroll', onScroll, { passive: true })
    element.addEventListener("scrollend", onScrollEnd, { passive: true })
  }

  const removeListeners = element => {
    element.removeEventListener('scroll', onScroll)
    element.removeEventListener('scrollend', onScrollEnd)
  }
  
  return (
    <ScrollContext.Provider value={{ subscribe, scrollRef, setScrollRef }}>
      {children}
    </ScrollContext.Provider>
  )
}

export { ScrollContext, ScrollProvider }
