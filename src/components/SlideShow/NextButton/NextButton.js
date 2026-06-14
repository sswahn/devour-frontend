import ChevronRightIcon from '../../Icons/ChevronRightIcon/ChevronRightIcon'
import styles from './NextButton.module.css'

function NextButton({ length, setCurrentIndex }) {

  const onClick = event => {
    console.log('clicked next slide')
    setCurrentIndex(prev => (prev + 1) % length) // data.length
  }
  
  return (
    <button className={styles.nextButton} onClick={onClick} aria-label="next slide">
      <ChevronRightIcon />
    </button>
  )
}

export default NextButton
