import { useContext } from 'react'
import OverlayContext from '../components/Providers/OverlayContext'

function useOverlay() {
  const { isActive, openOverlay, closeOverlay } = useContext(OverlayContext)

  return { isActive, openOverlay, closeOverlay }
}
