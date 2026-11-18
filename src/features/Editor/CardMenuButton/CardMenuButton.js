import LayerGroupIcon from '../../../components/Icons/LayerGroupIcon/LayerGroupIcon'
import styles from './CardMenuButton.module.css'

function CardMenuButton({ openCardMenu }) {

  const onClick = event => {
    openCardMenu()
  }
  
  return (
    <button className={styles.cardMenuButton} onClick={onClick} type="button" aria-label="open card menu">
      <LayerGroupIcon />
    </button>
  )
}

export default CardMenuButton
