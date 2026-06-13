import NextButton from '../NextButton/NextButton'
import PreviousButton from '../PreviousButton/PreviousButton'
import styles from './SlideNav.module.css'

function SlideNav({ length, setCurrentIndex }) {
  return (
    <nav className={styles.slideNav}>
      <NextButton length={length} setCurrentIndex={setCurrentIndex} />
      <PreviousButton length={length} setCurrentIndex={setCurrentIndex} />
    </nav>
  )
}

export default SlideNav
