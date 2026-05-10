import useScroll from '../../../hooks/useScroll'
import HomeIcon from '../../Icons/HomeIcon/HomeIcon'
import styles from './HomeButton.module.css'

function HomeButton() {
  const { scrollRef } = useScroll()
  
  const onClick = event => {
    navigator.vibrate?.(50)
    scrollRef.current.scrollTo({
      behavior: 'smooth',
      top: 0
    })
  }
  
  return (
    <button 
      className={styles.homeButton} 
      onClick={onClick} 
      type="button" 
      aria-label="scroll to top">
      <HomeIcon />  
    </button>
  )
}

export default HomeButton
