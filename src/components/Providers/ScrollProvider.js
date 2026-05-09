import { useRef, useCallback, useEffect, createContext } from 'react'
import scroll from '../../utilities/scrollEngine'

const ScrollContext = createContext(null)

function ScrollProvider({ children }) {
  const getScrollRef = useRef(null)
  const setScrollRef = useCallback(node => {
    if (node) {
      getScrollRef.current = node  
      scroll.get(node)
    }
    return () => {
      getScrollRef.current = null
    }
  }, [])
  
  return (
    <ScrollContext.Provider value={{ getScrollRef, setScrollRef }}>
      {children}
    </ScrollContext.Provider>
  )
}

export { ScrollContext, ScrollProvider }
