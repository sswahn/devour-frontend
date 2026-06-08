import { useRef } from 'react'
import CloseButton from '../../../components/CloseButton/CloseButton'
import styles from './Menu.module.css'

function Menu({ closeMenu }) {
  const listRef = useRef(null)

  const onClick = event => {
    console.log('button clicked.')
  }
  
  return (
    <div className={styles.menu} aria-label="menu">
      <CloseButton overlay="menu" close={closeMenu} />
      <ul ref={listRef}>
        <li>
          <button onClick={onClick} type="button">Location</button>
        </li>
        <li>
          <button onClick={onClick} type="button">Caption</button>
        </li>
        <li>
          <button onClick={onClick} type="button">Description</button>
        </li>
        <li>
          <button onClick={onClick} type="button">Media Editor</button>
        </li>
      </ul>
    </div>
  )
}

export default Menu
