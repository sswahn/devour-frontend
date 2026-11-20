import SpliceToolButton from '../SpliceToolButton/SpliceToolButton'
import CardsButton from '../CardsButton/CardsButton'
import CaptionsButton from '../CaptionsButton/CaptionsButton'
import PublisherButton from '../PublisherButton/PublisherButton'
import styles from './SideNav.module.css'

function SideNav({ openSpliceToolMenu, openCardsMenu, openCaptionsMenu, openPublisher }) {

  return (
    <nav className={styles.sideNav} aria-label="editor actions">
      <SpliceToolButton openSpliceToolMenu={openSpliceToolMenu} />
      <CardsButton openCardsMenu={openCardsMenu} />
      <CaptionsButton openCaptionsMenu={openCaptionsMenu} />
      <PublisherButton openPublisher={openPublisher} />
    </nav>
  )
}

export default SideNav
