import { useState, useRef, useEffect } from 'react'
import useDialog from '../../../hooks/useDialog'
import validate from '../../../utilities/validate'
import database from '../../../utilities/database'
import Input from '../../../components/Input/Input'
import styles from './EditForm.module.css'

function EditForm({ profile, setProfile }) {
  const { closeDialog } = useDialog()
  const [cachedProfile, setCachedProfile] = useState({
    username: '',
    location: '',
    biography: ''
  })
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const canvasRef = useRef(null)
  const fileInputRef = useRef(null)

  const onChange = ({ target }) => {
    const item = localStorage.getItem('profile')
    const data = JSON.parse(item)
    const json = JSON.stringify({ ...data, [target.id]: target.value })
    localStorage.setItem('profile', json)
  }

  const onSubmit = async event => { // need to style image circular css, or zoom/centering
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
      return
    }
    setFile(files[0])
    const db = database()
    db.put({ id: 'profile', picture: files[0] }).catch(alert)
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

  const loadDataFromStorage = async () => {
    const db = database()
    const { profile: { picture } } = await db.get('profile') ?? {}
    if (picture) {
      console.log('setting picture from cache')
      setFile(picture)
      createImage(picture)
    }

    const item = localStorage.getItem('profile')
    const cache = JSON.parse(item)
    if (storage) {
      console.log('setting text from cache')
      setCachedProfile(prev => ({ ...prev, ...cache }))
    }
  }

  useEffect(() => {
    loadDataFromStorage()
  }, [])

  useEffect(() => {
    if (cachedProfile.picture) {
      return createImage(cachedProfile.picture)
    }
    if (profile.picture) {
      return createCanvas(profile.picture)
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
        onChange={onChange}
        required
        aria-label="update your username" />
      <Input
        id="location"
        type="text"
        label="Location"
        error={errorMessage} // needs work
        defaultValue={cachedProfile.location || profile.location}
        onChange={onChange}
        required
        aria-label="update your location" />
      <label htmlFor="biography">Bio:</label>
      <textarea id="biography" name="biography" onChange={onChange} aria-label="update your bio">{cachedProfile.biography || profile.biography}</textarea>
      <button type="submit" disabled={loading}>Submit</button>
    </form>
  )
}

export default EditForm
