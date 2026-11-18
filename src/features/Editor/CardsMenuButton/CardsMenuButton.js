import LayerGroupIcon from '../../../components/Icons/LayerGroupIcon/LayerGroupIcon'
import styles from './CardsMenuButton.module.css'

function CardsMenuButton({ openCardMenu }) {

  const onClick = event => {
    openCardMenu()
  }
  
  return (
    <button className={styles.cardsMenuButton} onClick={onClick} type="button" aria-label="open card menu">
      <LayerGroupIcon />
    </button>
  )
}

export default CardsMenuButton
