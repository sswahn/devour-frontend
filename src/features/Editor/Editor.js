import { useState, useRef, useEffect } from 'react'
import * as config from '../../config'
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
      start: '', // need default time: currentTime
      end: '', // currentTime + 4
      style: {
        // fontFamily: 
        fontSize: 16,
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
    const { currentTime } = videoRef.current
    videoRef.current.pause() // doesnt toggle pause button display
    setCaptionsMenu(true)
    setActiveCaption(prev => ({ ...prev, 
      start: currentTime.toFixed(2), 
      end: (currentTime + 4).toFixed(2) 
    }))
  }
  
  const closeCaptionsMenu = () => {
    setCaptionsMenu(false)
  }

  useEffect(() => {
    storage.local.set(config.storage.activeCaption, activeCaption)
  }, [activeCaption])
  
  // ultimately might want a <SideNav /> component above <SubmitButton />

  console.log('captionsMenu:', captionsMenu)
  
  return (
    <section className={styles.editor}>
      <TopNav videoRef={videoRef} openCamera={openCamera} /> 
      {/*captionsMenu &&  */}
    <CaptionsMenu 
        activeCaption={activeCaption} 
        setActiveCaption={setActiveCaption} 
        closeCaptionsMenu={closeCaptionsMenu}
      />
      <VideoTimeline videoRef={videoRef} />
      <Video videoRef={videoRef} activeCaption={activeCaption} />
      <CaptionsMenuButton openCaptionsMenu={openCaptionsMenu} />
      <SubmitButton openPublisher={openPublisher} />
    </section>
  )
}

export default Editor
