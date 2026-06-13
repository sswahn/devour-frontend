import styles from './PreviousButton.module.css'

function PreviousButton() {

  const onClick = event => {
    
  }
  
  return (
    <button onClick={handlePrev} aria-label="Previous slide">
      <ChevronLeftIcon />
    </button>
  )
}

export default PreviousButton
