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
    <menu className={`
      ${textAlign === 'left' && styles.alignLeft}
      ${textAlign === 'center' && styles.alignCenter}
      ${textAlign === 'right' && styles.alignRight}
    `.trim()}>
      <li>
        <button id="left" onClick={onClick}>
          <AlignLeftIcon />
        </button>
      </li>
      <li>
        <button id="center" onClick={onClick}>
          <AlignCenterIcon />
        </button>
      </li>
      <li>
        <button id="right" onClick={onClick}>
          <AlignRightIcon />
        </button>
      </li>
    </menu>
  )
}

export default AlignText
