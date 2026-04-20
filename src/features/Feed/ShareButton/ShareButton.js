
function ShareButton() {

  const action = () => {
    navigator.vibrate(50)
    navigator.share()
  }
  
  const onClick = event => {
    action()
  }
  
  const onKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      action()
    }
  }
  
  return (
    <button className={styles.shareButton} onClick={} onKeyDown={onKeyDown} type="button" aria-label="share this video">
      <ShareIcon />
    </button>
  )
}
