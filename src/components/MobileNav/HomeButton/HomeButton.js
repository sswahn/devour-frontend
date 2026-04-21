import HomeIcon from '../../Icons/HomeIcon/HomeIcon'
import styles from './HomeButton.module.css'

function HomeButton() {

  const action = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0
    })
  }
  
  const onClick = event => {
    navigator.vibrate?.(50)
    action()
  }

  const onKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      action()
    }
  }
  
  return (
    <button 
      className={styles.homeButton} 
      onClick={onClick} 
     // onKeyDown={onKeyDown} 
      type="button" 
      aria-label="scroll to top">
      <HomeIcon />  
    </button>
  )
}

export default HomeButton
