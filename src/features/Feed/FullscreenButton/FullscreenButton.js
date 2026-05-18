import useFullscreen from '../../../hooks/useFullscreen'
import MaximizeIcon from '../../../components/Icons/MaximizeIcon/MaximizeIcon'
import MinimizeIcon from '../../../components/Icons/MinimizeIcon/MinimizeIcon'
import styles from './FullscreenButton.module.css'

function FullscreenButton({ enterFullScreen, exitFullScreen }) {
  const { isFullscreen } = useFullscreen()
  
  const onClick = event => {
    navigator.vibrate?.(50)
    !isFullscreen ? enterFullScreen() : exitFullScreen() 
  }

  // have aria pressed, and label accordingly.
  
  return (
    <button className={styles.fullscreenButton} onClick={onClick} type="button" aria-pressed={isFullscreen} aria-label="enter fullscreen mode">
      {isFullscreen ? <MinimizeIcon /> : <MaximizeIcon />}
    </button>
  )
}

export default FullscreenButton
