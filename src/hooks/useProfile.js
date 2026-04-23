import { useContext } from 'react'
import { ProfileContext } from '../components/Providers/ProfileProvider'

function useProfile() {
  const {profileUsername, profileIsOpen, openProfile, closeProfile} = useContext(ProfileContext)
  
  return { profileUsername, profileIsOpen, openProfile, closeProfile}
}

export default useProfile
