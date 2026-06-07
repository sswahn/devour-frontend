import BarsIcon from '../../../components/Icons/BarsIcon/BarsIcon'
import styles from './MenuButton.module.css'

function MenuButton({ setMenuIsOpen }) {

  const onClick = event => {
    setMenuIsOpen(true)
  }

  return (
    <button className={styles.menuButton} onClick={onClick} type="button" aria-label="open editor menu">
      <BarsIcon />
    </button>
  )
}

export default MenuButton
