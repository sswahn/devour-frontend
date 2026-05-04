import styles from './Dialog.module.css'

function Dialog({ dialogRef, close, content }) { 
  return (
    <dialog id="dialog" ref={dialogRef} className={styles.dialog} onClose={close}>
      {content}
    </dialog>
  )
}

export default Dialog
