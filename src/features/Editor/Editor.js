import { useState, useRef, useEffect } from 'react'
import useFootage from '../../hooks/useFootage'
import TopNav from './TopNav/TopNav'
import MenuButton from './MenuButton/MenuButton'
import ProgressBar from './ProgressBar/ProgressBar'
import Menu from './Menu/Menu'
import styles from './Editor.module.css'

function Editor({ setEditorIsOpen }) {
  const { footage } = useFootage()
  const { menuIsOpen, setMenuIsOpen } = useState(false)
  const [source, setSource] = useState('')
  const videoRef = useRef(null)

  useEffect(() => {
    const blob = footage || new Blob()
    const videoUrl = URL.createObjectURL(blob) // pass footage directly, after testing complete
    setSource(videoUrl)
    return () => {
      URL.revokeObjectURL(videoUrl)
    }
  }, [])

  return (
    <section className={styles.editor}>
      <TopNav videoRef={videoRef} setEditorIsOpen={setEditorIsOpen} />
      <MenuButton setMenuIsOpen={setMenuIsOpen} />
      <ProgressBar videoRef={videoRef} />
      <video id="video-editor" ref={videoRef} src={source} loop playsinline />
      {menuIsOpen && <Menu />}
    </section>
  )
}

export default Editor
