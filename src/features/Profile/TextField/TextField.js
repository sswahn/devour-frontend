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
    const value = inputRef.current?.value.trim()
    if (text === value) {
      return
    }
    update({ [type]: value })
    // make request asynchronously
  }

  useEffect(() => {
    updateField()
  }, [isOpen])

  return (
    <div className={styles.textField}>
      {isOpen 
        ? <>
            <input id={`${type}-input`} ref={inputRef} type="text" inputMode="username" defaultValue={text} aria-label={`${type} input`} />
            <CloseButton field={type} close={close} />
          </>
        : <>
            <span>{text}</span>
            <EditButton field={type} open={open} />
          </>
      }
    </div>
  )
}

export default TextField
