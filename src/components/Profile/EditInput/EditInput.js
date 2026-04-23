import { useState } from 'react'
import styles from './EditInput.module.css'

function EditInput({ field, value }) {
  const [value, setValue] = useState('')
  
  const onChange = event => {
    setValue(event.target.value)  
  }
  
  return (
    <input className={styles.editInput} onChange={onChange} type="text' placeholder={value} aria-label={`${field} input`} />
  )
}

export default EditInput
