import { useEffect, Suspense, lazy } from 'react'
import useSelectionToSpeech from '../../hooks/useSelectionToSpeech'
import Header from '../Header/Header'
import Main from '../Main/Main'
import MobileNav from '../MobileNav/MobileNav'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
const Overlays = lazy(() => import('../Overlays/Overlays'))

function Interface() {
  useSelectionToSpeech()
  // useContextMenu()
  
  // move this into a hook:
  const onContextMenu = event => {
    const { clientX, clientY, target } = event
    console.log('contextmenu event fired.')
    
    // leave preventDefualt commented-out while developing:
    // event.preventDefault()

    // To get the render location
    // Check if triggered by keyboard (coordinates will be 0 or -1)
    /* Example: 
      let x = clientX
      let y = clientY
      if (x <= 0 && y <= 0) { // means keyboard initiated
        const rect = target.getBoundingClientRect()
        x = rect.left
        y = rect.bottom
      }
      renderMenu(x, y)
    */
  }

  useEffect(() => {
    document.addEventListener('contextmenu', onContextMenu)
    return () => {
      document.removeEventListener('contextmenu', onContextMenu)
    }
  }, [])
  
  return (
    <>
      <Header />
      <Main />
      <MobileNav />
      <Suspense fallback={<LoadingSpinner />}>
        <Overlays />
      </Suspense>
    </>
  )
}

export default Interface
