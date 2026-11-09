import { useState, useRef, useEffect } from 'react'
import TopNav from './TopNav/TopNav'
import Menu from './Menu/Menu'
import MenuButton from './MenuButton/MenuButton'
import VideoTimeline from './VideoTimeline/VideoTimeline'
import Video from './Video/Video'
import SubmitButton from './SubmitButton/SubmitButton'
import styles from './Editor.module.css'

function Editor({ footage, openCamera, openPublisher }) { // move footage to provider
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const videoRef = useRef(null)

  const openMenu = () => {
    setMenuIsOpen(true)
  }
  
  const closeMenu = () => {
    setMenuIsOpen(false)
  }

  return (
    <section className={styles.editor}>
      <TopNav videoRef={videoRef} openCamera={openCamera} /> 
      {menuIsOpen && <Menu closeMenu={closeMenu} />}
      <MenuButton openMenu={openMenu} /> 
      <VideoTimeline videoRef={videoRef} />
      <Video videoRef={videoRef} />
      <SubmitButton openPublisher={openPublisher} />
    </section>
  )
}

export default Editor
