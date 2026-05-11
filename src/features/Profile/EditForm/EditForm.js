import { useRef } from 'react'

function EditForm({ username, location, biography }) {
  const canvasRef = useRef(null)

  const handleImageUpload = event => {
    
  }
  
  return (
    <form onSubmit={onSubmit}>
      <div>
        <canvas ref={canvasRef} />
      </div>
      <div>
        <label htmlFor="upload">Select an image:</label>
        <input id="upload" type="file"  name="upload" accept="image/*" />
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
