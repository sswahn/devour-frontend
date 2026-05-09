import styles from './Dialog.module.css'

function Dialog({ dialogRef, content, close }) { 

  const onClick = event => {
    if (event.target === event.currentTarget) {
      close()
    }
  }

  return (
    <dialog id="dialog" ref={dialogRef} className={styles.dialog} onClick={onClick}>
      {content}
    </dialog>
  )
}

export default Dialog
