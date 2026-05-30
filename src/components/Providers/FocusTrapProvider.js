import { useRef, createContext } from 'react'

const FocusTrapContext = createContext(null)

const selector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

function FocusTrapProvider({ children }) {
  const focusTrapRef = useRef(null)

  const focusLast = event => {
    const elements = focusTrapRef.current.querySelectorAll(selector)
    elements[elements.length - 2]?.focus()
  }
  
  const focusFirst = event => {
    const elements = focusTrapRef.current.querySelectorAll(selector)
    elements[1]?.focus()
  }
    
  return (
    <FocusTrapContext.Provider>
      <div ref={focusTrapRef}>
        <div onFocus={focusLast} tabIndex={0}></div>
          {children}
        <div onFocus={focusFirst} tabIndex={0}></div>
      </div>
    </FocusTrapContext.Provider>
  )
}

export { FocusTrapContext, FocusTrapProvider }
