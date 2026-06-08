import { useState, useRef, useEffect, createContext } from 'react'

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

  const openOverlay = (id, focusElement) => {
    if (history.state?.overlayOpen === id) {
      history.replaceState({ overlayOpen: id }, '')
    } else {
      history.pushState({ overlayOpen: id }, '')
    }
    push(focusElement)
    setIsActive(id)
  }
  
  const closeOverlay = () => {
    if (history.state?.overlayOpen) {
      history.back()
    }
  }

  const handlePopState = () => {
    if (isActive) {
      setIsActive(null)
      pop()
    }
  }

  useEffect(() => {
    window.addEventListener('popstate', handlePopState)
    return () => {
      window.removeEventListener('popstate', handlePopState)
    } 
  }, [handlePopState])

  return (
    <OverlayContext.Provider value={{ isActive, openOverlay, closeOverlay }}>
      {children}
    </OverlayContext.Provider>
  )
}

export { OverlayContext, OverlayProvider }
