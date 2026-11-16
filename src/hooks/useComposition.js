import { useContext } from 'react'
import { CompositionContext } from '../components/Providers/CompositionProvider'

function useComposition() {
  const { composition, setComposition } = useContext(CompositionContext)

  return { composition, setComposition }
}

export default useComposition
