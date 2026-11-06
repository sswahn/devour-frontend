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
    <figure>
      <video id="video-editor" ref={videoRef} src={source} autoPlay playsInline 
        onLoadedMetadata={() => console.log('Video metadata loaded')}
        onCanPlay={() => console.log('Video can play')}
        onError={e => console.log('Video error:', e.currentTarget.error)}
      />
      {activeCaption && <figcaption>{activeCaption}</figcaption>}
    </figure>
  )
}

export default Video
