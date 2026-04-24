import { useState, useCallback, createContext } from 'react'

const ProfileContext = createContext(null)

function ProfileProvider({ children }) {
  const [profileUser, setProfileUser] = useState('')
  
  return (
    <ProfileContext.Provider value={{ profileUser, setProfileUser }}>
      {children}
    </ProfileContext.Provider>
  )
}

export { ProfileContext, ProfileProvider }
