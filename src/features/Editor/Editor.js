import { useState, useRef, useEffect } from 'react'
import useFootage from '../../hooks/useFootage'
import TopNav from './TopNav/TopNav'
import MenuButton from './MenuButton/MenuButton'
import ProgressBar from './ProgressBar/ProgressBar'
import styles from './Editor.module.css'

function Editor({ setEditorIsOpen }) {
  const { footage } = useFootage()
  const [source, setSource] = useState('')
  const url = useRef(null)
  const videoRef = useRef(null)

  const combineFootage = () => {
    const videoUrl = URL.createObjectURL(footage)
    url.current = videoUrl
    setSource(videoUrl)
  }

  useEffect(() => {
    combineFootage()
    return () => {
      URL.revokeObjectURL(url.current)
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
