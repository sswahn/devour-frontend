import { useState, useEffect } from 'react'
import useFootage from '../../../hooks/useFootage'
import styles from './RecordTimer.module.css'

const MAX_DURATION = 60

const formatTime = seconds => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}:${String(remainingSeconds).padStart(2, '0')}`
}

function RecordTimer({ mode, setIsExpired }) {
  const { footage } = useFootage()
  const [timer, setTimer] = useState(MAX_DURATION)

  useEffect(() => {
    if (mode === 'on') {
      return
    }
    const totalDuration = footage.reduce((total, clip) => total + clip.duration, 0)
    const timeRemaining = Math.max(0, Math.ceil(MAX_DURATION - totalDuration))
    setTimer(timeRemaining)
    setIsExpired(timeRemaining === 0)
  }, [footage, mode])

  useEffect(() => {
    if (mode !== 'on') {
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

  return (
    <div className={styles.recordTimer}>
      {formatTime(timer)}
    </div>
  )
}

export default RecordTimer
