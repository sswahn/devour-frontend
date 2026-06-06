import useFootage from '../../../hooks/useFootage'
import EditorButton from '../EditorButton/EditorButton'
import styles from './SideNav.module.css'

function SideNav({ setEditorIsOpen }) {
  const { footage } = useFootage()
  
  // conditionally render EditorButton with !!footage.length
  
  return (
    <nav className={styles.sideNav}>
      <EditorButton setEditorIsOpen={setEditorIsOpen} />
    </nav>
  )
}

export default SideNav
