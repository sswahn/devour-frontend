import { useState, useRef, useEffect } from 'react'
import storage from '../../utilities/storage'
import TopNav from './TopNav/TopNav'
import VideoTimeline from './VideoTimeline/VideoTimeline'
import Video from './Video/Video'
import CaptionsMenu from './CaptionsMenu/CaptionsMenu'
import CaptionsMenuButton from './CaptionsMenuButton/CaptionsMenuButton'
import SubmitButton from './SubmitButton/SubmitButton'
import styles from './Editor.module.css'

function Editor({ openCamera, openPublisher }) {
  const [activeCaption, setActiveCaption] = useState(() => 
    storage.local.get(config.storage.activeCaption) ?? {
      id: crypto.randomUUID(),
      text: '',
      start: '',
      end: '',
      style: {
        fontSize: 12,
        color: '#ffffff',
        bold: false,
        italic: false,
        underline: false,
        stroke: 'none',
        strokeColor: '#000000',
        strokeWidth: 2,
        backgroundColor: 'transparent',
        textAlign: 'left'
      }
    }
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
      {captionsMenu && <CaptionsMenu actveCaption={activeCaption} setActiveCaption={setActiveCaption} closeCaptionsMenu={closeCaptionsMenu} />}
      <VideoTimeline videoRef={videoRef} />
      <Video videoRef={videoRef} />
      <CaptionsMenuButton openCaptionsMenu={openCaptionsMenu} />
      <SubmitButton openPublisher={openPublisher} />
    </section>
  )
}

export default Editor
