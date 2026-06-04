import { useState, useRef, useEffect } from 'react'
import useFootage from '../../hooks/useFootage'
import styles from './VideoEditor.module.css'

function VideoEditor() {
  const { footage, duration } = useFootage()
  const [source, setSource] = useState('')
  const url = useRef(null)

  const combineFootage = () => {
    const combinedBlob = new Blob(footage, { type: 'video/webm' })
    const videoUrl = URL.createObjectURL(combinedBlob)
    url.current = videoUrl
    setSource(videoUrl)
  }

  useEffect(() => {
    if (!source) {
      combineFootage()
    }
    return () => {
      URL.revokeObjectURL(url.current)
    }
  }, [])
  
  return (
    <section className={styles.videoEditor}>
      <div>

        <video src={source} loop playsinline />
    
      </div>
    </section>
  )
}

export default VideoEditor
