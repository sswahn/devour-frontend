import { useState, useRef, useEffect } from 'react'
import EditButton from '../EditButton/EditButton'
import CloseButton from '../CloseButton/CloseButton'
import styles from './TextField.module.css'

function TextField({ text }) {
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef(null)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  const update = () => {
    if (text === inputRef.current.value.trim()) {
      return
    }
    // else make request to upate text, and update state of profile directly to avoid loading
  }

  useEffect(() => {
    if (inputRef.current) {
      update()
    }
  }, [isOpen])

  return (
    <div className={styles.textField}>
      {isOpen 
        ? <>
            <input ref={inputRef} type="text" inputMode="username" defaultValue={text} aria-label={`${text} input`} />
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
