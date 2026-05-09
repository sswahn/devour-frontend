import styles from './Dialog.module.css'

function Dialog({ dialogRef, content, close }) { 

  const onClick = event => {
    if (event.target === dialogRef.current) {
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
