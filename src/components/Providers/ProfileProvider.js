import { useState, useCallback, createContext } from 'react'

const ProfileContext = createContext(null)

function ProfileProvider({ children }) {
  const [profileUsername, setProfileUsername] = useState(false)
  const [profileIsOpen, setProfileIsOpen] = useState(false)

  const openProfile = useCallback(username => {
    setProfileUsername(username)
    setProfileIsOpen(true)
  }, [username])
  
  const closeProfile = useCallback(() => {
    setProfileIsOpen(false)
  }, [])
  
  return (
    <ProfileContext.Provider value={{ profileUsername, profileIsOpen, openProfile, closeProfile }}>
      {children}
    </ProfileContext.Provider>
  )
}

export { ProfileContext, ProfileProvider }
