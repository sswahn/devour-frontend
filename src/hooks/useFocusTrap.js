import { useContext } from 'react'
import { FocusTrapContext } from '../components/Providers/FocusTrapProvider'

function useFocusTrap() {
  const {overlayRef, focusRef} = useContext(FocusTrapContext)
  
  return {overlayRef, focusRef}
}

export default useFocusTrap
