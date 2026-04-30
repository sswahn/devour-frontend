import { useState, useRef, useEffect } from 'react'
import useDebounce from '../../../hooks/useDebounce'
import EditButton from '../EditButton/EditButton'
import CloseButton from '../CloseButton/CloseButton'
import styles from './TextField.module.css'

function TextField({ text }) {
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef(null)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  const update = () => {
    
    console.log('text: ', text)
    console.log('inputRef.current.value: ', inputRef.current.value)
    console.log('text === inputRef.current.value: ', text === inputRef.current.value)
    
    if (text === inputRef.current.value) {
      return
    }
    // if (text === updateText) return
    // else make request
  }

  useEffect(() => {
    if (!isOpen) {
      update()
    }
  }, [isOpen])

  return (
    <div className={styles.textField}>
      {isOpen 
        ?  <>
             <input ref={inputRef} type="text" defaultValue={text} aria-label={`${text} input`} />
             <SubmitButton text={text} close={close} />
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
