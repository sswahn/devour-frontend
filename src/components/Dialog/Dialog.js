import { overlay } from '../../config'
import CloseButton from '../CloseButton/CloseButton'
import styles from './Dialog.module.css'

function Dialog({ dialogRef, content, close }) { 

  const onClick = event => {
    if (event.target === event.currentTarget) {
      close()
    }
  }

  return (
    <dialog id="dialog" ref={dialogRef} className={styles.dialog} onClick={onClick}>
      <CloseButton overlay={overlay.dialog} close={close} />
      {content}
    </dialog>
  )
}

export default Dialog
