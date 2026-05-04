import { useState, useEffect } from 'react'
import styles from './Dialog.module.css'

function Dialog({ dialogRef, onClose, children }) {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => {
    if (!dialogRef.current.open) {
      setIsOpen(true)
    }
  }
  
  const close = () => {
    setIsOpen(false)
    onClose()
  }

  useEffect(() => {
    if (dialogRef.current) {
      open()
    }
  }, [])
 
  
  return (
    <dialog id="dialog" ref={dialogRef} className={styles.dialog} hidden={!isOpen} onClose={close}>
      {children}
    </dialog>
  )
}

export default Dialog
