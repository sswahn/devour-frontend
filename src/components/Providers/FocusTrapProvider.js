import { useState, useRef, useEffect, createContext } from 'react'
import useOverlay from '../../hooks/useOverlay'

const FocusTrapContext = createContext(null)

const selector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

function FocusTrapProvider({ children }) {
  const { isActive } = useOverlay()
  const [isMounted, setIsMounted] = useState(false)
  const focusTrapRef = useRef(null)

  const focusLast = event => {
    const array = [ ...focusTrapRef.current.querySelectorAll(selector) ]
    const elements =  array.filter(element => !element.hasAttribute('data-focus-sentinel'))
    elements[elements.length - 2]?.focus()
  }
  
  const focusFirst = event => {
    const array = [ ...focusTrapRef.current.querySelectorAll(selector) ]
    const elements =  array.filter(element => !element.hasAttribute('data-focus-sentinel')) 
    elements[1]?.focus()
  }

  useEffect(() => {
    if (isActive) {
      setIsMounted(true)
    }
  }, [isActive])
    
  return (
    <FocusTrapContext.Provider>
      {isMounted &&  (
        <div ref={focusTrapRef}>
          <div onFocus={focusLast} tabIndex={0} data-focus-sentinel></div>
            {children}
          <div onFocus={focusFirst} tabIndex={0} data-focus-sentinel></div>
        </div>
      )}
    </FocusTrapContext.Provider>
  )
}

export { FocusTrapContext, FocusTrapProvider }
