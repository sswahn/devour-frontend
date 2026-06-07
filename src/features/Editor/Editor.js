import { useState, useRef, useEffect } from 'react'
import useFootage from '../../hooks/useFootage'
import TopNav from './TopNav/TopNav'
import MenuButton from './MenuButton/MenuButton'
import ProgressBar from './ProgressBar/ProgressBar'
import styles from './Editor.module.css'

function Editor({ setEditorIsOpen }) {
  const { footage } = useFootage()
  const [source, setSource] = useState('')
  const videoRef = useRef(null)

  useEffect(() => {
    if (source) {
      return
    }
    const videoUrl = URL.createObjectURL(footage)
    setSource(videoUrl)
    return () => {
      URL.revokeObjectURL(videoUrl)
    }
  }, [])

  return (
    <section className={styles.editor}>
      <TopNav videoRef={videoRef} setEditorIsOpen={setEditorIsOpen} />
      <MenuButton />
      <ProgressBar videoRef={videoRef} />
      <video id="video-editor" ref={videoRef} src={source} loop playsinline />
    </section>
  )
}

export default Editor
