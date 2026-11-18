import styles from './Card.module.css'

function Card({ activeCard }) {

  return (
    <div className={styles.card} style={activeCard.background.style}>
      {activeCard.text && <p style={activeCard.text.style}>{activeCard.text.value}</p>}
      {activeCard.upload && <img src={activeCard.upload.url} alt={activeCard.upload.alt} style={activeCard.upload.style} />}
    </div>
  )
}

export default Card
