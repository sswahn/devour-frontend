import { useState, createContext, useMemo } from 'react'

const SessionContext = createContext(null)

function SessionProvider({ children }) {
  const [session, setSession] = useState({
    username: 'testUser',
    picture: '',
    isAuthenticated: true// false
  })
  
  return (
    <SessionContext.Provider value={{ session, setSession }}>
      {children}
    </SessionContext.Provider>
  )
}

export { SessionContext, SessionProvider }
