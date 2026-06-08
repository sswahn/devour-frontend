import { useContext } from 'react'
import { FocusStackContext } from '../archive/Providers/FocusStackProvider'

function useFocusStack() {
  const { push, pop } = useContext(FocusStackContext)

  return { push, pop }
}

export default useFocusStack
