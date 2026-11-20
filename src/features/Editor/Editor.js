import { useState, useRef, useEffect } from 'react'
import * as config from '../../config'
import storage from '../../utilities/storage'
import TopNav from './TopNav/TopNav'
import VideoTimeline from './VideoTimeline/VideoTimeline'
import Video from './Video/Video'
import Figcaption from './Figcaption/Figcaption'
import CaptionsMenu from './CaptionsMenu/CaptionsMenu'
import CaptionsMenuButton from './CaptionsMenuButton/CaptionsMenuButton'
import Card from './Card/Card'
import CardsMenu from './CardsMenu/CardsMenu'
import CardsMenuButton from './CardsMenuButton/CardsMenuButton'
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
      start: '',
      end: '',
    }
  )
  const [captionsMenu, setCaptionsMenu] = useState(false)
  const [cardsMenu, setCardsMenu] = useState(false)
  const [programmaticPause, setProgrammaticPause] = useState(null)
  const [loading, setLoading] = useState(false)
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
    const { currentTime } = videoRef.current
    videoRef.current.pause()
    setProgrammaticPause(performance.now())
    setCardsMenu(true)
    // Set a default time:
    setActiveCard(prev => ({ ...prev, 
      start: currentTime.toFixed(2), 
      end: (currentTime + 5).toFixed(2) 
    }))
  }

  const closeCardMenu = () => {
    setCardsMenu(false)
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
      <CardsMenuButton openCardMenu={openCardMenu} />
      <CaptionsMenuButton openCaptionsMenu={openCaptionsMenu} />
      <SubmitButton openPublisher={openPublisher} />
      <Video videoRef={videoRef} setLoading={setLoading} />
      <Figcaption videoRef={videoRef} activeCaption={activeCaption} />
      <VideoTimeline videoRef={videoRef} />
      {/* consider an appropriate place for this component: (Overlays?)*/}
      {activeCard.start && 
        <Card activeCard={activeCard} />
      }
  
      {captionsMenu &&
        <CaptionsMenu activeCaption={activeCaption} setActiveCaption={setActiveCaption} closeCaptionsMenu={closeCaptionsMenu} />
      }
      {cardsMenu &&
        <CardsMenu activeCard={activeCard} setActiveCard={setActiveCard} closeCardMenu={closeCardMenu} />
      }
      {loading && <LoadingSpinner />}
    </figure>
  )
}

export default Editor
