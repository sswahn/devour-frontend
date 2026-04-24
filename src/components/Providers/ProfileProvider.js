import { useState, useCallback, createContext } from 'react'

const ProfileContext = createContext(null)

function ProfileProvider({ children }) {
  const [userProfile, setUserProfile] = useState('')
  
  return (
    <ProfileContext.Provider value={{ userProfile, setUserProfile }}>
      {children}
    </ProfileContext.Provider>
  )
}

export { ProfileContext, ProfileProvider }
