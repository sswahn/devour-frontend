import SpliceToolButton from '../SpliceToolButton/SpliceToolButton'
import CardsMenuButton from '../CardsMenuButton/CardsMenuButton'
import CaptionsMenuButton from '../CaptionsMenuButton/CaptionsMenuButton'
import styles from './SideNav.module.css'

function SideNav({ openSpliceTool, openCardsMenu, openCaptionsMenu }) {

  return (
    <nav className={styles.sideNav} aria-label="editor actions">
      <SpliceToolButton openSpliceTool={openSpliceTool} />
      <CardsMenuButton openCardsMenu={openCardsMenu} />
      <CaptionsMenuButton openCaptionsMenu={openCaptionsMenu} />
    </nav>
  )
}

export default SideNav
