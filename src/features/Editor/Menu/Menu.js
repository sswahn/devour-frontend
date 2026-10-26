import { useState, useRef, useEffect } from 'react' // remove useEffect
import useDialog from '../../../hooks/useDialog'
import CloseButton from '../../../components/CloseButton/CloseButton'
import Captions from '../Captions/Captions'
import Cards from '../Cards/Cards'
import styles from './Menu.module.css'

function Menu({ closeMenu }) {
  const { openDialog } = useDialog()
  const [errorMessage, setErrorMessage] = useState('')
  const listRef = useRef(null)

  const handleCaptions = event => {
    openDialog(<Captions />)
  }

  const handleCards = event => {
    openDialog(<Cards />)  
  }
  
  // move buttons to there own components
  
  return (
    <div className={styles.menu} aria-label="menu">
      <CloseButton overlay="menu" close={closeMenu} />
      <ul ref={listRef}>
        <li>
          <button onClick={handleCaptions} type="button">Captions</button>
        </li>
        <li>
          <button onClick={handleCards} type="button">Cards</button>
        </li>
      </ul>
    </div>
  )
}

export default Menu
