import { useState, useEffect, Fragment } from 'react'
import useCaptions from '../../../hooks/useCaptions'
import styles from './LiveCaptions.module.css'

function LiveCaptions({ videoRef, activeCaption }) {
  const { captions } = useCaptions()
  const [currentCaption, setCurrentCaption] = useState({})

  const renderSegments = () => {
    const { text, segments } = activeCaption
    const elements = []
    let position = 0
    // Filter out invalid/empty segments and sort by start index
    const sortedSegments = [...segments]
      .filter((seg) => seg.start < seg.end)
      .sort((a, b) => a.start - b.start)
    sortedSegments.forEach((segment) => {
      const start = Math.max(position, segment.start)
      const end = Math.min(text.length, segment.end)
      if (start >= end) {
        return
      }
      // 1. Unstyled text before the segment
      if (position < start) {
        elements.push(
          <span key={`gap-${position}-${start}`}>
            {text.slice(position, start)}
          </span>
        )
      }
      // 2. Styled segment with position-based key
      elements.push(
        <span key={`seg-${start}-${end}`} style={segment.style}>
          {text.slice(start, end)}
        </span>
      )
      position = end
    })
    // 3. Remaining trailing text
    if (position < text.length) {
      elements.push(
        <span key={`rem-${position}-${text.length}`}>
          {text.slice(position)}
        </span>
      )
    }
    return elements
  }

  const onTimeUpdate = event => {
    const { currentTime } = event.currentTarget

    console.log('captions: ', captions)
    
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
      {/*activeCaption?.text && 
        <figcaption className={styles.liveCaptions} style={activeCaption.style}>
          {activeCaption.segments.length ? renderSegments() : activeCaption.text}
        </figcaption>
      */}
      {currentCaption?.text && 
        <figcaption className={styles.liveCaptions} style={currentCaption.style}>
          {currentCaption.text}
        </figcaption>
      }
    </Fragment>
  )
}

export default LiveCaptions
