import { useEffect } from 'react'
import styles from './RecordTimer.module.css'

function RecordTimer({ mode, timer, setTimer, stopCamera }) {

  const createInterval = () => {
    if (mode === 'on') {
      return setInterval(() => {
        if (timer < 1) {
          clearInterval(interval)
          return stopCamera()
        }
        setTimer(timer - 1)
      }, 1000)
    }
  }

  useEffect(() => {
    let interval = createInterval()
    return () => {
      clearInterval(interval)
    }
  }, [timer, mode])

  return (
    <div className={styles.recordTimer}>
      {`${Math.floor(timer / 60)}:${String(timer % 60).padStart(2, '0')}`}
    </div>
  )
}

export default RecordTimer
