import PaperPlaneIcon from '../../../components/Icons/PaperPlaneIcon/PaperPlaneIcon'
import styles from './SubmitButton.module.css'

function SubmitButton() {

  const onClick = event => {
    // open Add text overlay
  }

  return (
    <button onClick={onClick} type="button" aria-label="submit video">
      <PaperPlaneIcon />
    </button>
  )
}

export default SubmitButton
