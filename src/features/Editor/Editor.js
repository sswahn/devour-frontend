import { useState, useRef, useEffect } from 'react'
import TopNav from './TopNav/TopNav'
import VideoTimeline from './VideoTimeline/VideoTimeline'
import Video from './Video/Video'
import CaptionsMenu from './CaptionsMenu/CaptionsMenu'
import CaptionsMenuButton from './CaptionsMenuButton/CaptionsMenuButton'
import SubmitButton from './SubmitButton/SubmitButton'
import styles from './Editor.module.css'

function Editor({ openCamera, openPublisher }) {
  const [activeCaption, setActiveCaption] = useState(() => 
    storage.local.get(config.storage.activeCaption) ?? {}
  )
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
      <VideoTimeline videoRef={videoRef} />
      <Video videoRef={videoRef} />
      <CaptionsMenuButton openCaptionsMenu={openCaptionsMenu} />
      <SubmitButton openPublisher={openPublisher} />
    </section>
  )
}

export default Editor
