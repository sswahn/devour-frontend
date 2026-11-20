import { useState, useEffect, Fragment } from 'react'
import useCaptions from '../../../hooks/useCaptions'
import styles from './Figcaption.module.css'

function Figcaption({ videoRef, activeCaption }) {
  const { captions } = useCaptions()
  const [currentCaption, setCurrentCaption] = useState({})

const renderSegments = () => {
  const { text = '', segments = [] } = activeCaption || {}
  const elements = []
  let position = 0

  // Ensure segments are processed in order
  const sortedSegments = [...segments].sort((a, b) => a.start - b.start)

  sortedSegments.forEach((segment, index) => {
    // 1. Render unstyled text before the segment, if any
    if (position < segment.start) {
      elements.push(
        <span key={`gap-${index}`}>
          {text.slice(position, segment.start)}
        </span>
      )
    }

    // 2. Render the styled segment itself
    elements.push(
      <span key={`segment-${index}`} style={segment.style}>
        {text.slice(segment.start, segment.end)}
      </span>
    )

    // 3. Advance the pointer
    position = Math.max(position, segment.end)
  })

  // 4. Render any remaining text only if characters are left
  if (position < text.length) {
    elements.push(
      <span key="remaining">
        {text.slice(position)}
      </span>
    )
  }

  return elements
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
    const video = videoRef?.current
    if (!video) {
      return
    }
    video.addEventListener('timeupdate', onTimeUpdate)
    return () => {
      video.removeEventListener('timeupdate', onTimeUpdate)
    }
  }, [])

  // currentCaption figcation should be clicable to open edit/delete form

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
