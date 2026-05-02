import XmarkIcon from '../../../components/Icons/XmarkIcon/XmarkIcon'
import styles from './CloseButton.module.css'

function CloseButton({ text, close }) {
 
  const action = () => {
    close()
  }

  const onClick = event => {
    navigation.vibrate?.()
    action()
  }
  
  const onKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      action()
    }
  }

  return (
    <button className={styles.closeButton} onClick={onClick} onKeyDown={onKeyDown} type="button" aria-label={`submit new ${text}`}>
      <XmarkIcon size={18} />
    </button>
  )
}

export default CloseButton
