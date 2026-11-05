import AlignLeftIcon from '../../Icons/AlignLeftIcon/AlignLeftIcon'
import AlignCenterIcon from '../../Icons/AlignCenterIcon/AlignCenterIcon'
import AlignRightIcon from '../../Icons/AlignRightIcon/AlignRightIcon'
import styles from './AlignText.module.css'

function AlignText({ setTextAlign }) {

  const onClick = event => {
    navigator.vibrate?.(50)
    setTextAlign(event.target.id)
  }

  return (
    <menu>
      <li>
        <button id="alignLeft" onClick={onClick}>
          <AlignLeftIcon />
        </button>
      </li>
      <li>
        <button id="alignCenter" onClick={onClick}>
          <AlignCenterIcon />
        </button>
      </li>
      <li>
        <button id="alignRight" onClick={onClick}>
          <AlignRightIcon />
        </button>
      </li>
    </menu>
  )
}

export default AlignText
