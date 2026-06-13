import NextButton from '../NextButton/NextButton'
import PreviousButton from '../PreviousButton/PreviousButton'
import styles from './SlideNav.module.css'

function SlideNav({ length, setIndex }) {

  return (
    <nav className={styles.slideNav}>
      <NextButton />
      <PreviousButton />
    </nav>
  )
}

export default SlideNav
