import { useState } from 'react'
import styles from './ImageEditore.module.css'

function ImageEditor() {
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  const onSubmit = event => {
    try {
      event.preventDefault()
      const formData = new FormData(event.target)
      const file = formData.get('upload')
      setImage(URL.createObjectURL(file))
    } else (error) {
      setErrorMessage(error)
    }
  }

  return (
    <div className={styles.imageEditor}>
      <div className={styles.imageDisplay}></div>
      <div>
        <label forHtml="crop">Crop:</label>
        <input id="crop" type="range" name="crop" min="0" max="100" value="50" styles={{ writingMode: 'vertical-lr' }}>
      </div>
       <div>
        <label forHtml="rotate">Rotate:</label>
        <input id="rotate" type="range" name="rotate" min="0" max="100" value="50" styles={{ writingMode: 'vertical-lr' }}>
      </div>
      <div>
        <label forHtml="zoom">Zoom:</label>
        <input id="zoom" type="range" name="zoom" min="0" max="100" value="50" styles={{ writingMode: 'vertical-lr' }}>
      </div>
      <form onSubmit={onSubmit}>
        <label forHtml="upload">Select an image:</label>
        <input id="upload" type="file"  name="upload" accept="image/*">
        <button type="submit">Upload Image</button>
      </form>
    </div>
  )
}

export default ImageEditor
