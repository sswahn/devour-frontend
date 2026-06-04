import { useState, useEffect } from 'react'
import useFootage from '../../hooks/useFootage'
import styles from './VideoEditor.module.css'

function VideoEditor() {
  const { footage, duration } = useFootage()
  const [source, setSource] = useState('')

  const combineFootage = () => {
    const combinedBlob = new Blob(footage, { type: 'video/webm' })
    const videoUrl = URL.createObjectURL(combinedBlob)
    setSource(videoUrl)
  }

  useEffect(() => {
    if (!source) {
      combineFootage()
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
