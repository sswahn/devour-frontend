import BarsIcon from '../../../components/Icons/BarsIcon/BarsIcon'
import styles from './MenuButton.module.css'

function MenuButton({ openMenu }) {

  const onClick = event => {
    navigation?.vibrate?.(50)
    openMenu()
  }

  return (
    <button className={styles.menuButton} onClick={onClick} type="button" aria-label="open editor menu">
      <BarsIcon />
    </button>
  )
}

export default MenuButton
