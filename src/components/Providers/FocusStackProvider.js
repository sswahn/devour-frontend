import { useRef, useEffect, useCallback, createContext } from 'react'

const FocusStackContext = createContext(null)

function FocusStackProvider({ children }) {
  const stack = useRef([])

  const push = useCallback(element => {
    stack.current.push(element)
  }, [])
  
  const pop = useCallback(() => {
    for (let i = stack.current.length - 1; i >= 0; i--) {
      const element = stack.current[i]
      if (document.body.contains(element)) {
        element.focus()
        stack.current = []
        return
      }
    }
  }, [])

  return (
    <FocusStackContext.Provider value={{ push, pop }}>
      {children}
    </FocusStackContext.Provider>
  )
}

export { FocusStackContext, FocusStackProvider }
