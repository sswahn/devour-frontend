import { Suspense, lazy } from 'react'
import useOverlay from '../../hooks/useOverlay'
import Suggestions from '../Suggestions/Suggestions'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
const Feed = lazy(() => import('../../features/Feed/Feed'))
import styles from './Main.module.css'

function Main() {
  const { isActive } = useOverlay()
  
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
