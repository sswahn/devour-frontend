

function EditProfile() {

  // consider editing the profile in place instead of using a boring form.
  return (
    <form className={styles.editProfile} onSubmit={onSubmit} aria-label="edit profile">
      
      <input name="username" type="text">
      <input name="password" type="password">
      
    </form>
  )
}
