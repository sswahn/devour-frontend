import { Suspense, lazy } from 'react'
import useSelectionToSpeech from '../../hooks/useSelectionToSpeech'
import useContextMenu from '../../hooks/useContextMenu'
import Header from '../Header/Header'
import Main from '../Main/Main'
import MobileNav from '../MobileNav/MobileNav'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
const Overlays = lazy(() => import('../Overlays/Overlays'))

function Interface() {
  useSelectionToSpeech()
  useContextMenu()
  
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
