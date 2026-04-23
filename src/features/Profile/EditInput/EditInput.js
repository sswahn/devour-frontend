import { useState } from 'react'
import styles from './EditInput.module.css'

function EditInput({ field, value }) {
  const [inputValue, setInputValue] = useState('')
  
  const onKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      
    // make request
    // update profile data,
    // close input
    // not necessarily in that order.
      
    }
  }
  
  return (
    <input className={styles.editInput} onKeyDown={onKeyDown} type="text" placeholder={value} aria-label={`${field} input`} />
  )
}

export default EditInput
