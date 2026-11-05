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
        <button id="left" className={textAlign === 'left' ? styles.active : ''} onClick={onClick} type="button" aria-label="align left">
          <AlignLeftIcon />
        </button>
      </li>
      <li>
        <button id="center" className={textAlign === 'center' ? styles.active : ''} onClick={onClick} type="button" aria-label="align center">
          <AlignCenterIcon />
        </button>
      </li>
      <li>
        <button id="right" className={textAlign === 'right' ? styles.active : ''} onClick={onClick} type="button" aria-label="align right">
          <AlignRightIcon />
        </button>
      </li>
    </menu>
  )
}

export default AlignText
