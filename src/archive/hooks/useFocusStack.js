import { useContext } from 'react'
import { FocusStackContext } from '../components/Providers/FocusStackProvider'

function useFocusStack() {
  const { push, pop } = useContext(FocusStackContext)

  return { push, pop }
}

export default useFocusStack
