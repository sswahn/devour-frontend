import { useState, createContext } from 'react'

const SessionContext = createContext()

function SessionProvider({ children }) {
  const [session, setSession] = useState({
    username: 'testUser',
    isAuthenticated: true// false
  })
  
  // login sets session (setSession)
  // app gets session

  return (
    <SessionContext.Provider value={{ session, setSession }}>
      {children}
    </SessionContext.Provider>
  )
}

export { SessionContext, SessionProvider }
