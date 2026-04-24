import { useContext, useEffect } from 'react'
import { Context } from '../../../archive/Provider'
import database from '@sswahn/database'
import styles from './recordtimer.module.css'

function RecordTimer({ timer, setTimer }) {
 const [context, provider] = useContext(Context)

  const createInterval = () => {
    if (context.recording) {
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
  }, [timer, context.recording])

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
