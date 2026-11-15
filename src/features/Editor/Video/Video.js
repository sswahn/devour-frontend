import { useState, useEffect, useRef } from 'react'
import useComposition from '../../../hooks/useComposition'
import useFootage from '../../../hooks/useFootage'
import useCaptions from '../../../hooks/useCaptions'
import { concatenateVideos } from '../../../utilities/videoEditor'
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner'
import styles from './Video.module.css'

function Video({ videoRef, activeCaption }) {
  const { composition, setComposition } = useComposition()
  const { footage } = useFootage()
  const { captions } = useCaptions()
  const [source, setSource] = useState(null)
  const [currentCaption, setCurrentCaption] = useState({})
  const [loading, setLoading] = useState(false)

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

  const getBlob = async () => {
    const ids = footage.map(item => item.id)
    const match = composition.contents?.join() === ids.join()
    if (match) {
      return { blob: composition.blob, cached: true }
    }
    const blob = footage.length === 1
      ? footage[0].clip
      : await concatenateVideos(footage)
    return { blob, cached: false }
  }
  
  useEffect(() => {
    let isMounted = true
    let activeUrl = ''
  
    const init = async () => {
      try {
        setLoading(true)
        const { blob, cached } = await getBlob()
        if (!cached) {
          setComposition({ blob, contents: footage.map(item => item.id) })
        }
        if (!isMounted) {
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
      isMounted = false
      if (activeUrl) {
        URL.revokeObjectURL(activeUrl)
      }
    }
  }, [footage])

  // currentCaption figcation should be clicable to open edit/delete form
  
  return (
    <figure className={styles.video}>
      <video id="video-editor" ref={videoRef} src={source} onTimeUpdate={onTimeUpdate} autoPlay playsInline 
        onLoadedMetadata={() => console.log('Video metadata loaded')}
        onCanPlay={() => console.log('Video can play')}
        onError={e => console.error('Video error:', e.currentTarget.error)}
      />
      {activeCaption?.text && <figcaption style={activeCaption.style}>{activeCaption.text}</figcaption>}
      {currentCaption?.text && <figcaption style={currentCaption.style}>{currentCaption.text}</figcaption>}
      {loading && <LoadingSpinner />}
    </figure>
  )
}

export default Video
