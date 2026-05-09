import styles from './Dialog.module.css'

function Dialog({ dialogRef, content, close }) { 

  const onClick = event => {
    if (event.target === dialogRef.current) {
      close()
    }
  }

  console.log('is recognizeed as modal opened with showModal()', dialogRef.current?.matches(':modal'))
  
  return (
    <dialog id="dialog" ref={dialogRef} className={styles.dialog} onClick={onClick}>
      {content}
    </dialog>
  )
}

export default Dialog
