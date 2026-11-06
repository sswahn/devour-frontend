import { useState, useEffect } from 'react'
import styles from 'Video.module.css'

function Video({ videoRef, source, captions }) {
  const [activeCaption, setActiveCaption] = useState('')

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
  }, [videoRef, captions])
  
  return (
    <figure className={styles.Video}>
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
