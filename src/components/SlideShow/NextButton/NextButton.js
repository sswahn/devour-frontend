import ChevronRightIcon from '../../Icons/ChevronLeftIcon/ChevronLeftIcon'
import styles from './NextButton.module.css'

function NextButton({ length, setCurrentIndex }) {

  const onClick = event => {
    console.log('clicked previous slide')
    setCurrentIndex(prev => (prev - 1 + length) % length) // data.length
  }
  
  return (
    <button className={styles.previousButton} onClick={onClick} aria-label="next slide">
      <ChevronRightIcon />
    </button>
  )
}

export default NextButton
