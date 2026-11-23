import { useState, useEffect, Fragment } from 'react'
import useCaptions from '../../../hooks/useCaptions'
import styles from './LiveCaptions.module.css'

function LiveCaptions({ videoRef }) {
  const { captions } = useCaptions()
  const [currentCaption, setCurrentCaption] = useState({})

  const onTimeUpdate = event => {
    const { currentTime } = event.currentTarget
    const matchingCaption = captions.find(caption => {
      return (currentTime >= caption.start && currentTime <= caption.end)
    })
    setCurrentCaption(prev => {
      if (matchingCaption?.id === prev?.id) {
        return prev
      }
      return matchingCaption ?? {}
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
  }, [onTimeUpdate])

  return currentCaption?.render && (
    <figcaption className={styles.liveCaptions} style={currentCaption.style}>
      {currentCaption.render}
    </figcaption>
  )
}

export default LiveCaptions
