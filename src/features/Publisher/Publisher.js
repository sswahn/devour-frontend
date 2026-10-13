import { useState, useEffect } from 'react'
import BackButton from '../../components/BackButton/BackButton'
import Input from '../../components/Input/Input'
import styles from './Publisher.module.css'

function Publisher({ openEditor }) {
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleLocation = event => {
    const { value } = event.target
    localStorage.setItem('location', value)
    setLocation(value)
  }

  const handleDescription = event => {
    const { value } = event.target
    localStorage.setItem('description', value)
    setDescription(value)
  }

  const publish = event => {
    // validate & format
    // get s3 auth
  }

  const loadFromStorage = () => {
    // location
    // description
  }

  useEffect(() => {
    // loadFromStorage()
  }, [])
  
  return (
    <section className={styles.publisher}>
      <div>
        <BackButton overlay="publisher" close={openEditor} />
        <Input
          id="location"
          type="text"
          label="Location"
          inputMode="text"
          value={location}
          error={errorMessage}
          required 
        />
        <textarea id="description" name="description" aria-label="add a description">{description}</textarea>
        <button onClick={publish} type="button">Submit</button>
      </div>
    </section>
  )
}

export default Publisher
