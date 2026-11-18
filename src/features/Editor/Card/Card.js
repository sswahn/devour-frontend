import { useEffect } from 'react'
import useCards from '../../../hooks/useCards'
import styles from './Card.module.css'

function Card({ videoRef, activeCard }) {
  const { cards } = useCards()

  const onTimeUpdate = event => {
    const { currentTime } = event.currentTarget
    const matchingCard = cards.find(card => {
      return (currentTime >= Number(card.start) && currentTime <= Number(card.end))
    })
    setCurrentCaption(prev => {
      if (matchingCard?.id === prev?.id) {
        return prev
      }
      return matchingCard ?? {}
    })
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
