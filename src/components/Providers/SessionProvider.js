import { useState, createContext, useMemo } from 'react'

const SessionContext = createContext()

function SessionProvider({ children }) {
  const [session, setSession] = useState({
    username: 'testUser',
    isAuthenticated: true// false
  })
  
  // login sets session (setSession)
  // app gets session

  const memo = useMemo(() => ({ session, setSession }))
  
  return (
    <SessionContext.Provider value={memo}>
      {children}
    </SessionContext.Provider>
  )
}

export { SessionContext, SessionProvider }
