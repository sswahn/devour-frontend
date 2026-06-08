import { useRef } from 'react'
import CloseButton from '../../../components/CloseButton/CloseButton'
import styles from './Menu.module.css'

function Menu({ closeMenu }) {
  const listRef = useRef(null)
  
  return (
    <div className={styles.menu} aria-label="menu">
{/* <CloseButton overlay="menu" close={closeMenu} /> */}
      <ul ref={listRef}>
        <li>
          <button type="button">Location</button>
        </li>
        <li>
          <button type="button">Caption</button>
        </li>
        <li>
          <button type="button">Description</button>
        </li>
        <li>
          <button type="button">Media Editor</button>
        </li>
      </ul>
    </div>
  )
}

export default Menu
