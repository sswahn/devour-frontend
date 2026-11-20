import ScissorsIcon from '../../../components/Icons/ScissorsIcon/ScissorsIcon'
import styles from './SpliceToolButton.module.css'

function SpliceToolButton({ openSpliceTool }) {

  const onClick = event => {
    navigator.vibrate?.(50)
    openSpliceTool()
  }

  return (
    <button className={styles.spliceToolButton} onClick={onClick} type="button" aria-label="open splice tool">
      <ScissorsIcon />
    </button>
  )
}

export default SpliceToolButton
