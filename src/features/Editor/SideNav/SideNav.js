import SpliceToolMenuButton from '../SpliceToolMenuButton/SpliceToolMenuButton'
import CardsMenuButton from '../CardsMenuButton/CardsMenuButton'
import CaptionsMenuButton from '../CaptionsMenuButton/CaptionsMenuButton'
import PublisherButton from '../PublisherButton/PublisherButton'
import styles from './SideNav.module.css'

function SideNav({ openSpliceToolMenu, openCardsMenu, openCaptionsMenu, openPublisher }) {

  return (
    <nav className={styles.sideNav} aria-label="editor actions">
      <SpliceToolMenuButton openSpliceToolMenu={openSpliceToolMenu} />
      <CardsMenuButton openCardsMenu={openCardsMenu} />
      <CaptionsMenuButton openCaptionsMenu={openCaptionsMenu} />
      <PublisherButton openPublisher={openPublisher} />
    </nav>
  )
}

export default SideNav
