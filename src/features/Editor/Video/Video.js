import { useState, useEffect } from 'react'

function Video({ videoRef }) {
  const [activeCaption, setActiveCaption] = useState(null)

  useEffect(() => {
    const time = videoRef.current.currentTime
    
    if (time >= Number(captions.start) && time <= Number(captionObj.end)) {
      setActiveCaption(captionObj.caption)
    } else {
      setActiveCaption('') // Clear the caption when outside the window
    }
  }, [])
  return (
    
  )
}

export default Video
