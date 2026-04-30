import { useState } from 'react'
import EditButton from '../EditButton'
import SubmitButton from '../SubmitButton'
import styles from './TextField.module.css'

function TextField({ text }) {
  const [isOpen, setIsOpen] = useState(false)

  const open = setIsOpen(true)
  const close = setIsOpen(false)

  return (
    <div className={styles.textField}>
      {isOpen 
        ?  <>
             <input type="text" value={text} />
             <SubmitButton close={close} />
           </>
        : <>
            <span>{text}</span>
            <EditButton open={open} />
          </>
      }
    </div>
  )
}

export default TextField
