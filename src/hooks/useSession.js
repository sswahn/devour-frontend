import { useContext } from 'react'
import { GetSessionContext, SetSessionContext } from '../components/Providers/SessionProvider'

function useSession() {
  const session = useContext(GetSessionContext)
  const setSession = useContext(SetSessionContext)
  
  // Note: Even if you return an object here, 
  // the component calling this hook only re-renders
  // if the SPECIFIC context it "touches" changes.
  return { session, setSession }
}

export default useSession
