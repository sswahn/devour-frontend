import { useState } from 'react'
import BackButton from '../../../components/BackButton/BackButton'
import Input from '../../../components/Input/Input'
import styles from './Publisher.module.css'

function Publisher({ openEditor }) {
  const [location, setLocation] = useState(localStorage.getItem('location') || '')
  const [description, setDescription] = useState(localStorage.getItem('description') || '')
  const [errorMessage, setErrorMessage] = useState('')

  const onChange = event => {
    
  }
  
  return (
    <section className={styles.publisher}>
      <BackButton overlay="publisher" close={openEditor} />
      <Input
        id="location"
        type="text"
        label="Location"
        inputMode="text"
        error={errorMessage}
        required 
      />
      <textarea id="description" name="description" aria-label="add a description">{description}</textarea>
    </section>
  )
}

export default Publisher
