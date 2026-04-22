import { useState, createContext } from 'react'

const GetSessionContext = createContext()
const SetSessionContext = createContext()

function SessionProvider({ children }) {
  const [session, setSession] = useState({
    username: 'testUser',
    isAuthenticated: true// false
  })
  
  // login sets session (setSession)
  // app gets session

  return (
    <GetSessionContext.Provider value={session}>
      <SetSessionContext.Provider value={setSession}>
        {children}
    </SetSessionContext.Provider>
    </GetSessionContext.Provider>
  )
}

export { GetSessionContext, SetSessionContext, SessionProvider }
