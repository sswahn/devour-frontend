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
        backgroundColor: 'transparent',
        color: '#ffffff',
        // fontFamily: '',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 'normal',
        textAlign: 'left',
        textDecoration: 'none',
        WebkitTextStrokeWidth: '0px',
        WebkitTextStrokeColor: 'transparent'
      }
    }
  )
  const [captionsMenu, setCaptionsMenu] = useState(false)
  const [programmaticPause, setProgrammaticPause] = useState(null)
  const videoRef = useRef(null)

  const openCaptionsMenu = () => {
    const { currentTime } = videoRef.current
    videoRef.current.pause()
    setProgrammaticPause(performance.now())
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
  
  return (
    <section className={styles.editor}>
      <TopNav videoRef={videoRef} openCamera={openCamera} programmaticPause={programmaticPause} /> 
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
