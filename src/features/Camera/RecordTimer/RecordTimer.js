import { useState, useEffect } from 'react'
import useFootage from '../../../hooks/useFootage'
import styles from './RecordTimer.module.css'

function RecordTimer({ mode, setIsExpired }) {
  const { footage } = useFootage()
  const [timer, setTimer] = useState(60)
  
  const createInterval = () => {
    if (mode === 'on') {
      return setInterval(() => {
        if (timer < 1) {
          clearInterval(interval)
          return setIsExpired(true)
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

  useEffect(() => {
    if (!footage.length) {
      return
    }
    const totalDuration = footage.reduce(
      (acc, val) => acc + val.duration, 0
    )
    setTimer(Math.ceil(60 - totalDuration))
  }, [footage])

  return (
    <div className={styles.recordTimer}>
      {`${Math.floor(timer / 60)}:${String(timer % 60).padStart(2, '0')}`}
    </div>
  )
}

export default RecordTimer
