import styles from './Dialog.module.css'

function Dialog() {

  // there will only be one, and children will be injected.
  // possibly via DialogContext
  
  return (
    <dialog className={styles.dialog}>
      
    </dialog>
  )
}

export default Dialog
