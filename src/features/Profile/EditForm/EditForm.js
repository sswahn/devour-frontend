import { useState, useRef, useEffect } from 'react'
import useDialog from '../../../hooks/useDialog'
import validate from '../../../utilities/validate'
import database from '../../../utilities/database'
import Input from '../../../components/Input/Input'
import styles from './EditForm.module.css'

function EditForm({ profile, setProfile }) {
  const { closeDialog } = useDialog()
  const [cachedProfile, setCachedProfile] = useState(profile)
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const canvasRef = useRef(null)
  const fileInputRef = useRef(null)

  const onSubmit = async event => { // need to style image circular css
    try {
      event.preventDefault()
      const formData = new FormData(event.target)
      const username = formData.get('username').trim()
      const location = formData.get('location').trim()
      const biography = formData.get('biography').trim()

      const request = {
        picture: file ? await validate.image(file) : null,
        username: validate.username(username),
        location: location, // validate.location(location), // add to validate util
        biography: biography ? validate.biography(biography) : ''
      }
      
      setProfile(prev => ({ ...prev, ...request }))
      closeDialog()
      const db = database()
      await db.put({ id: 'profile', profile: request })
    } catch (error) {
      setError(error)
    }
  }

  const handleUploadImage = event => {
    fileInputRef.current.click()
  }

  const handleImageFile = event => {
    const { files } = event.target
    if (!files?.length) {
      return console.error('!files?.length was falsy')
    }
    setFile(files[0])
  }

  const createImage = async file => {
    const image = await loadImage(file)
    createCanvas(image)
  }

  const loadImage = file => {
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(file)
      const img = new Image()
      img.onload = () => {
        URL.revokeObjectURL(url)
        resolve(img)
      }
      img.onerror = (error) => {
        URL.revokeObjectURL(url)
        reject(error)
      }
      img.src = url
    })
  }

  const createCanvas = image => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = image.width
    canvas.height = image.height
    ctx.drawImage(image, 0, 0)
    URL.revokeObjectURL(image.src)
  }

  const loadDataFromStorage = async () => { // once this works move it to EditForm component
    const db = database()
    const data = await db.get('profile')
    
    console.log('cached profile data: ', data)
    
    if (data) {
      setCachedProfile(prev => ({ ...prev, ...data }))
    }
  }

  useEffect(() => {
    loadDataFromStorage()
  }, [])

  useEffect(() => {
    const picture = cachedProfile.picture || profile.picture
    if (picture) {
      createCanvas(picture)
    }
  }, [profile.picture, cachedProfile.picture])

  useEffect(() => {
    if (file) {
      createImage(file)
    }
  }, [file])
  
  return (
    <form className={styles.editForm} onSubmit={onSubmit} aria-label="update your profile">
      <canvas ref={canvasRef} />
      <input 
        id="upload" 
        ref={fileInputRef} 
        onChange={handleImageFile} 
        type="file" 
        name="upload"
        tabIndex="-1"
        accept="image/webp, image/png, image/jpeg, .webp, .png, .jpg, .jpeg"
        aria-hidden="true" />
      <button onClick={handleUploadImage} type="button" aria-label="update your profile picture">Upload Image</button>
      <Input
        id="username"
        type="text"
        label="Username"
        error={errorMessage}
        defaultValue={cachedProfile.username || profile.username}
        required
        aria-label="update your username" />
      <Input
        id="location"
        type="text"
        label="Location"
        error={errorMessage} // needs work
        defaultValue={cachedProfile.location || profile.location}
        required
        aria-label="update your location" />
      <label htmlFor="biography">Bio:</label>
      <textarea id="biography" name="biography" aria-label="update your bio">{cachedProfile.biography || profile.biography}</textarea>
      <button type="submit" disabled={loading}>Submit</button>
    </form>
  )
}

export default EditForm
