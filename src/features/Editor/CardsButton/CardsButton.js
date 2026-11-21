import LayerGroupIcon from '../../../components/Icons/LayerGroupIcon/LayerGroupIcon'
import styles from './CardsButton.module.css'

function CardsButton({ openCardsMenu }) {

  const onClick = event => {
    navigator.vibrate?.(50)
    openCardsMenu()
  }
  
  return (
    <button className={styles.cardsButton} onClick={onClick} type="button" aria-label="open card menu">
      <LayerGroupIcon />
    </button>
  )
}

export default CardsButton
