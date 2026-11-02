import UnderlineIcon from '../../Icons/UnderlineIcon/UnderlineIcon'
import styles from './UnderlineButton.module.css'

function UnderlineButton({ setStyle }) {

  const onClick = event => {
    navigator.vibrate?.(50)
    setStyle('underline')
  }
  
  return (
    <button className={styles.underlineButton} onClick={onClick} type={button} aria-label="underline">
      <UnderlineIcon />
    </button>
  )
}

export default UnderlineButton
