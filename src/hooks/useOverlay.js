import { useContext } from 'react'
import { OverlayContext } from '../components/Providers/OverlayProvider'

function useOverlay() {
  const { isActive, openOverlay, closeOverlay } = useContext(OverlayContext)

  return { isActive, openOverlay, closeOverlay }
}

export default useOverlay
