import MusicButton from '../MusicButton/MusicButton'
import SpliceToolButton from '../SpliceToolButton/SpliceToolButton'
import CardsButton from '../CardsButton/CardsButton'
import CaptionsButton from '../CaptionsButton/CaptionsButton'
import PublisherButton from '../PublisherButton/PublisherButton'
import styles from './SideNav.module.css'

function SideNav({ 
  openMusicMenu, 
  openMusicMenu, 
  openSpliceToolMenu, 
  openCardsMenu, 
  openCaptionsMenu, 
  openPublisher 
}) {
  return (
    <nav className={styles.sideNav} aria-label="editor actions">
      <MusicButton openMusicMenu={openMusicMenu} />
      <SpliceToolButton openSpliceToolMenu={openSpliceToolMenu} />
      <CardsButton openCardsMenu={openCardsMenu} />
      <CaptionsButton openCaptionsMenu={openCaptionsMenu} />
      <PublisherButton openPublisher={openPublisher} />
    </nav>
  )
}

export default SideNav
