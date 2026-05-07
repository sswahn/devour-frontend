import { useEffect, Suspense, lazy } from 'react'
import useOverlay from '../../hooks/useOverlay'
import Suggestions from '../Suggestions/Suggestions'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
const Feed = lazy(() => import('../../features/Feed/Feed'))
import styles from './Main.module.css'

function Main() {
  const { isActive } = useOverlay()

  // make hook useScrollLock()
  const lockScroll = () => {
    const { scrollY } = window
    const body = document.body
    //element.style.position = 'fixed'
    //element.style.top = `-${scrollY}px`
   // element.style.width = '100%'
    Object.assign(body.style, {
      position: 'fixed',
      top: `-${scrollY}px`,
      left: '0',
      right: '0'
    })
    return () => {
      //element.style.position = ''
      //element.style.top = ''
     // element.style.width = ''
      Object.assign(body.style, {
        position: '',
        top: '',
        left: '',
        right: ''
      })
      window.scrollTo(0, scrollY)
    }
  }
  
  useEffect(() => {
    if (!isActive) {
      return
    }
    const reset = lockScroll()
    return () => {
      reset()
    }
  }, [isActive])
  
  return (
    <main className={styles.main} inert={!!isActive} aria-description="When text is highlighted, it will automatically be read aloud.">
    
      {/* <Suggestions /> etc. */}

      <Suspense fallback={<LoadingSpinner />}>
        <Feed />
      </Suspense>
    </main>
  )
}

export default Main
