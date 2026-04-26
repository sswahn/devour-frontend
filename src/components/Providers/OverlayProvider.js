import { useState, useRef, useCallback, useEffect, createContext } from 'react'

const OverlayContext = createContext(null)

function OverlayProvider({ children }) {
  const [isActive, setIsActive] = useState(undefined)
  const closeFired = useRef(false)
  const focusStack = useRef([])

  const push = element => {
    focusStack.current.push(element)
  }
  
  const pop = () => {
    for (let i = focusStack.current.length - 1; i >= 0; i--) {
      const element = focusStack.current[i]
      if (document.body.contains(element)) {
        element.focus()
        focusStack.current = []
        return
      }
    }
  }

  const openOverlay = useCallback((id, focusElement) => {
    history.pushState({ overlayOpen: true }, '')
    closeFired.current = false
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
  }, [closeOverlay])

  return (
    <OverlayContext.Provider value={{ isActive, openOverlay, closeOverlay }}>
      {children}
    </OverlayContext.Provider>
  )
}

export { OverlayContext, OverlayProvider }
