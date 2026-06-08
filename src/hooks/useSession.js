import { useContext } from 'react'
import { SessionContext } from '../components/Providers/SessionProvider'

function useSession() {
  const { session, setSession } = useContext(SessionContext)
 
  return { session, setSession }
}

export default useSession
