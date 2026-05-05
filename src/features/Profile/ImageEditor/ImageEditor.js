import { useState, useRef, useEffect } from 'react'
import useDialog from '../../../hooks/useDialog'
import styles from './ImageEditore.module.css'

function ImageEditor() {
  const { closeDialog } = useDialog()
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const canvasRef = useRef(null)

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

  const onSubmit = event => {
    try {
      event.preventDefault()
      setLoading(true)
      const formData = new FormData(event.target)
      const file = formData.get('upload')
      const image = new Image()
      image.src = URL.createObjectURL(file)
      setImage(image)
    } catch (error) {
      setErrorMessage(error)
    } finally {
      setLoading(false)
    }
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
    <div className={styles.imageEditor}>
      <div className={styles.imageDisplay}>
        <canvas ref={canvasRef} style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
      <div>
        <label htmlFor="crop">Crop:</label>
        <input id="crop" type="range" name="crop" min="0" max="100" value="50" styles={{ writingMode: 'vertical-lr' }}>
      </div>
       <div>
        <label htmlFor="rotate">Rotate:</label>
        <input id="rotate" type="range" name="rotate" min="0" max="100" value="50" styles={{ writingMode: 'vertical-lr' }}>
      </div>
      <div>
        <label htmlFor="zoom">Zoom:</label>
        <input id="zoom" type="range" name="zoom" min="0" max="100" value="50" styles={{ writingMode: 'vertical-lr' }}>
      </div>
      <form onSubmit={onSubmit}>
        <label htmlFor="upload">Select an image:</label>
        <input id="upload" type="file"  name="upload" accept="image/*">
        <button type="submit">Upload Image</button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  )
}

export default ImageEditor
