import { useState, useEffect, Fragment } from 'react'
import useComposition from '../../../hooks/useComposition'
import useFootage from '../../../hooks/useFootage'
import { concatenateVideos } from '../../../utilities/videoEditor'
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner'
import styles from './Video.module.css'

function Video({ videoRef, setLoading }) {
  const { composition, setComposition } = useComposition()
  const { footage } = useFootage()
  const [source, setSource] = useState(null)

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

  return (
    <video className={styles.video} ref={videoRef} src={source} autoPlay playsInline 
      onError={e => console.error('Video error:', e.currentTarget.error)}
    />
  )
}

export default Video
