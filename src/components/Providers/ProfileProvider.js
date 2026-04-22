import { useState, useMemo, useCallback, createContext } from 'react'

const GetProfileContext = createContext(null)
const SetProfileContext = createContext(null)

function ProfileProvider({ children }) {
  const [username, setUsername] = useState(false)

  return (
    <GetProfileContext.Provider value={username}>
      <SetProfileContext.Provider value={setUsername}>
        {children}
      </SetProfileContext.Provider>
    </GetProfileContext.Provider>
  )
}

export { GetProfileContext, SetProfileContext, ProfileProvider }
