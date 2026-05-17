import styles from './CloseButton.modules.css'

function CloseButton({ close }) {

  const onClick = event => {
    navigator.vibrate?.()
    close()
  }
  
  return (
    <button className={styles.closeButton} onClick={onClick} type="button" aria-label="close sidebar"></button>
  )
}

export default CloseButton
