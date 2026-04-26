import { useState, useRef, useCallback, useEffect, createContext } from 'react'
import useFocusStack from '../../hooks/useFocusStack'

const OverlayContext = createContext(null)

function OverlayProvider({ children }) {
  const [isActive, setIsActive] = useState(undefined)
  const closeFired = useRef(false)
  const { push, pop } = useFocusStack()

  const openOverlay = useCallback((id, focusElement) => {
    history.pushState({ overlayOpen: true }, '')
    closeFired.current = true
    push(focusElement)
    setIsActive(id)
  }, []) 
  
  const closeOverlay = useCallback(() => {
    if (!isActive || closeFired.current) {
      return
    }
    if (history.state?.overlayOpen) {
      closeFired.current = true
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
