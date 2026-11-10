import { useState, useEffect, useRef } from 'react'
import useFootage from '../../../hooks/useFootage'
import useComposition from '../../../hooks/useComposition'
import useCaptions from '../../../hooks/useCaptions'
import { concatenateVideos } from '../../../utilities/videoEditor'
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner'
import styles from './Video.module.css'

function Video({ videoRef }) {
  const { composition, setComposition } = useComposition()
  const { footage } = useFootage()
  const { captions } = useCaptions()
  const
  const [source, setSource] = useState(null)
  const [activeCaption, setActiveCaption] = useState({})
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

  const getBlob = async () => {
    const ids = footage.map(item => item.id)
    const match = composition.contents?.join() === ids.join()
    if (match) {
      return composition.blob
    }
    return footage.length === 1
      ? footage[0].clip
      : await concatenateVideos(footage)
  }
  
  useEffect(() => {
    let mounted = true
    let activeUrl = ''
  
    const init = async () => {
      try {
        setLoading(true)
        let blob = await getBlob()
        setComposition({ blob, contents: footage.map(item => item.id) })
        if (!mounted) {
          return 
        }
        activeUrl = URL.createObjectURL(blob)
        setSource(activeUrl)
      } catch (error) {
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
