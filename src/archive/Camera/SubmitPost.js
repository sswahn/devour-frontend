import { useState, useContext } from 'react'
import { Context } from '../../Provider'
import { config } from '../../config'
import server from '@sswahn/server'
import storage from '@sswahn/storage'
import database from '@sswahn/database'
//import { debounce } from '../../utilities/Debounce'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import SubmitButton from '../SubmitButton/SubmitButton'
import ArrowLeftIcon from '../Icons/ArrowLeftIcon/ArrowLeftIcon'


export default function SubmitPost({ modalRef }) {
  const [location, setLocation] = useState('')
  const [options, setOptions] = useState([])
  const [showOptions, setShowOptions] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(undefined)
  const [context, dispatch] = useContext(Context)
  const db = database()
  
  const closeModal = event => {
    modalRef.current.close()
  }
  
  const handleOnChange = ({ target }) => {
    const value = target.value || ''
    setLocation(value)
    storage.local.set(config.store.posts.create, { 
      ...storage.local.get(config.store.posts.create), 
      [target.id]: value 
    })
  }
  
  const handleInputChange = async ({ target }) => { // needs debounce
    try {
      //setLocation(target.value)
      const request = {
        location: target.value
      }
      //const response = await postRequest(config.api.location, request) //(`https://your-aws-locations-api-endpoint/search?query=${target.value}`)
      
      //setOptions(response.data)
      //setShowOptions(true)
      
    } catch (error) {
      //setError(error)
    }
  } // 400)

  const handleOptionSelect = (value) => {
    setLocation(value)
    setShowOptions(false)
    // Handle the selection change
  }
  
  const stopCamera = () => {
    if (context.stream) {
      context.stream.getTracks().forEach(track => track.stop())
      dispatch({ type: 'stream', payload: undefined })
    }
  }
  
  const handleSubmit = async event => {
    try {
      // validateLocation
      const request = {
        location: location,
        video: context.video,
        images: context.images,
        image_captions: context.image_captions,
        video_captions: context.video_captions,
      }
      
      console.log('request: ', request)
      
      const response = await server.post(config.api.posts, request)
      
      console.log('response: ', response)
      
      storage.local.remove(config.store.posts.create)
      db.destroy()
      stopCamera()
      closeModal()
      dispatch({ type: 'modal' })
      // update indexedDB
      
    } catch (error) {
      setError(error)
    }
  }
  
  // look to PreviewModal for how to mount/unmount this properly
  
  return (
    <>
      <button id="close-location-modal" className="close-modal" onClick={closeModal} type="button" >
        <ArrowLeftIcon />
        <div className="tooltip" role="tooltip">Close</div>
      </button>
      
      <form className="post-form" onSubmit={handleSubmit}>
        <div>
          <input
            id="location"
            type="text"
            value={location}
            placeholder="Include your location"
            autoComplete="off"
            spellCheck="false"
            minLength="2"
            maxLength="200"
            tabIndex="0"
            aria-label="Location"
            aria-required="true"
            required
            onChange={handleInputChange}
          />
          {showOptions && (
            <ul>
              {options.map(option => <li key={option.id} onClick={() => handleOptionSelect(option.label)}>{option.label}</li>)}
            </ul>
          )}
        </div>
        
        <div className="post-form-submit">
          {loading ? <LoaderSpinner /> : <SubmitButton text="Submit" error={error} />}
        </div>
      </form>
    </>  
  )
}
