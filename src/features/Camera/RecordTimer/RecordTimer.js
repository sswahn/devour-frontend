import { useEffect } from 'react'
import database from '../../../utilities/database'
import styles from './recordtimer.module.css'

function RecordTimer({ mode, timer, setTimer }) {

  const createInterval = () => {
    if (mode === 'on') {
      return setInterval(() => {
        if (timer < 1) {
          clearInterval(interval)
          return handleStopRecordVideo() // fix: this function is not available here, maybe dispatch recording false or modal message
        }
        setTimer(timer - 1)
      }, 1000)
    }
  }

  const loadFromStorage = async () => {
    const db = database()
    const video = await db.get('video')
    const totalDuration = video?.duration.reduce((acc, val) => acc + val, 0)
    if (totalDuration) {
      setTimer(300 - totalDuration)
    }
  }

  useEffect(() => {
    let interval = createInterval()
    return () => {
      clearInterval(interval)
    }
  }, [timer, mode])

  useEffect(() => {
    loadFromStorage()
  }, [])

  return (
    <div className={styles.recordTimer}>
      {`${Math.floor(timer / 60)}:${String(timer % 60).padStart(2, "0")}`}
    </div>
  )
}

export default RecordTimer
