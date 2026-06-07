import { useEffect, useRef } from 'react'
import styles from './ProgressBar.module.css'

function ProgressBar({ videoRef }) {
  const progressBarRef = useRef(null)

  const onClick = event => {
    const rect = event.currentTarget.getBoundingClientRect()
    const clickX = event.clientX - rect.left // Click position inside the bar
    videoRef.current.currentTime = (clickX / rect.width) * video.duration // Calculate new video time and apply it
  }

  const onTimeUpdate = event => {
    const percentage = (videoRef.current.currentTime / videoRef.current.duration) * 100
    progressBarRef.current.style.width = `${percentage}%`
  }

  useEffect(() => {
    if (!videoRef.current) {
      return
    }
    videoRef.current.addEventListener('timeupdate', onTimeUpdate)
    return () => {
      videoRef.current?.removeEventListener('timeupdate', onTimeUpdate)
    }
  }, [])
  
  return (
    <div className={styles.progressBar} onClick={onClick}>>
      <div ref={progressBarRef}></div>
    </div>
  )
}

export default ProgressBar
