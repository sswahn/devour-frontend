import { useEffect, useRef } from 'react'
import styles from './VideoTimeline.module.css'

function VideoTimeline({ videoRef }) {
  const videoTimelineRef = useRef(null)

  const onClick = event => {
    navigator.vibrate?.(50)
    const rect = event.currentTarget.getBoundingClientRect()
    const clickX = event.clientX - rect.left // Click position inside the bar
    videoRef.current.currentTime = (clickX / rect.width) * video.duration // Calculate new video time and apply it
  }

  const onTimeUpdate = event => {
    const percentage = (videoRef.current.currentTime / videoRef.current.duration) * 100
    videoTimelineRef.current.style.width = `${percentage}%`
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
    <div className={styles.videoTimeline} onClick={onClick}>
      <div ref={videoTimelineRef}></div>
    </div>
  )
}

export default VideoTimeline
