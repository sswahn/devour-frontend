import { useState, useRef } from 'react'
import styles from './Dialog.module.css'

function Dialog() {
  const [isOpen, setIsOpen] = useState(false)
  const dialogRef = useRef(null)

  const open = () => {}
  const close = () => {}
  
  // there will only be one, and children will be injected.
  // possibly via DialogContext
  
  return (
    <dialog id="dialog" ref={dialogRef} className={styles.dialog} hidden={!isOpen}>
      
    </dialog>
  )
}

export default Dialog
