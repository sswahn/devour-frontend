import { overlay } from '../../config'
import styles from './Dashboard.module.css'

function Dashboard() {

  return (
    <section id={overlay.dashboard} className={styles.dashboard}>
      Dashboard
    </section>
  )
}

export default Dashboard
