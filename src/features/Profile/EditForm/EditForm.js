
function EditForm({ username, location, biography }) {

  return (
    <form onSubmit={onSubmit}>
      <div>
        <canvas />
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
