import { useState, useRef, useEffect, createContext } from 'react'
import useOverlay from '../../hooks/useOverlay'

const FocusTrapContext = createContext(null)

const selector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

function FocusTrapProvider({ children }) {
  const { isActive } = useOverlay()
  const [isMounted, setIsMounted] = useState(false)
  const focusTrapRef = useRef(null)

  const focusLast = event => {
    const elements = focusTrapRef.current.querySelectorAll(selector)
    elements[elements.length - 1]?.focus()
  }
  
  const focusFirst = event => {
    const elements = focusTrapRef.current.querySelectorAll(selector)    
    elements[0]?.focus()
  }

  useEffect(() => {
    if (isActive) {
      setIsMounted(true)
    }
  }, [isActive])
    
  return (
    <FocusTrapContext.Provider value={{ overlayRef, focusRef }}>
      {isMounted &&  (
        <div ref={focusTrapRef}>
          <div onFocus={focusLast} tabIndex={0}></div>}
            {children}
          <div onFocus={focusFirst} tabIndex={0}></div>}
        </div>
      )}
    </FocusTrapContext.Provider>
  )
}

export { FocusTrapContext, FocusTrapProvider }
