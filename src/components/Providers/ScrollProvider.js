import { useRef, useCallback, useEffect, createContext } from 'react'
import scroll from '../../utilities/scrollEngine'

const ScrollContext = createContext(null)

const ScrollProvider = ({ children }) => {
  const subscribers = useRef(new Set())
  const deltaY = useRef(0)
  const scrollStart = useRef(0)
  const prevScrollY = useRef(0)
  const ticking = useRef(0)
  const ScrollRef = useRef(null)
  
  const setScrollRef = useCallback(node => {
    if (node) {
      getScrollRef.current = node  
      scroll.get(node)
    }
    return () => {
      getScrollRef.current = null
    }
  }, [])

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
    const rawVelocity = dY / deltaTime
    velocity.current = (rawVelocity * 0.05) + (velocity.current * (1 - 0.05))
    // try for a buttery scroll:
    //velocity = (rawVelocity * 0.03) + (velocity * 0.97)
    prevTimestamp = timestamp
    notify({ deltaY: deltaY.current, direction, velocity: velocity.current })
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
    notify({ deltaY, direction, velocity: 0 })
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
    <ScrollContext.Provider value={{ scrollRef, setScrollRef }}>
      {children}
    </ScrollContext.Provider>
  )
}

export { ScrollContext, ScrollProvider }
