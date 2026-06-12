import { useState, useEffect, Suspense, lazy } from 'react'
import database from '../../utilities/database' // temp to test frontend
import SlideShow from '../SlideShow/SlideShow'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
const Feed = lazy(() => import('../../features/Feed/Feed'))
import styles from './Main.module.css'

function Main() {
  const [data, setData] = useState([
    { picture: '', username: 'test_user1', video: 1, caption: 'test caption 1' },
    { picture: '', username: 'test_user2',  video: 2, caption: 'testing captions with multiple lines. It should expand upward instead of downward.' },
    { picture: '', username: 'test_user3', video: 3, caption: 'test captions 3' }
  ])
  const [suggestions, setSuggestions] = useState([
    { picture: '', username: 'test_user1', video: 1, caption: 'test caption 1' },
    { picture: '', username: 'test_user2',  video: 2, caption: 'testing captions with multiple lines. It should expand upward instead of downward.' },
    { picture: '', username: 'test_user3', video: 3, caption: 'test captions 3' }
  ])

  // consider not using figcaption, but embeding into video.caption
  // HTMLMediaElement.addTextTrack() for timed display of captions.

  const loadFromStorage = async () => { // this is temp for testing, feed will load from server not storage
    const db = database()
    const storage = await db.get('footage')
    if (storage) {
      setData([ ...data, storage.footage ])
    }
  }

  useEffect(() => {
    if (!data.length) {
    //  loadFromStorage()
    }
  }, [])
  
  return (
    <main className={styles.main} aria-description="When text is highlighted, it will automatically be read aloud.">
    
      <SlideShow data={suggestions} />

      <Suspense fallback={<LoadingSpinner />}>
        <Feed data={data} setData={setData} />
      </Suspense>
    </main>
  )
}

export default Main
