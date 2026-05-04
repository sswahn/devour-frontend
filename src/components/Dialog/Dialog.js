import styles from './Dialog.module.css'

function Dialog({ dialogRef, close, isOpen, content }) { 
  return (
    <dialog id="dialog" ref={dialogRef} className={styles.dialog} hidden={!isOpen} onClose={close}>
      {content}
    </dialog>
  )
}

export default Dialog
