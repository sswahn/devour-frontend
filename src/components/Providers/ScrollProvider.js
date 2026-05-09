import { useState, useRef, useCallback, useEffect, createContext } from 'react'
import scroll from '../../utilities/scrollEngine'

const ScrollContext = createContext(null)

function ScrollProvider({ children }) {
  const [isSet, setIsSet] = useState(false)
  const getScrollRef = useRef(null)
  
  const setScrollRef = useCallback(node => {
    if (node) {
      getScrollRef.current = node  
      setIsSet(true)
    }
    return () => {
      getScrollRef.current = null
    }
  }, [])

  useEffect(() => {
    if (isSet) {
      scroll.get(getScrollRef.current)
    }
  }, [isSet])
  
  return (
    <ScrollContext.Provider value={{ getScrollRef, setScrollRef }}>
      {children}
    </ScrollContext.Provider>
  )
}

export { ScrollContext, ScrollProvider }
