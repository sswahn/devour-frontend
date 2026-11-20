import SiccorsIcon from '../../../components/Icons/SiccorsIcon/SiccorsIcon'

function SpliceToolButton({ openSpliceTool }) {

  const onClick = event => {
    // haptic response code
    openSpliceTool()
  }

  return (
    <button className={styles.spliceToolButton} onClick={onClick} type="button" aria-label="open splice tool">
      <SiccorsIcon />
    </button>
  )
}

export default SpliceToolButton
