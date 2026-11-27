import UnderlineIcon from '../../Icons/UnderlineIcon/UnderlineIcon'
import styles from './UnderlineButton.module.css'

function UnderlineButton({ textDecoration, setTextDecoration }) {

  const onClick = event => {
    navigator.vibrate?.(50)
    setTextDecoration(prev => ({ ...prev, textDecoration: prev.textDecoration === 'underline' ? 'normal' : 'underline' }))
  }
  
  return (
    <button className={`${styles.underlineButton} ${textDecoration === 'underline' ? styles.isActive : ''}`} onClick={onClick} type="button" aria-label="underline">
      <UnderlineIcon />
    </button>
  )
}

export default UnderlineButton
