import { useState, useRef, useEffect } from 'react'
import styles from './EditForm.module.css'

function EditForm({ picture, username, location, biography }) {
  const [image, setImage] = useState(null)
  const canvasRef = useRef(null)
  const fileInputRef = useRef(null)

  const onSubmit = event => {
    event.preventDefault()
    
  }

  const handleUploadImage = event => {
    fileInputRef.current.click()
  }

  const handleImageFile = event => {
    const files = fileInputRef.current.files
    if (!files.length) {
      return
    }
    setImage(files[0])
  }

  const loadImage = event => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = image.width
    canvas.height = image.height
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
    if (picture) {
      setImage(picture)
    }
  }, [picture])
  
  return (
    <form className={styles.editForm} onSubmit={onSubmit} aria-label="update your profile">
      <div>
        <canvas ref={canvasRef} />
      </div>
      <div>
        <label htmlFor="upload">Profile picture:</label>
        {/* update accept to only take selected image types: */}
        <input id="upload" ref={fileInputRef} onChange={handleImageFile} type="file" name="upload" accept="image/*" aria-label="update your profile picture" />
        {/* hide the input, use the button onClick to click the file input, then onChange on the input set image state */}
        <button onClick={handleUploadImage} type="button">Upload Image</button>
      </div>
    
      <label htmlFor="username">Username:</label>
      <input id="username" type="text" />
      <input id="username" type="text" name="username" defaultValue={username} aria-label="update your username" />
      <label htmlFor="location">Location:</label>
      <input id="location" type="text" name="location" defaultValue={location} aria-label="update your location" />
      <label htmlFor="biography">Bio:</label>
      <textarea id="biography" name="biography" rows="2" aria-label="update your bio">{biography}</textarea>
    </form>
  )
}

export default EditForm
