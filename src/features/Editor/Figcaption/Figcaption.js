import { useState, useEffect, Fragment } from 'react'

function Figcaption({ videoRef, activeCaption }) {
  const { captions } = useCaptions()
  const [currentCaption, setCurrentCaption] = useState({})

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
        <figcaption style={activeCaption.style}>
          {activeCaption.segments.length ? renderSegments() : activeCaption.text}
        </figcaption>
      }
      {/* break out into figcaptions component */}
      {currentCaption?.text && <figcaption style={currentCaption.style}>{currentCaption.text}</figcaption>}
    </Fragment>
  )
}

export default Figcaption
