import { useState, useRef, useCallback, useEffect, createContext } from 'react'

const OverlayContext = createContext(null)

function OverlayProvider({ children }) {
  const [isActive, setIsActive] = useState(null)
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
    if (history.state?.overlayOpen === id) {
      history.replaceState({ overlayOpen: id, element: flocusELement }, '')
    } else {
      history.pushState({ overlayOpen: id, element: flocusELement }, '')
    }
  }, []) 
  
  const closeOverlay = useCallback(() => {
    if (history.state?.overlayOpen) {
      history.back()
    }
  }, [])

  const handlePopState = () => {
    if (!isActive) {
      const { overlayOpen, element } = history.state
      push(element)
      setIsActive(overlayOpen)
    } else {
      setIsActive(null)
      pop()
    }
  }

  useEffect(() => {
    window.addEventListener('popstate', handlePopState)
    return () => {
      window.removeEventListener('popstate', handlePopState)
    } 
  }, [])

  return (
    <OverlayContext.Provider value={{ isActive, openOverlay, closeOverlay }}>
      {children}
    </OverlayContext.Provider>
  )
}

export { OverlayContext, OverlayProvider }
