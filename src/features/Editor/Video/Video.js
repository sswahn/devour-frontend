import { useState, useEffect } from 'react'
import useCaptions from '../../../hooks/useCaptions'
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner'
import styles from './Video.module.css'

function Video({ videoRef }) {
  const { captions } = useCaptions()
  const [source, setSource] = useState('')
  const [activeCaption, setActiveCaption] = useState({})
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(false)

  const onTimeUpdate = () => {
    const { currentTime } = videoRef.current
    const matchingCaption = captions.find(caption => {
      return currentTime >= Number(caption.start) && currentTime <= Number(caption.end)
    })
    if (matchingCaption && matchingCaption?.id !== activeCaption?.id) {
      return setActiveCaption(matchingCaption)
    } 
    if (Object.keys(activeCaption).length !== 0) {
      return setActiveCaption({})
    }
  }

  const onLoad = async event => {
    try {
      //setProgress(0)
      setLoading(true)
      // consider saving this blob in a provider / indexeddb, as it will be the final edited video
      const blob = await concatenateVideos(footage, setProgress) 
      const url = URL.createObjectURL(blob)
      setSource(url)
      return url
    } catch (error) {
      alert('Video export failed.')
      throw error
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // 1. For single render, avoiding memory leak, use local variable:
    let activeUrl = ''
  
    const handleMediaLoad = async () => {
      try {
        activeUrl = await onLoad() 
      } catch (error) {
        console.error('Error concatenating video clips.')
        throw error
      }
    }
  
    handleMediaLoad()
  
    return () => {
      if (activeUrl) {
        URL.revokeObjectURL(activeUrl)
      }
    }
  }, [])

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
  
  return loading ? <LoadingSpinner /> : (
    <figure className={styles.Video}>
      <video id="video-editor" ref={videoRef} src={source} autoPlay playsInline 
        onLoadedMetadata={() => console.log('Video metadata loaded')}
        onCanPlay={() => console.log('Video can play')}
        onError={e => console.log('Video error:', e.currentTarget.error)}
      />
      {activeCaption?.text && <figcaption style={activeCaption.style}>{activeCaption.text}</figcaption>}
    </figure>
  )
}

export default Video
