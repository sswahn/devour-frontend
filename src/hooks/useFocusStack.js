import { useContext } from 'react'
import { FocusStackContext } from '../components/Providers'

function useFocusStack() {
  const { push, pop } = useContext(FocusStackContext)

  return { push, pop }
}

export default useFocusStack
