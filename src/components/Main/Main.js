import { useEffect, Suspense, lazy } from 'react'
import useOverlay from '../../hooks/useOverlay'
import Suggestions from '../Suggestions/Suggestions'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
const Feed = lazy(() => import('../../features/Feed/Feed'))
import styles from './Main.module.css'

function Main() {
  const { isActive } = useOverlay()

  // move to a hook, then use hook in Interface
  const lockScroll = () => {
    const { scrollY } = window
    const html = document.documentElement
    html.classList.add('lockScroll')
    return () => {
     // html.classList.remove('lockScroll')
      html.removeAttribute('class')
      
      window.scrollTo(0, scrollY)
    }
  }
  
  useEffect(() => {
    if (!isActive) {
      return
    }
    const unlockScroll = lockScroll()
    return () => {
      unlockScroll()
    }
  }, [isActive])
  
  return (
    <main className={styles.main} 
      //inert={!!isActive} 
      aria-description="When text is highlighted, it will automatically be read aloud.">
    
      {/* <Suggestions /> etc. */}

      <Suspense fallback={<LoadingSpinner />}>
        <Feed />
      </Suspense>
    </main>
  )
}

export default Main
