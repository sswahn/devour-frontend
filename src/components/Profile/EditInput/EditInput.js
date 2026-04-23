import { useState } from 'react'
import styles from './EditInput.module.css'

function EditInput({ field, value }) {
  const [inputValue, setInputValue] = useState('')
  
  const onChange = event => {
    setInputValue(event.target.value)  
  }
  
  return (
    <input className={styles.editInput} onChange={onChange} type="text" placeholder={value} aria-label={`${field} input`} />
  )
}

export default EditInput
