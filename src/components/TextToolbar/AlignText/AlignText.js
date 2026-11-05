import AlignLeftIcon from '../../Icons/AlignLeftIcon/AlignLeftIcon'
import AlignCenterIcon from '../../Icons/AlignCenterIcon/AlignCenterIcon'
import AlignRightIcon from '../../Icons/AlignRightIcon/AlignRightIcon'
import styles from './AlignText.module.css'

function AlignText({ textAlign, setTextAlign }) {

  const onClick = event => {
    navigator.vibrate?.(50)
    setTextAlign(event.target.id)
  }

  return (
    <menu className={styles.alignText}>
      <li>
        <button className={textAlign === 'left' && styles.active} onClick={onClick}>
          <AlignLeftIcon />
        </button>
      </li>
      <li>
        <button className={textAlign === 'center' && styles.active} onClick={onClick}>
          <AlignCenterIcon />
        </button>
      </li>
      <li>
        <button className={textAlign === 'right' && styles.active} onClick={onClick}>
          <AlignRightIcon />
        </button>
      </li>
    </menu>
  )
}

export default AlignText
