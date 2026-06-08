import { useState, useRef, useEffect } from 'react'
import useFootage from '../../hooks/useFootage'
import TopNav from './TopNav/TopNav'
import MenuButton from './MenuButton/MenuButton'
import ProgressBar from './ProgressBar/ProgressBar'
import Menu from './Menu/Menu'
import styles from './Editor.module.css'

function Editor({ closeEditor }) {
  const { footage } = useFootage()
  const { menuIsOpen, setMenuIsOpen } = useState(false)
  const [source, setSource] = useState('')
  const videoRef = useRef(null)

  const openMenu = () => {
    setMenuIsOpen(true)
  }
  
  const closeMenu = () => {
    setMenuIsOpen(false)
  }

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
      <TopNav videoRef={videoRef} closeEditor={closeEditor} />
      <MenuButton openMenu={openMenu} />
      {/*menuIsOpen && <Menu closeMenu={closeMenu} /> */}
      <Menu closeMenu={closeMenu} />
      <ProgressBar videoRef={videoRef} />
      <video id="video-editor" ref={videoRef} src={source} loop playsinline />
    </section>
  )
}

export default Editor
