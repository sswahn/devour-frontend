import { useEffect } from 'react'
import styles from './Card.module.css'

function Card({ videoRef, activeCard }) {

  const onTimeUpdate = event => {
    
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) {
      return
    }
    video.addEventListener('timeupdate', onTimeUpdate)
    return () => {
      video.removeEventListener('timeupdate', onTimeUpdate)
    }
  }, [])

  return (
    <div className={styles.card} style={activeCard.background.style}>
      {activeCard.text && <p style={activeCard.text.style}>{activeCard.text.value}</p>}
      {activeCard.upload && <img src={activeCard.upload.url} alt={activeCard.upload.alt} style={activeCard.upload.style} />}
    </div>
  )
}

export default Card
