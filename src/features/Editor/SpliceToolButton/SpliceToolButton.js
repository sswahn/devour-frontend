import ScissorsIcon from '../../../components/Icons/SiccorsIcon/SiccorsIcon'
import styles from './SpliceToolButton.module.css'

function SpliceToolButton({ openSpliceTool }) {

  const onClick = event => {
    // haptic response code
    openSpliceTool()
  }

  return (
    <button className={styles.spliceToolButton} onClick={onClick} type="button" aria-label="open splice tool">
      <ScissorsIcon />
    </button>
  )
}

export default SpliceToolButton
