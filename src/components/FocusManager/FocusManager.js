import { useRef } from 'react'

const selector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

function FocusManager({ children }) {
  const focusStack = useRef([])
  const focusTrapRef = useRef(null)

  const focusLast = event => {
    const elements = focusTrapRef.current.querySelectorAll(selector)
    elements[elements.length - 2]?.focus()
  }
  
  const focusFirst = event => {
    const elements = focusTrapRef.current.querySelectorAll(selector)
    elements[1]?.focus()
  }

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

  return (
    <div ref={focusTrapRef}>
      <div onFocus={focusLast} tabIndex={0}></div>
        {children}
      <div onFocus={focusFirst} tabIndex={0}></div>
    </div>
  )
}

export default FocusManager
