import EditorButton from '../EditorButton/EditorButton'
import MuteButton from '../MuteButton/MuteButton'
import styles from './SideNav.module.css'

function SideNav({ streamRef }) {

  return (
    <nav className={styles.sideNav}>
      <EditorButton />
      <MuteButton streamRef={streamRef} />
    </nav>
  )
}

export default SideNav
