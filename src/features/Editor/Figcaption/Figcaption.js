import { useState, useEffect, Fragment } from 'react'
import styles from './Figcaption.module.css'

function Figcaption({ videoRef, activeCaption }) {
  const { captions } = useCaptions()
  const [currentCaption, setCurrentCaption] = useState({})

  const renderSegments = () => {
    
    console.log('rendering segments...')
    
    const { text, segments, style } = activeCaption
    let position = 0
  
    const html = segments.map((segment, index) => {
      const start = position
      if (position < segment.start) {
        return <span>text.slice(position, segment.start)</span>
      }
      position = segment.end                     
      return (
        <span key={`segment-${index}`} style={index === 0 ? undefined : segment.style}>
          {text.slice(start, segment.end)}
        </span>
      )
    })
    const last = (
      <span key="remaining">
        {text.slice(position)}
      </span>
    )
    const result = [...html, last]
  
    console.log('concatted segments: ', result)
  
    return result
  }

  const onTimeUpdate = event => {
    const { currentTime } = event.currentTarget
    const matchingCaption = captions.find(caption => {
      return (currentTime >= Number(caption.start) && currentTime <= Number(caption.end))
    })
    setCurrentCaption(prev => {
      if (matchingCaption?.id === prev?.id) {
        return prev
      }
      return matchingCaption ?? {}
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
    <Fragment>
      {activeCaption?.text && 
        <figcaption className={styles.figcaption} style={activeCaption.style}>
          {activeCaption.segments.length ? renderSegments() : activeCaption.text}
        </figcaption>
      }
      {currentCaption?.text && 
        <figcaption className={styles.figcaption} style={currentCaption.style}>
          {currentCaption.text}
        </figcaption>
      }
    </Fragment>
  )
}

export default Figcaption
