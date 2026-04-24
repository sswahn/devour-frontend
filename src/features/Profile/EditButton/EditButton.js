import { useState } from 'react'
import config from '../../../config'
import server from '../../../utilities/server'
import EditIcon from '../../../components/Icons/EditIcon/EditIcon'
import styles from './EditButton.module.css'

function EditButton({ field, editorIsOpen, setEditorIsOpen }) {
 // const [editorIsOpen, setEditorIsOpen] = useState()
  
  const action = () => {
    // display input
    // toggle state between
    // edit/submit
    setEditorIsOpen(prev => !prev)
  }

  const onClick = event => {
    navigation.vibrate?.()
    action()
  }
  
  const onKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      action()
    }
  }

  // move buttons into their own components.
  
  return (
    <>
      {editorIsOpen // this logic goes in the parent like so: editorIsOpen ? <Edit /> : <Submit />
        ?  <button className={styles.editButton} onClick={onClick} onKeyDown={onKeyDown} type="button" aria-label={`edit ${field}`}>
            <EditIcon />
          </button>
        : <button className={styles.editButton} onClick={onClick} onKeyDown={onKeyDown} type="button" aria-label={`submit new ${field}`}>
            {/* <SubmitIcon /> */}
          </button>
      }
    </>
  )
}

export default EditButton
