import { useState, useRef, useEffect } from 'react'
import { DEFAULT_TEXT_STYLE } from '../../constants/defaultTextStyle'
import * as config from '../../config'
import storage from '../../utilities/storage'
import TopNav from './TopNav/TopNav'
import SideNav from './SideNav/SideNav'
import VideoTimeline from './VideoTimeline/VideoTimeline'
import Video from './Video/Video'
import Figcaption from './Figcaption/Figcaption'
import Card from './Card/Card'
import SpliceToolMenu from './SpliceToolMenu/SpliceToolMenu'
import CaptionsMenu from './CaptionsMenu/CaptionsMenu'
import CardsMenu from './CardsMenu/CardsMenu'
import styles from './Editor.module.css'

// videoRef.current.playbackRate = 0.5 // 50% speed slow motion

function Editor({ openCamera, openPublisher }) {
  const [activeCaption, setActiveCaption] = useState(() => 
    storage.local.get(config.storage.activeCaption) ?? {
      id: crypto.randomUUID(),
      text: '',
      start: '',
      end: '',
      style: DEFAULT_TEXT_STYLE,
      segments: []
    }
  )
  const [activeCard, setActiveCard] = useState(() => 
    storage.local.get(config.storage.activeCard) ?? {
      id: crypto.randomUUID(),
      start: '',
      end: '',
    }
  )
  const [spliceToolMenuIsOpen, setSpliceToolMenuIsOpen] = useState(false)
  const [captionsMenuIsOpen, setCaptionsMenuIsOpen] = useState(false)
  const [cardsMenuIsOpen, setCardsMenuIsOpen] = useState(false)
  const [programmaticPause, setProgrammaticPause] = useState(null)
  const [loading, setLoading] = useState(false)
  const videoRef = useRef(null)

  const openSpliceToolMenu = () => {
    setSpliceToolMenuIsOpen(true)
  }

  const closeSpliceToolMenu = () => {
    setSpliceToolMenuIsOpen(false)
  }

  const openCaptionsMenu = () => {
    const { currentTime } = videoRef.current
    videoRef.current.pause()
    setProgrammaticPause(performance.now())
    setCaptionsMenuIsOpen(true)
    // Set a default time:
    setActiveCaption(prev => ({ ...prev, 
      start: currentTime.toFixed(2), 
      end: (currentTime + 3).toFixed(2) 
    }))
  }
  
  const closeCaptionsMenu = () => {
    setCaptionsMenuIsOpen(false)
  }

  const openCardMenu = () => {
    const { currentTime } = videoRef.current
    videoRef.current.pause()
    setProgrammaticPause(performance.now())
    setCardsMenuIsOpen(true)
    // Set a default time:
    setActiveCard(prev => ({ ...prev, 
      start: currentTime.toFixed(2), 
      end: (currentTime + 5).toFixed(2) 
    }))
  }

  const closeCardMenu = () => {
    setCardsMenuIsOpen(false)
  }

  useEffect(() => {
    storage.local.set(config.storage.activeCaption, activeCaption)
  }, [activeCaption])

  useEffect(() => {
    storage.local.set(config.storage.activeCard, activeCard)
  }, [activeCard])

  // ultimately might want a <SideNav /> component above <SubmitButton />
  
  return (
    <figure className={styles.editor}>
      <TopNav videoRef={videoRef} openCamera={openCamera} programmaticPause={programmaticPause} /> 
      <SideNav 
        openSpliceTool={openSpliceTool} 
        openCardMenu={openCardMenu} 
        openCaptionsMenu={openCaptionsMenu} 
        openPublisher={openPublisher} 
      />
      <Video videoRef={videoRef} setLoading={setLoading} />
      <Figcaption videoRef={videoRef} activeCaption={activeCaption} />
      <VideoTimeline videoRef={videoRef} />
      
      {/* consider an appropriate place for this component: (Overlays?)*/}
      {activeCard.start && 
        <Card activeCard={activeCard} />
      }
  
      {spliceToolMenuIsOpen && 
        <SpliceToolMenu closeSpliceToolMenu={closeSpliceToolMenu} />
      }
      {captionsMenuIsOpen &&
        <CaptionsMenu activeCaption={activeCaption} setActiveCaption={setActiveCaption} closeCaptionsMenu={closeCaptionsMenu} />
      }
      {cardsMenuIsOpen &&
        <CardsMenu activeCard={activeCard} setActiveCard={setActiveCard} closeCardMenu={closeCardMenu} />
      }
      {loading && <LoadingSpinner />}
    </figure>
  )
}

export default Editor
