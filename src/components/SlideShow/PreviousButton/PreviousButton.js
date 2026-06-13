import ChevronLeftIcon from '../../Icons/ChevronLeftIcon/ChevronLeftIcon'
import styles from './PreviousButton.module.css'

function PreviousButton({ length, setCurrentIndex }) {

  const onClick = event => {
    console.log('clicked previous slide')
    setCurrentIndex(prev => (prev - 1 + length) % length) // data.length
  }
  
  return (
    <button className={styles.previousButton} onClick={handlePrev} aria-label="previous slide">
      <ChevronLeftIcon />
    </button>
  )
}

export default PreviousButton
