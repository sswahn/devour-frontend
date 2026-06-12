import { Suspense, lazy } from 'react'
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
  const { isActive } = useOverlay()
  const { isFullscreen } = useFullscreen()
  useScrollLock(isActive)
  useSelectionToSpeech()
  useContextMenu()
  
  return (
    <>
      <div id="app-shell" inert={!!isActive}>
        {!isFullscreen && <Header />}
        <Main />
        <MobileNav />
      </div>
      <Suspense fallback={<LoadingSpinner />}>
        <Overlays />
      </Suspense>
    </>
  )
}

export default Interface
