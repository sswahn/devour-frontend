import { useState, useCallback, useEffect, createContext } from 'react'
import useFocusStack from '../../hooks/useFocusStack'

const OverlayContext = createContext(null)

function OverlayProvider({ children }) {
  const [isActive, setIsActive] = useState(undefined)
  const { push, pop } = useFocusStack()

  const openOverlay = useCallback((id, element) => {
    push(element)
    setIsActive(id)
    history.pushState({ overlayOpen: true }, '')
  }, []) 
  
  const closeOverlay = useCallback(() => {
    if (!isActive) {
      return
    }
    if (history.state?.overlayOpen) {
      history.back()
    }
    setIsActive(undefined)
    pop()
  }, [isActive])

  useEffect(() => {
    window.addEventListener('popstate', closeOverlay)
    return () => {
      window.removeEventListener('popstate', closeOverlay)
    } 
  }, [])

  return (
    <OverlayContext.Provider value={{ isActive, openOverlay, closeOverlay }}>
      {children}
    </OverlayContext.Provider>
  )
}

export { OverlayContext, OverlayProvider }
