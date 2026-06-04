import { useState, useRef, useEffect } from 'react'
import useFootage from '../../hooks/useFootage'
import styles from './Editor.module.css'

function Editor() {
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
    alert('Loading Editor.')
    combineFootage()
    return () => {
      URL.revokeObjectURL(url.current)
    }
  }, [])
  
  return (
    <section className={styles.editor}>

      <video src={source} loop playsinline />
    
    </section>
  )
}

export default Editor
