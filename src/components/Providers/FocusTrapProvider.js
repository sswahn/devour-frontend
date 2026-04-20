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
    } else {  
      overlayRef.current = null // 2. Cleanup logic (unmount)
      setIsMounted(false)
    }
  }, [])

  const focusLast = event => {
    const elements = overlayRef.current.querySelectorAll(selector)
    elements[elements.length - 1]?.focus()
  }
  
  const focusFirst = event => {
    const elements = overlayRef.current.querySelectorAll(selector)
    elements[0]?.focus()
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
