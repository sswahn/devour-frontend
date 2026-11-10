import { useState, useEffect } from 'react'
import useComposition from '../../../hooks/useComposition'
import useFootage from '../../../hooks/useFootage'
import useCaptions from '../../../hooks/useCaptions'
import * as config from '../../config'
import storage from '../../utilities/storage'
import server from '../../utilities/server'
import validate from '../../utilities/validate'
import BackButton from '../../components/BackButton/BackButton'
import Input from '../../components/Input/Input'
import TextArea from '../../components/TextArea/TextArea'
import styles from './Publisher.module.css'

function Publisher({ openEditor }) {
  const { composition } = useComposition()
  const { captions } = useCaptions()
  const [input, setInput] = useState(() => {
    const item = storage.local.get(config.storage.publisher)
    return {
      location: item?.location || '',
      description: item?.description || ''
    }
  })
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const onChange = ({ target: { id, value } }) => {
    setInput(prev => ({ ...prev, [id]: value }))
  }

  const onSubmit = async event => {
    // final submit should resemble:
    // set to queue in indexeddb
    // then delete all other local persistance.
    // then hand off to the service worker to handle
    // upload requests 

    // for now test the request inline here
    try {
      event.preventDefault()
      setLoading(true)
      const formData = new FormData(event.target)
      const location = formData.get('location').trim()
      const description = formData.get('description').trim()
      
      const initialRequest = {
     //   location: validate.location(location), // add to validate util
    //    description: validate.description(description) 
     //   captions 
      //  etc.
      }

      // store text data to dynamodb, and retrieve presigned key
     // const response = await server.post(config.api.publish, initialRequest)
      // then send { blob: composition.blob, etc. } to S3
      
      //setMessage('Success.')
      
    } catch (error) {
      setErrorMessage(error.message)
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
            id="location"
            type="text"
            label="Location"
            inputMode="text"
            value={input.location}
            onChange={onChange}
            error={errorMessage}
            required 
          />
          <TextArea
            id="description"
            label="Description"
            value={input.description}
            onChange={onChange}
            error={errorMessage}
            required 
          />
          <button type="submit" disabled={loading}>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Publisher
