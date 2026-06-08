import { useState, useRef } from 'react'
import useDialog from '../../../hooks/useDialog'
import CloseButton from '../../../components/CloseButton/CloseButton'
import Input from '../../../components/Input/Input'
import styles from './Menu.module.css'

function Menu({ data, setData, closeMenu }) {
  const { openDialog } = useDialog()
  const [errorMessage, setErrorMessage] = useState('')
  const listRef = useRef(null)

  const handleLocation = event => {
    
    console.log('data.location: ', data.location)
    
    openDialog(
      <div style={{marginTop: '24px'}}>
        <Input
          id="location"
          type="text"
          label="location"
          inputMode="text"
          defaultValue={data.location}
          error={errorMessage}
          required 
        />
      </div>
    )
  }

  // move buttons to there own components
  
  const handleCaption = event => {
    openDialog(
      <Input
        id="caption"
        type="text"
        label="caption"
        inputMode="text"
        defaultValue={data.caption}
        error={errorMessage} 
      />
    )
  }
  
  const handleDescription = event => {
    openDialog(
      <textarea id="description" name="description" aria-label="add a description">{data.description}</textarea>
    )
  }
  
  return (
    <div className={styles.menu} aria-label="menu">
      <CloseButton overlay="menu" close={closeMenu} />
      <ul ref={listRef}>
        <li>
          <button onClick={handleLocation} type="button">Location</button>
        </li>
        <li>
          <button onClick={handleCaption} type="button">Caption</button>
        </li>
        <li>
          <button onClick={handleDescription} type="button">Description</button>
        </li>
        <li>
          <button type="button">Media Editor</button>
        </li>
      </ul>
    </div>
  )
}

export default Menu
