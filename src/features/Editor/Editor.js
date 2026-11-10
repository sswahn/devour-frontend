import { useState, useRef, useEffect } from 'react'
import TopNav from './TopNav/TopNav'
import Menu from './Menu/Menu'
import CaptionsMenu from './CaptionsMenu/CaptionsMenu'
import VideoTimeline from './VideoTimeline/VideoTimeline'
import Video from './Video/Video'
import CaptionsButton from './CaptionsButton/CaptionsButton'
import SubmitButton from './SubmitButton/SubmitButton'
import styles from './Editor.module.css'

function Editor({ openCamera, openPublisher }) {
  const [captionsMenu, setCaptionsMenu] = useState(false)
  const videoRef = useRef(null)

  const openCaptionsMenu = () => {
    setCaptionsMenu(true)
  }
  
  const closeCaptionsMenu = () => {
    setCaptionsMenu(false)
  }

  // ultimately might want a <SideNav /> component above <SubmitButton />
  
  return (
    <section className={styles.editor}>
      <TopNav videoRef={videoRef} openCamera={openCamera} /> 
      {captionsMenu && <CaptionsMenu closeCaptionsMenu={closeCaptionsMenu} />}
      <MenuButton openMenu={openMenu} /> 
      <VideoTimeline videoRef={videoRef} />
      <Video videoRef={videoRef} />
      <CaptionsButton openCaptionsMenu={openCaptionsMenu} />
      <SubmitButton openPublisher={openPublisher} />
    </section>
  )
}

export default Editor
