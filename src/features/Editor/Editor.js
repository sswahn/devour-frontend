import { useState, useRef, useEffect } from 'react'
import * as config from '../../config'
import storage from '../../utilities/storage'
import TopNav from './TopNav/TopNav'
import VideoTimeline from './VideoTimeline/VideoTimeline'
import Video from './Video/Video'
import CardMenu from './CardMenu/CardMenu'
import CardMenuButton from './CardMenuButton/CardMenuButton'
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
      },
      segments: []
    }
  )
  const [cardMenu, setCardMenu] = useState(false)
  const [captionsMenu, setCaptionsMenu] = useState(false)
  const [programmaticPause, setProgrammaticPause] = useState(null)
  const videoRef = useRef(null)

  const openCaptionsMenu = () => {
    const { currentTime } = videoRef.current
    videoRef.current.pause()
    setProgrammaticPause(performance.now())
    setCaptionsMenu(true)
    // Set a default time:
    setActiveCaption(prev => ({ ...prev, 
      start: currentTime.toFixed(2), 
      end: (currentTime + 3).toFixed(2) 
    }))
  }
  
  const closeCaptionsMenu = () => {
    setCaptionsMenu(false)
  }

  const openCardMenu = () => {
    console.log('open card menu button clicked.')
    setCardMenu(true)
  }

  const closeCardMenu = () => {
    console.log('closing card menu.')
    setCardMenu(true)
  }

  useEffect(() => {
    storage.local.set(config.storage.activeCaption, activeCaption)
  }, [activeCaption])
  
  // ultimately might want a <SideNav /> component above <SubmitButton />
  
  return (
    <section className={styles.editor}>
      <TopNav videoRef={videoRef} openCamera={openCamera} programmaticPause={programmaticPause} /> 
      <VideoTimeline videoRef={videoRef} />
      <Video videoRef={videoRef} activeCaption={activeCaption} />
      <CardMenuButton openCardMenu={openCardMenu} />
      <CaptionsMenuButton openCaptionsMenu={openCaptionsMenu} />
      <SubmitButton openPublisher={openPublisher} />
      {cardMenu &&
        <CardMenu closeCardMenu={closeCardMenu} />
      }
      {captionsMenu &&
        <CaptionsMenu activeCaption={activeCaption} setActiveCaption={setActiveCaption} closeCaptionsMenu={closeCaptionsMenu} />
      }
    </section>
  )
}

export default Editor
