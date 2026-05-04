import styles from './Dialog.module.css'

function Dialog({ dialogRef, close, isOpen, children }) { 
  return (
    <dialog id="dialog" ref={dialogRef} className={styles.dialog} hidden={!isOpen} onClose={close}>
      {children}
    </dialog>
  )
}

export default Dialog
