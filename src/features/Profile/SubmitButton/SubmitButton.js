import PaperPlaneIcon from '../../../components/Icons/PaperPlaneIcon/PaperPlaneIcon'
import styles from './SubmitButton.module.css'

function SubmitButton({ field, submit }) {
 // const [editorIsOpen, setEditorIsOpen] = useState()
  
  const action = () => {
    // display input
    // toggle state between
    // edit/submit
    submit(prev => !prev)
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
    <button className={styles.submitButton} onClick={onClick} onKeyDown={onKeyDown} type="button" aria-label={`submit new ${field}`}>
      <PaperPlaneIcon />
    </button>
  )
}

export default SubmitButton
