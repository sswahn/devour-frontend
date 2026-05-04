import { useState, useRef } from 'react'
import styles from './Dialog.module.css'

function Dialog() {
  const [isOpen, setIsOpen] = useState(false)
  const dialogRef = useRef(null)

  const open = () => {
    dialogRef.current.showModal()
  }
  
  const close = () => {
    dialogRef.current.close()
  }
  
  // there will only be one, and children will be injected.
  // possibly via DialogContext


  // move dialog into the provider, and delete this component
  
  return (
    <dialog id="dialog" ref={dialogRef} className={styles.dialog} hidden={!isOpen}>
      
    </dialog>
  )
}

export default Dialog
