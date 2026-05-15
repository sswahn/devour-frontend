import { useState, createContext, useMemo } from 'react'

const SessionContext = createContext(null)

function SessionProvider({ children }) {
  const [session, setSession] = useState({
    username: 'testUser',
    isAuthenticated: true// false
  })
  
  // Encapsulate login logic using useCallback to keep the reference stable
  const login = useCallback((username) => {
    setSession({ username, isAuthenticated: true })
  }, [])

  // Encapsulate logout logic using useCallback to keep the reference stable
  const logout = useCallback(() => {
    setSession({ username: '', isAuthenticated: false })
  }, [])

  const memo = useMemo(() => ({ 
    session, 
    login,
    logout
  }), [session, login, logout])
  
  return (
    <SessionContext.Provider value={memo}>
      {children}
    </SessionContext.Provider>
  )
}

export { SessionContext, SessionProvider }
