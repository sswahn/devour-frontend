import { useRef, useCallback, createContext } from 'react'

const ScrollContext = createContext(null)

function ScrollProvider({ children }) {
  const scrollRef = useRef(null)
  const overlayRef = useCallback(node => {
    if (node) {
      
    
      return () => {
        // cleanup function
      }
    }
  }, [])
  return (
    <ScrollContext.Provider value={}>
      {children}
    </ScrollContext.Provider>
  )
}

export { ScrollContext, ScrollProvider }
