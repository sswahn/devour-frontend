import FullscreenIcon from '../../../components/Icons/FullscreenIcon/FullscreenIcon'
import styles './FullscreenButton.module.css'

function FullscreenButton() {

  const action = () => {
    // request fullscreen
    // request lock portrait
    // make sure current video focused
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
    <button className={styles.fullscreenButton} onClick={onClick} onKeyDown={onKeyDown} type="button" aria-label="enter fullscreen mode">
      <FullscreenIcon />
    </button>
  )
}

export default FullscreenButton
