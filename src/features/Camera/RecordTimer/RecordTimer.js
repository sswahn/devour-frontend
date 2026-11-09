import { useState, useEffect } from 'react'
import useFootage from '../../../hooks/useFootage'
import styles from './RecordTimer.module.css'

const MAX_DURATION = 60

const formatTime = seconds => {
  const minutes = Math.floor(seconds / MAX_DURATION)
  const remainingSeconds = seconds % MAX_DURATION
  return `${minutes}:${String(remainingSeconds).padStart(2, '0')}`
}

function RecordTimer({ mode, setIsExpired }) {
  const { footage } = useFootage()
  const [timer, setTimer] = useState(MAX_DURATION)

  useEffect(() => {
    const totalDuration = footage.reduce(
      (total, clip) => total + clip.duration, 0
    )
    setTimer(Math.max(0, Math.ceil(MAX_DURATION - totalDuration)))
  }, [footage])

  useEffect(() => {
    if (mode === 'off') {
      return
    }
    const interval = setInterval(() => {
      setTimer(previous => Math.max(0, previous - 1))
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [mode])

  useEffect(() => {
    if (mode === 'on' && timer === 0) {
      setIsExpired(true)
    }
  }, [mode, timer, setIsExpired])

  /*
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
  }, [footage]) */

  return (
    <div className={styles.recordTimer}>
      {formatTime(timer)}
    </div>
  )
}

export default RecordTimer
