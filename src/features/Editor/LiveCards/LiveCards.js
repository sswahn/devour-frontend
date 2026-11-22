import { useState, useEffect, Fragment } from 'react'
import useCards from '../../../hooks/useCards'
import styles from './LiveCards.module.css'

function LiveCards({ videoRef, activeCard }) {
  const { cards } = useCards()
  const [currentCard, setCurrentCard] = useState({})

  const onTimeUpdate = event => {
    const { currentTime } = event.currentTarget
    const matchingCard = cards.find(card => {
      return (currentTime >= Number(card.start) && currentTime <= Number(card.end))
    })
    setCurrentCard(prev => {
      if (matchingCard?.id === prev?.id) {
        return prev
      }
      return matchingCard ?? {}
    })
  }

  useEffect(() => {
    const video = videoRef?.current
    if (!video) {
      return
    }
    video.addEventListener('timeupdate', onTimeUpdate)
    return () => {
      video.removeEventListener('timeupdate', onTimeUpdate)
    }
  }, [])

  return (
    <Fragment>
      {activeCard?.start &&
        <div className={styles.liveCards} style={activeCard.background?.style}>
          {activeCard.text && <p style={activeCard.text?.style}>{activeCard.text?.value}</p>}
          {activeCard.upload && <img src={activeCard.upload?.url} alt={activeCard.upload?.alt} style={activeCard.upload?.style} />}
        </div>
      }
      {currentCard?.start &&
        <div className={styles.liveCards} style={currentCard.background?.style}>
          {currentCard.text && <p style={currentCard.text?.style}>{currentCard.text?.value}</p>}
          {currentCard.upload && <img src={currentCard.upload?.url} alt={currentCard.upload?.alt} style={currentCard.upload?.style} />}
        </div>
      }
    </Fragment>
  )
}

export default LiveCards
