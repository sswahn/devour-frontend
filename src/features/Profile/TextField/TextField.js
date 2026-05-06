import { useState, useRef, useEffect } from 'react'
import EditButton from '../EditButton/EditButton'
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
      {!isOpen // make this a component?
        ? <span>{text}</span>
        : <input id={`${type}-input`} ref={inputRef} type="text" inputMode="email" defaultValue={text} aria-label={`${type} input`} />
      }
      <EditButton field={type} isOpen={isOpen} open={open} close={close} />
    </div>
  )
}

export default TextField
