import ScissorsIcon from '../../../components/Icons/ScissorsIcon/ScissorsIcon'
import styles from './SpliceToolMenuButton.module.css'

function SpliceToolMenuButton({ openSpliceToolMenu }) {

  const onClick = event => {
    navigator.vibrate?.(50)
    openSpliceToolMenu()
  }

  return (
    <button className={styles.spliceToolMenuButton} onClick={onClick} type="button" aria-label="open splice tool">
      <ScissorsIcon />
    </button>
  )
}

export default SpliceToolMenuButton
