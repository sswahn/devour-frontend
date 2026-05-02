import { useState, useEffect, Suspense, lazy } from 'react'
import Suggestions from '../Suggestions/Suggestions'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
const Feed = lazy(() => import('../../features/Feed/Feed'))
import styles from './Main.module.css'

function Main() {
  
  return (
    <main className={styles.main} aria-description="When text is highlighted, it will automatically be read aloud.">
    
      {/* <Suggestions /> etc. */}

      <Suspense fallback={<LoadingSpinner />}>
        <Feed />
      </Suspense>
    </main>
  )
}

export default Main
