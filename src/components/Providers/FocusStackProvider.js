import { useRef, useEffect, createContext } from 'react'

const PushFocusStackContext = createContext(null)
const PopFocusStackContext = createContext(null)

function FocusStackProvider({ children }) {
  const stack = useRef([])

  const push = event => {
    stack.current.push(event.target)
  }
  
  const pop = () => {
    for (let i = stack.current.length - 1; i >= 0; i--) {
      const element = stack.current[i]
      if (document.body.contains(element)) {
        element.focus()
        stack.current = []
        return
      }
    }
  }

  return (
    <FocusStackContext.Provider value={{ push, pop }}>
      {children}
    </FocusStackContext.Provider>
  )
}

export { FocusStackContext, FocusStackProvider }
