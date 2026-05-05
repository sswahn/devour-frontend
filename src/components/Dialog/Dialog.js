import styles from './Dialog.module.css'

function Dialog({ dialogRef, content }) { 
  return (
    <dialog id="dialog" ref={dialogRef} className={styles.dialog} closedby="any">
      {content}
    </dialog>
  )
}

export default Dialog
