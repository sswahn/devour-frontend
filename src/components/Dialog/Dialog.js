import { useState } from 'react'
import styles from './Dialog.module.css'

function Dialog() {
  const [isOpen, setIsOpen] = useState(false)
  
  // there will only be one, and children will be injected.
  // possibly via DialogContext
  
  return (
    <dialog className={styles.dialog} hidden={!isOpen}>
      
    </dialog>
  )
}

export default Dialog
