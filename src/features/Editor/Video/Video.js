import { useState, useEffect } from 'react'

function Video({ videoRef, captions }) {
  const [activeCaption, setActiveCaption] = useState('')
  const [source, setSource] = useState([])

  const onTimeUpdate = () => {
    const { currentTime } = videoRef.current

    const matchingCaption = captions.find(item => {
      return currentTime >= Number(item.start) && currentTime <= Number(item.end)
    })

    if (matchingCaption) {
      setActiveCaption(matchingCaption.caption)
    } else {
      setActiveCaption('')
    }
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
