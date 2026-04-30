import PaperPlaneIcon from '../../../components/Icons/PaperPlaneIcon/PaperPlaneIcon'
import styles from './SubmitButton.module.css'

function SubmitButton({ text, close }) {
 
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
    <button className={styles.submitButton} onClick={onClick} onKeyDown={onKeyDown} type="button" aria-label={`submit new ${text}`}>
      <PaperPlaneIcon />
    </button>
  )
}

export default SubmitButton
