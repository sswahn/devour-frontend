import { useState, useRef, useEffect } from 'react'
import EditButton from '../EditButton/EditButton'
import styles from './TextField.module.css'

function TextField({ type, text, update }) {
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef(null)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  const action = () => {
    isOpen ? close() : open()
  }

  const updateField = event => {
    const value = inputRef.current?.value.trim()
    if (text === value) {
      return
    }
    update({ [type]: value })
    // make request asynchronously
  }

  const onKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      action()
    }
  }
  
  useEffect(() => {
    updateField()
  }, [isOpen])

  return (
    <div className={styles.textField}>
      {!isOpen // make this a component?
        ? <span>{text}</span>
        : <input id={`${type}-input`} ref={inputRef} onKeyDown={onKeyDown} type="text" inputMode="email" defaultValue={text} aria-label={`input your new ${type}`} />
      }
      <EditButton field={type} isOpen={isOpen} open={open} close={close} />
    </div>
  )
}

export default TextField
