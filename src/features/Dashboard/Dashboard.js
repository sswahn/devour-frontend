import { overlays } from '../../config'
import styles from './Dashboard.module.css'

function Dashboard() {

  return (
    <section id={overlays.dashboard} className={styles.dashboard}>
      Dashboard
    </section>
  )
}

export default Dashboard
