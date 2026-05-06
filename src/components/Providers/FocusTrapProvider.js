import { useState, useRef, useCallback, createContext } from 'react'

const FocusTrapContext = createContext(null)

const selector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

function FocusTrapProvider({ children }) {
  const [isMounted, setIsMounted] = useState(false)
  const overlayRef = useRef(null)
  
  const focusRef = useCallback(node => {
    if (node !== null) {
      overlayRef.current = node
      overlayRef.current.focus()
      setIsMounted(true)
      return () => {
        overlayRef.current = null
        setIsMounted(false)
      }
    }
  }, [])

  const focusLast = event => {
    const elements = overlayRef.current.querySelectorAll(selector)

    console.log('focus (last) element: ', elements[elements.length - 1])
    
    elements[elements.length - 1]?.focus()
  }
  
  const focusFirst = event => {
    const elements = overlayRef.current.querySelectorAll(selector)

    console.log('focus (first) element: ', elements[0])
    
    elements[0]?.focus({ preventScroll: true })
  }
    
  return (
    <FocusTrapContext.Provider value={{ overlayRef, focusRef }}>
      {isMounted && <div onFocus={focusLast} tabIndex={0}></div>}
        {children}
      {isMounted && <div onFocus={focusFirst} tabIndex={0}></div>}
    </FocusTrapContext.Provider>
  )
}

export { FocusTrapContext, FocusTrapProvider }
