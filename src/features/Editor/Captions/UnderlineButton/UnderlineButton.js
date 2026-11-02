import UnderlineIcon from '../../../../components/Icons/UnderlineIcon/UnderlineIcon'
import styles from './UnderlineButton.module.css'

function UnderlineButton({ setUnderline }) {

  const onClick = event => {
    navigator.vibrate?.(50)
    setUnderline(prev => !prev)
  }
  
  return (
    <button className={styles.underlineButton} onClick={onClick} type={button} aria-label="underline">
      <UnderlineIcon />
    </button>
  )
}

export default UnderlineButton
