import { useState, useRef, useEffect } from 'react'
import Input from '../../../components/Input/Input'
import useValidation from '../../../hooks/useValidation'
import styles from './EditForm.module.css'

function EditForm({ profile, setProfile }) {
  const { validateUsername, validateImage } = useValidation()
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const canvasRef = useRef(null)
  const fileInputRef = useRef(null)

  const onSubmit = event => { // need to style image circular css
    event.preventDefault()

    return;
    
    const formData = new FormData(event.target)
    const biography = formData.get('biography')
    // biography is optional, image too, need a condition for that.
    // must store the raw file.
    const request = {
      picture: file && validateImage(file),
      username: validateUsername(formData.get('username')),
      location: formData.get('location'), // validate with mapbox
      biography: biography // && validateBiography(biography)
    }

    setProfile(prev => ({ ...prev, ...request }))
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

  useEffect(() => {
    if (profile.picture) {
      createCanvas(profile.picture)
    }
  }, [profile.picture])

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
        type="type"
        label="Username"
        autoComplete="username webauthn"
        error={errorMessage}
        defaultValue={profile.username}
        required
        aria-label="update your username" />
        
        {/*<input id="username" type="text" name="username" defaultValue={profile.username} aria-label="update your username" /> */}
      <label htmlFor="location">Location:</label>
      <input id="location" type="text" name="location" defaultValue={profile.location} aria-label="update your location" />
      <label htmlFor="biography">Bio:</label>
      <textarea id="biography" name="biography" aria-label="update your bio">{profile.biography}</textarea>
      <button type="submit" disabled={loading}>Submit</button>
    </form>
  )
}

export default EditForm
