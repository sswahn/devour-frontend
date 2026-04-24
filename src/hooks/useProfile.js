import { useContext } from 'react'
import { ProfileContext } from '../components/Providers/ProfileProvider'

function useProfile() {
  const { userProfile, setUserProfile } = useContext(ProfileContext)
  
  return { userProfile, setUserProfile }
}

export default useProfile
