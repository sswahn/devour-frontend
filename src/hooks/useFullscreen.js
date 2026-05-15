import { useContext } from 'react'
import { FullscreenContext } from '../components/Providers/FullscreenProvider'

function useFullscreen() {
  const isFullscreen = useContext(FullscreenContext)

  return isFullscreen
}

export default useFullscreen
