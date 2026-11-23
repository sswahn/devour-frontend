import { useState, useRef, useEffect } from 'react'
import { DEFAULT_TEXT_STYLE } from '../../constants/defaultTextStyle'
import * as config from '../../config'
import storage from '../../utilities/storage'
import TopNav from './TopNav/TopNav'
import SideNav from './SideNav/SideNav'
import VideoTimeline from './VideoTimeline/VideoTimeline'
import Video from './Video/Video'
import LiveCaptions from './LiveCaptions/LiveCaptions'
import LiveCards from './LiveCards/LiveCards'
import MusicMenu from './MusicMenu/MusicMenu'
import SpliceToolMenu from './SpliceToolMenu/SpliceToolMenu'
import CaptionsMenu from './CaptionsMenu/CaptionsMenu'
import CardsMenu from './CardsMenu/CardsMenu'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import styles from './Editor.module.css'

// videoRef.current.playbackRate = 0.5 // 50% speed slow motion

// consider moving activeCaptions/activeCards state to their menus and display them there

function Editor({ openCamera, openPublisher }) {
  const [activeCard, setActiveCard] = useState(() => 
    storage.local.get(config.storage.activeCard) ?? {
      id: crypto.randomUUID(),
      start: '',
      end: '',
    }
  )
  const [musicMenuIsOpen, setMusicMenuIsOpen] = useState(false)
  const [spliceToolMenuIsOpen, setSpliceToolMenuIsOpen] = useState(false)
  const [captionsMenuIsOpen, setCaptionsMenuIsOpen] = useState(false)
  const [cardsMenuIsOpen, setCardsMenuIsOpen] = useState(false)
  const [programmaticPause, setProgrammaticPause] = useState(null)
  const [loading, setLoading] = useState(false)
  const videoRef = useRef(null)

  const openMusicMenu = () => {
    setMusicMenuIsOpen(true)
  }

  const closeMusicMenu = () => {
    setMusicMenuIsOpen(false)
  }

  const openSpliceToolMenu = () => {
    setSpliceToolMenuIsOpen(true)
  }

  const closeSpliceToolMenu = () => {
    setSpliceToolMenuIsOpen(false)
  }

  const openCaptionsMenu = () => {
    videoRef.current.pause()
    setProgrammaticPause(performance.now())
    setCaptionsMenuIsOpen(true)
  }
  
  const closeCaptionsMenu = () => {
    setCaptionsMenuIsOpen(false)
  }

  const openCardsMenu = () => {
    const { currentTime, duration } = videoRef.current
    videoRef.current.pause()
    setProgrammaticPause(performance.now())
    setCardsMenuIsOpen(true)
    // Set a default time:
    setActiveCard(prev => ({ ...prev, 
      start: currentTime, 
      end: Math.min(currentTime + 3, duration)
    }))
  }

  const closeCardsMenu = () => {
    setCardsMenuIsOpen(false)
  }

  useEffect(() => {
    storage.local.set(config.storage.activeCaption, activeCaption)
  }, [activeCaption])

  useEffect(() => {
    storage.local.set(config.storage.activeCard, activeCard)
  }, [activeCard])

  // clicking video should toggle pause/play?

  return (
    <figure className={styles.editor}>
      <TopNav videoRef={videoRef} openCamera={openCamera} programmaticPause={programmaticPause} /> 
      <SideNav 
        openMusicMenu={openMusicMenu}
        openSpliceToolMenu={openSpliceToolMenu} 
        openCardsMenu={openCardsMenu} 
        openCaptionsMenu={openCaptionsMenu} 
        openPublisher={openPublisher} 
      />
      <Video videoRef={videoRef} setLoading={setLoading} />
      <VideoTimeline videoRef={videoRef} />
      <LiveCaptions videoRef={videoRef} />
      <LiveCards videoRef={videoRef} activeCard={activeCard} />
      {/*musicMenuIsOpen && 
        <MusicMenu closeMusicMenu={closeMusicMenu} />
      }
      {spliceToolMenuIsOpen && 
        <SpliceToolMenu closeSpliceToolMenu={closeSpliceToolMenu} />
      */}
      {captionsMenuIsOpen &&
        <CaptionsMenu videoRef={videoRef} closeCaptionsMenu={closeCaptionsMenu} />
      }
      {/*cardsMenuIsOpen &&
        <CardsMenu activeCard={activeCard} setActiveCard={setActiveCard} closeCardsMenu={closeCardsMenu} />
      */}
      {loading && <LoadingSpinner />}
    </figure>
  )
}

export default Editor
