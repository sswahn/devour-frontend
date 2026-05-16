import XmarkIcon from '../../../components/Icons/XmarkIcon/XmarkIcon'
import styles from './CloseButton.module.css'

function CloseButton({ close }) {

  const onClick = event => {
    navigation.vibrate?.()
    close()
  }
 
  return (
    <button className={styles.closeButton} onClick={onClick} type="button" aria-label="close dialog">
      <XmarkIcon />
    </button>
  )
}

export default CloseButton
