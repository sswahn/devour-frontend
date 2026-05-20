import { useState,  Suspense, lazy } from 'react'
import Suggestions from '../Suggestions/Suggestions'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
const Feed = lazy(() => import('../../features/Feed/Feed'))
import styles from './Main.module.css'

function Main() {
  const [data, setData] = useState([
    { picture: '', username: 'test_user1', video: 1, caption: 'test 1' },
    { picture: '', username: 'test_user2',  video: 2, caption: 'test 2' },
    { picture: '', username: 'test_user3', video: 3, caption: 'test 3' }
  ])
  
  return (
    <main className={styles.main} aria-description="When text is highlighted, it will automatically be read aloud.">
    
      {/* <Suggestions /> etc. */}

      <Suspense fallback={<LoadingSpinner />}>
        <Feed data={data} setData={setData} />
      </Suspense>
    </main>
  )
}

export default Main
