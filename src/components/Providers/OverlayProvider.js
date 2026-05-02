import { useState, useRef, useCallback, useEffect, createContext } from 'react'

const OverlayContext = createContext(null)

function OverlayProvider({ children }) {
  const [isActive, setIsActive] = useState(null)
  const focusStack = useRef([])
  const swapId = useRef(null)

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
    console.log('within openOverlay')
    if (history.state?.overlayOpen === id) {
      return
    }
    console.log('passed history condition: ', history.state?.overlayOpen === id)
    console.log('setting isActive to id: ', id)
    history.pushState({ overlayOpen: id }, '')
    push(focusElement)
    setIsActive(id)
  }, []) 
  
  const closeOverlay = useCallback((id = null) => {
    if (history.state?.overlayOpen) {
      history.back()
    }
    swapId.current = id
  }, [])

  const handlePopState = useCallback(() => {
    if (swapId.current !== null) {
      return openOverlay(swapId.current, null)
    }
    if (isActive) {
      setIsActive(null)
      pop()
    }
  }, [isActive])

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
