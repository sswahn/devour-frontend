import { useRef, useCallback, createContext } from 'react'

const ScrollContext = createContext(null)

function ScrollProvider({ children }) {
  const getScrollRef = useRef(null)
  const setScrollRef = useCallback(node => {
    if (node) {
      getScrollRef.current = node  
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
