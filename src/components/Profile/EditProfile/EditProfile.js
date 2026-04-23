

function EditProfile() {

  // dont use this form. 
  
  // instead use an "edit profile" button.
  // clicking it displays edit buttons next to each area, image, username, location etc.
  // user clicks the edit button and text becomes inputs with old data as placeholder
  // edit image opens upload and crop profile pick modal.
  
  return (
    <form className={styles.editProfile} onSubmit={onSubmit} aria-label="edit profile">
      
      <input name="username" type="text">
      <input name="password" type="password">
      
    </form>
  )
}
