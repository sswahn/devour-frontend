import { useState, useEffect } from 'react'
import server from '../../utilities/server'
import validate from '../../utilities/validate'
import BackButton from '../../components/BackButton/BackButton'
import Input from '../../components/Input/Input'
import TextArea from '../../components/TextArea/TextArea'
import styles from './Publisher.module.css'

function Publisher({ openEditor }) {
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
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

  const onSubmit = async event => {
    // get s3 auth

    try {
      event.preventDefault()
      setLoading(true)
      const formData = new FormData(event.target)
      const location = formData.get('location').trim()
      const description = formData.get('description').trim()
      
      const request = {
     //   location: validate.location(location), // add to validate util
    //    description: validate.description(description) 
      }
  
     // const response = await server.post(api.publish, request)
      //setMessage('Success.')
      
    } catch (error) {
      setErrorMessage(error.message)
    } finally {
      setLoading(false)
    }
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
        <form onSubmit={onSubmit}>
          <Input
            id="location"
            type="text"
            label="Location"
            inputMode="text"
            value={location}
            error={errorMessage}
            required 
          />
          <TextArea
            id="description"
            label="Description"
            value={description}
            error={errorMessage}
            required 
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Publisher
