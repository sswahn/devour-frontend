import { useState, useCallback, createContext } from 'react'

const OverlayContext = createContext(null)

function OverlayProvider({ children }) {
  const [isActive, setIsActive] = useState(undefined)

  const openOverlay = useCallback(id => {
    setIsActive(id)
  }, []) 
  
  const closeOverlay = useCallback(() => {
    setIsActive(undefined)
  }, [])

  return (
    <OverlayContext.Provider value={{ isActive, openOverlay, closeOverlay }}>
      {children}
    </OverlayContext.Provider>
  )
}

export { OverlayContext, OverlayProvider }
