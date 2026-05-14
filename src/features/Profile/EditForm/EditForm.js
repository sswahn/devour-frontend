import { useState, useRef, useEffect } from 'react'
import useValidation from '../../../hooks/useValidation'
import styles from './EditForm.module.css'

// picture, username, location, biography

function EditForm({ profile, setProfile }) {
  const { validateUsername, validateImage } = useValidation()
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const canvasRef = useRef(null)
  const fileInputRef = useRef(null)

  const onSubmit = event => { // need to style image circular css
    event.preventDefault()

    const formData = new FormData(event.target)
    const biography = formData.get('biography')
    // biography is optional, image too, need a condition for that.
    const request = {
      picture: image && validateImage(image),
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
    setImage(files[0])
  }

  const loadImage = event => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = 170 // image.width
    canvas.height = 170 // image.height
    ctx.drawImage(image, 0, 0)
    URL.revokeObjectURL(image.src)
  }

  const loadImageError = event => {
    throw event.error
  }
  
  useEffect(() => {
    if (!image) {
      return
    }
    image.addEventListener('load', loadImage)
    image.addEventListener('error', loadImageError)
    return () => {
      image.removeEventListener('load', loadImage)
      image.removeEventListener('error', loadImageError)
    }
  }, [image])

  useEffect(() => {
    if (profile.picture) {
      setImage(profile.picture)
    }
  }, [profile.picture])
  
  return (
    <form className={styles.editForm} onSubmit={onSubmit} aria-label="update your profile">
      <div>
        <canvas ref={canvasRef} />
      </div>
      <div>
        <label htmlFor="upload">Profile picture:</label>
        <input 
          id="upload" 
          ref={fileInputRef} 
          onChange={handleImageFile} 
          type="file" 
          name="upload"
          accept="image/webp, image/png, image/jpeg, .webp, .png, .jpg, .jpeg" />
        <button onClick={handleUploadImage} type="button" aria-label="update your profile picture">Upload Image</button>
      </div>
    
      <label htmlFor="username">Username:</label>
      <input id="username" type="text" name="username" defaultValue={profile.username} aria-label="update your username" />
      <label htmlFor="location">Location:</label>
      <input id="location" type="text" name="location" defaultValue={profile.location} aria-label="update your location" />
      <label htmlFor="biography">Bio:</label>
      <textarea id="biography" name="biography" aria-label="update your bio">{profile.biography}</textarea>
      <button type="submit" disabled={loading}>Submit</button>
    </form>
  )
}

export default EditForm
