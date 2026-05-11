import { useState, useRef, useEffect } from 'react'

function EditForm({ username, location, biography }) {
  const [image, setImage] = useState(null)
  const canvasRef = useRef(null)
  const fileInputRef = useRef(null)

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
  
  const handleImageUpload = event => {
    const files = fileInputRef.current.files
    if (!files.length) {
      return
    }
    setImage(files[0])
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
  
  return (
    <form onSubmit={onSubmit}>
      <div>
        <canvas ref={canvasRef} />
      </div>
      <div>
        <label htmlFor="upload">Select an image:</label>
        <input id="upload" ref={fileInputRef} type="file"  name="upload" accept="image/*" />
        <button onClick={handleImageUpload} type="button">Upload Image</button>
      </div>
    
      <label htmlFor="username">Username:</label>
      <input id="username" type="text" />
      <input id="username" type="text" defaultValue={username} aria-label="update your username" />
      <label htmlFor="location">Location:</label>
      <input id="location" type="text" defaultValue={location} aria-label="update your location" />
      <label htmlFor="biography">Bio:</label>
      <input id="biography" type="text" defaultValue={biography} aria-label="update your bio" />
    </form>
  )
}

export default EditForm
