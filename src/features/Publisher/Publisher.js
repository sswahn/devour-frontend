import { useState, useEffect } from 'react'
import useComposition from '../../hooks/useComposition'
import useCaptions from '../../hooks/useCaptions'
import * as config from '../../config'
import { errorHandler } from '../../utilities/errorHandler'
import storage from '../../utilities/storage'
import server from '../../utilities/server'
import validate from '../../utilities/validate'
import database from '../../utilities/database'
import BackButton from '../../components/BackButton/BackButton'
import Input from '../../components/Input/Input'
import TextArea from '../../components/TextArea/TextArea'
import styles from './Publisher.module.css'

function Publisher({ openEditor }) {
  const { composition } = useComposition()
  const { captions } = useCaptions()
  const [input, setInput] = useState(() => 
    storage.local.get(config.storage.publisher) ?? {
      location: '',
      description: ''
    }
  )
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})

  const onChange = ({ target: { id, value } }) => {
    setInput(prev => ({ ...prev, [id]: value }))
  }
  
  // final submit should resemble:
  // set to queue in indexeddb
  // then delete all other local persistance.
  // then hand off to the service worker to handle
  // upload requests 
  const onSubmit = async event => {
    event.preventDefault()
    try {
      setLoading(true)
      const formData = new FormData(event.target)
      const location = formData.get(config.field.location).trim()
      const description = formData.get(config.field.description).trim()
      const data = {
        composition: composition,
        captions: captions.length ? captions : [],
        location: validate.location(location),
        description: validate.description(description)
      }

      console.log('queue data: ', data)
      
      await database().put({ id: config.storage.queue, queue: data })
      setMessage('Your content was submitted successfully!')

      // The Following is temporary. It will eventually be offloaded,
      // to the service worker.
      
      // retrieve presigned key and initiate text storage
      const request = {
        captions: data.captions,
        location: data.location,
        description: data.description
      }
      // const response = await server.post(config.api.publish, request)
      
      // then send to S3 { blob: composition.blob, key: response.key, etc. } 
      
    } catch (error) {
      errorHandler(error, setErrors)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    storage.local.set(config.storage.publisher, input)
  }, [input])

  return (
    <section className={styles.publisher}>
      <div>
        <BackButton overlay="publisher" close={openEditor} />
        <form onSubmit={onSubmit}>
          <Input
            id={config.field.location}
            type="text"
            label="Location"
            inputMode="text"
            value={input.location}
            onChange={onChange}
            error={error.location}
            required 
          />
          <TextArea
            id={config.field.description}
            label="Description"
            value={input.description}
            onChange={onChange}
            error={error.description}
            required 
          />
          {!message && <button type="submit" disabled={loading}>Submit</button>}
          {message && <p>{message}</p>}
        </form>
      </div>
    </section>
  )
}

export default Publisher
