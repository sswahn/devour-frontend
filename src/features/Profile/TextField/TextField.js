import { useState, useRef, useEffect } from 'react'
import EditButton from '../EditButton/EditButton'
import CloseButton from '../CloseButton/CloseButton'
import styles from './TextField.module.css'

function TextField({ type, text, update }) {
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef(null)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  const updateField = event => {
    const value = inputRef.current.value.trim()
    if (text === value) {
      return
    }
    update({ [type]: value })
    // else make request to upate text, and update state of profile directly to avoid loading
  }

  useEffect(() => {
    if (inputRef.current) {
      updateField()
    }
  }, [isOpen])

  return (
    <div className={styles.textField}>
      {isOpen 
        ? <>
            <input id={`${text}-input`} ref={inputRef} type="text" inputMode="username" defaultValue={text} aria-label={`${text} input`} />
            <CloseButton text={text} close={close} />
          </>
        : <>
            <span>{text}</span>
            <EditButton text={text} open={open} />
          </>
      }
    </div>
  )
}

export default TextField
