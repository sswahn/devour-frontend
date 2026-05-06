import { useState, useRef, useEffect } from 'react'
import useOverlay from '../../hooks/useOverlay'
const selector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

function FocusTrap({ children }) {
  const [isMounted, setIsMounted] = useState(false)
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
    <div ref={focusTrapRef}>
      <div onFocus={focusLast} tabIndex={0}></div>
        {children}
      <div onFocus={focusFirst} tabIndex={0}></div>
    </div>
  )
}

export default FocusTrap
