import { useRef } from 'react'
import useDialog from '../../../hooks/useDialog'
import CloseButton from '../../../components/CloseButton/CloseButton'
import Input from '../../../components/Input/Input'
import styles from './Menu.module.css'

function Menu({ data, setData, closeMenu }) {
  const { openDialog } = useDialog()
  const listRef = useRef(null)

  const onClick = event => {
    openDialog(
      <Input
    
      />
    )
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
