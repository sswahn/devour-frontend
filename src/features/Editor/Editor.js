import { useState, useRef, useEffect } from 'react'
import * as config from '../../config'
import storage from '../../utilities/storage'
import TopNav from './TopNav/TopNav'
import VideoTimeline from './VideoTimeline/VideoTimeline'
import Video from './Video/Video'
import CaptionsMenu from './CaptionsMenu/CaptionsMenu'
import CaptionsMenuButton from './CaptionsMenuButton/CaptionsMenuButton'
import CardsMenu from './CardMenu/CardMenu'
import CardsMenuButton from './CardMenuButton/CardMenuButton'
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
  const [activeCard, setActiveCard] = useState(() => 
    storage.local.get(config.storage.activeCard) ?? {
      id: crypto.randomUUID(),
      start: startTime,
      end: startTime + 5,
      background: {
        style: {
          backgroundColor: 'black'
        }
      }
    }
  )
  const [captionsMenu, setCaptionsMenu] = useState(false)
  const [cardMenu, setCardMenu] = useState(false)
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

  useEffect(() => {
    storage.local.set(config.storage.activeCard, activeCard)
  }, [activeCard])

  // ultimately might want a <SideNav /> component above <SubmitButton />
  
  return (
    <section className={styles.editor}>
      <TopNav videoRef={videoRef} openCamera={openCamera} programmaticPause={programmaticPause} /> 
      <VideoTimeline videoRef={videoRef} />
      <Video videoRef={videoRef} activeCaption={activeCaption} />
      <CaptionsMenuButton openCaptionsMenu={openCaptionsMenu} />
      <CardMenuButton openCardMenu={openCardMenu} />
      <SubmitButton openPublisher={openPublisher} />
      {captionsMenu &&
        <CaptionsMenu activeCaption={activeCaption} setActiveCaption={setActiveCaption} closeCaptionsMenu={closeCaptionsMenu} />
      }
      {cardMenu &&
        <CardMenu activeCard={activeCard} setActiveCard={setActiveCard} closeCardMenu={closeCardMenu} />
      }
    </section>
  )
}

export default Editor
