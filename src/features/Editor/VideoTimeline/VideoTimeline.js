import { useState, useEffect, useRef } from 'react'
import styles from './VideoTimeline.module.css'

// consider moving to components
function VideoTimeline({ videoRef }) {
  const [progress, setProgress] = useState(0)
  const videoTimelineRef = useRef(null)

  const onClick = event => {
    navigator.vibrate?.(50)
    const rect = event.currentTarget.getBoundingClientRect()
    const clickX = event.clientX - rect.left // Click position inside the bar
    videoRef.current.currentTime = (clickX / rect.width) * videoRef.current.duration // Calculate new video time and apply it
  }

  const onTimeUpdate = event => {
    const { currentTime, duration} = videoRef.current
    setProgress((currentTime / duration) * 100)
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video || !Number.isFinite(video.duration) || video.duration <= 0) {
      return
    }
    video.addEventListener('timeupdate', onTimeUpdate)
    return () => {
      video.removeEventListener('timeupdate', onTimeUpdate)
    }
  }, [videoRef, onTimeUpdate])
  
  return (
    <div className={styles.videoTimeline} onClick={onClick}>
      <div style={{ width: `${progress}%` }}></div>
    </div>
  )
}

export default VideoTimeline
