import { useState, useEffect, Fragment } from 'react'
import useCaptions from '../../../hooks/useCaptions'
import styles from './LiveCaptions.module.css'

function LiveCaptions({ videoRef, activeCaption }) {
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

  return (
    <Fragment>
      {currentCaption?.text && 
        <figcaption className={styles.liveCaptions} style={currentCaption.style}>
          {currentCaption.text}
        </figcaption>
      }
    </Fragment>
  )
}

export default LiveCaptions
