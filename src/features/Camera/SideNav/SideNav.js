import useFootage from '../../hooks/useFootage'
import EditorButton from '../EditorButton/EditorButton'
import MuteButton from '../MuteButton/MuteButton'
import styles from './SideNav.module.css'

function SideNav({ streamRef }) {
  const { footage } = useFootage()
  
  // conditionally render EditorButton with !!footage.length
  
  return (
    <nav className={styles.sideNav}>
      <EditorButton />
      <MuteButton streamRef={streamRef} />
    </nav>
  )
}

export default SideNav
