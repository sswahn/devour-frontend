import { useRef, useCallback, useEffect, createContext } from 'react'
import scroll from '../../utilities/scrollEngine'

const ScrollContext = createContext(null)

const ScrollProvider = ({ children }) => {
  const subscribers = useRef(new Set())
  const deltaY = useRef(0)
  const scrollStart = useRef(0)
  const prevScrollY = useRef(0)
  const ticking = useRef(0)
  const scrollRef = useRef(null)
  const setScrollRef = useCallback(node => {
    if (node) {
      scrollRef.current = node  
    }
    return () => {
      scrollRef.current = null
    }
  }, [])

  const subscribe = fn => {
    if (typeof fn !== 'function') {
      throw new TypeError('scroll.subscribe arugument must be of type "function".')
    }
    const { add, delete, size } = subscribers.current
    add(fn)
    fn({ deltaY: deltaY.current, direction: 'idle', velocity: 0 })
    return () => {
      delete(fn)
      if (size === 0) {
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
    const scrollY = element.scrollTop
    deltaY.current = scrollY - scrollStart.current
    
    const dY = scrollY - prevScrollY.current
    const direction = dY > 0 ? 'down' : dY < 0 ? 'up' : 'idle'
    prevScrollY.current = scrollY
  
    // Calculate scroll velocity
    const deltaTime = timestamp - prevTimestamp
    const velocity = dY / deltaTime
    prevTimestamp = timestamp
    
    notify({ deltaY: deltaY.current, direction, velocity })
  }

  function onScroll(event) {
    if (!ticking.curret) {
      ticking.current = true
      requestAnimationFrame(timestamp => {
        update(timestamp)
        ticking.current = false
      })
    }
  }
  
  function onScrollEnd(event) {
    scrollStart.current = element.scrollTop
    notify({ deltaY: deltaY.current, direction: 'idle', velocity: 0 })
  }

  useEffect(() => {
    const element = scrollRef.current
    if (!element) {
      return
    }
    element.addEventListener('scroll', onScroll, { passive: true })
    element.addEventListener("scrollend", onScrollEnd, { passive: true })
    return () => {
      element.removeEventListener('scroll', onScroll)
      element.removeEventListener('scrollend', onScrollEnd)
    }
  }, [])
  
  return (
    <ScrollContext.Provider value={{ subscribe, scrollRef, setScrollRef }}>
      {children}
    </ScrollContext.Provider>
  )
}

export { ScrollContext, ScrollProvider }
