import { useState, useRef } from 'react'
import useDialog from '../../../hooks/useDialog'
import CloseButton from '../../../components/CloseButton/CloseButton'
import Input from '../../../components/Input/Input'
import styles from './Menu.module.css'

function Menu({ data, setData, closeMenu }) {
  const { openDialog } = useDialog()
  const [errorMessage, setErrorMessage] = useState('')
  const listRef = useRef(null)

  // move buttons to there own components
  
  const handleCaption = event => {
    openDialog(
      <div style={{marginTop: '32px'}}>
        <Input
          id="caption"
          type="text"
          label="Caption"
          inputMode="text"
          defaultValue={data.caption}
          error={errorMessage} 
        />
      </div>
    )
  }
  
  return (
    <div className={styles.menu} aria-label="menu">
      <CloseButton overlay="menu" close={closeMenu} />
      <ul ref={listRef}>
        <li>
          <button onClick={handleCaption} type="button">Caption</button>
        </li>
        <li>
          <button type="button">Media Editor list items...</button>
        </li>
      </ul>
    </div>
  )
}

export default Menu
