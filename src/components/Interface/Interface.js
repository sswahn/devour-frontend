import { useEffect, Suspense, lazy } from 'react'
import useSelectionToSpeech from '../../hooks/useSelectionToSpeech'
import Header from '../Header/Header'
import Main from '../Main/Main'
import MobileNav from '../MobileNav/MobileNav'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
const Overlays = lazy(() => import('../Overlays/Overlays'))

function Interface() {
  useSelectionToSpeech()

  const onContextMenu = event => {
    console.log('contextmenu event fired, and prevented.')
    // leave commented while developing:
    // event.preventDefault()
    // render <ContextMenu />
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
