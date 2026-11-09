import { useState, useEffect, useRef } from 'react'
import useFootage from '../../../hooks/useFootage'
import useCaptions from '../../../hooks/useCaptions'
import { concatenateVideos } from '../../../utilities/videoEditor'
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner'
import styles from './Video.module.css'

function Video({ videoRef }) {
  const { footage } = useFootage()
  const { captions } = useCaptions()
  const [source, setSource] = useState('')
  const [activeCaption, setActiveCaption] = useState({})
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(false)

const onTimeUpdate = event => {
  const { currentTime } = event.currentTarget
  const matchingCaption = captions.find(caption => {
    return (currentTime >= Number(caption.start) && currentTime <= Number(caption.end))
  })
  setActiveCaption(prev => {
    if (matchingCaption?.id === prev?.id) {
      return prev
    }
    return matchingCaption ?? {}
  })
}
  
  useEffect(() => {
    let mounted = true
    let activeUrl = ''
  
    const init = async () => {
      try {
        setLoading(true)
        const blob = await concatenateVideos(footage)
        // Short-circuit instantly if the user navigated away while compiling
        if (!mounted) {
          return 
        }
        activeUrl = URL.createObjectURL(blob)
        setSource(activeUrl)
      } catch (error) {
        alert('Video export failed.')
        throw error
      } finally {
        setLoading(false)
      }
    }
    init()
    return () => {
      mounted = false
      if (activeUrl) {
        URL.revokeObjectURL(activeUrl)
      }
    }
  }, [footage])

  useEffect(() => {
    const video = videoRef.current
    if (!video) {
      return
    }
    video.addEventListener('timeupdate', onTimeUpdate)
    return () => {
      video.removeEventListener('timeupdate', onTimeUpdate)
    }
  }, [videoRef, onTimeUpdate])
  
  return (
    <figure className={styles.Video}>
      <video id="video-editor" ref={videoRef} src={source} autoPlay playsInline 
        onLoadedMetadata={() => console.log('Video metadata loaded')}
        onCanPlay={() => console.log('Video can play')}
        onError={e => console.error('Video error:', e.currentTarget.error)}
      />
      {activeCaption?.text && <figcaption style={activeCaption.style}>{activeCaption.text}</figcaption>}
      {loading && <LoadingSpinner />}
    </figure>
  )
}

export default Video
