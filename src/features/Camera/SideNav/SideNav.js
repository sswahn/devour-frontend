import useFootage from '../../../hooks/useFootage'
import EditorButton from '../EditorButton/EditorButton'
import styles from './SideNav.module.css'

function SideNav({ streamRef }) {
  const { footage } = useFootage()
  
  // conditionally render EditorButton with !!footage.length
  
  return (
    <nav className={styles.sideNav}>
      <EditorButton />
    </nav>
  )
}

export default SideNav
