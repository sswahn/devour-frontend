import { useState, useCallback, createContext } from 'react'
import useFocusStack from '../../hooks/useFocusStack'

const OverlayContext = createContext(null)

function OverlayProvider({ children }) {
  const [isActive, setIsActive] = useState(undefined)
  const { push, pop } = useFocusStack()

  const openOverlay = useCallback(id => {
    push(id)
    setIsActive(id)
  }, []) 
  
  const closeOverlay = useCallback(() => {
    setIsActive(undefined)
    pop()
  }, [])

  return (
    <OverlayContext.Provider value={{ isActive, openOverlay, closeOverlay }}>
      {children}
    </OverlayContext.Provider>
  )
}

export { OverlayContext, OverlayProvider }
