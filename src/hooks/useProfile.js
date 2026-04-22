import { useContext } from 'react'
import { GetProfileContext, SetProfileContext } from '../components/Providers/ProfileProvider'

function useProfile() {
  const username = useContext(GetProfileContext)
  const setUsername = useContext(SetProfileContext)
  
  return { username, setUsername }
}

export default useProfile
