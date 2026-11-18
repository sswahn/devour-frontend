import { Fragment } from 'react'
import styles from './Card.module.css'

function Card({ activeCard }) {

  return (
    <Fragment>
      {activeCard && 
        <div className={styles.card} style={activeCard.background.style}>
          {activeCard.text?.value && <p style={activeCard.text.style}>{activeCard.text.value}</p>}
        </div
      }
    </Fragment>
  )
}

export default Card
