
function EditForm() {

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="username">Username:</label>
      <input id="username" type="text" />
      <label htmlFor="location">Location:</label>
      <input id="location" type="text" />
      <label htmlFor="biography">Bio:</label>
      <input id="biography" type="text" />
    </form>
  )
}

export default EditForm
