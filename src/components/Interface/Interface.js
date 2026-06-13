import {useState, useEffect, Suspense, lazy } from 'react'
import useFullscreen from '../../hooks/useFullscreen'
import useScrollLock from '../../hooks/useScrollLock'
import useOverlay from '../../hooks/useOverlay'
import useSelectionToSpeech from '../../hooks/useSelectionToSpeech'
import useContextMenu from '../../hooks/useContextMenu'
import Header from '../Header/Header'
import Main from '../Main/Main'
import MobileNav from '../MobileNav/MobileNav'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
const Overlays = lazy(() => import('../Overlays/Overlays'))

function Interface() {
  const [isMobile, setIsMobile] = useState(false)
  const { isActive } = useOverlay()
  const { isFullscreen } = useFullscreen()
  useScrollLock(isActive)
  useSelectionToSpeech()
  useContextMenu()

  const detectMobile = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera
    // Regex to detect common mobile devices
    const mobileRegex = /android|blackberry|iphone|ipad|ipod|opera mini|iemobile|wpdesktop/i
    setIsMobile(mobileRegex.test(userAgent))
  }

  useEffect(() => {
    detectMobile()
  }, [])
  
  return (
    <>
      <div id="app-shell" inert={!!isActive}>
        {!isFullscreen && <Header />}
        <Main />
        {/*isMobile && <MobileNav /> */}
        <MobileNav /> 
      </div>
      <Suspense fallback={<LoadingSpinner />}>
        <Overlays />
      </Suspense>
    </>
  )
}

export default Interface
