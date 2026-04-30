import { useState } from 'react'
import useDebounce from '../../../hooks/useDebounce'
import EditButton from '../EditButton/EditButton'
import SubmitButton from '../SubmitButton/SubmitButton'
import styles from './TextField.module.css'

function TextField({ text }) {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  const onChange = useDebounce(event => {
    // make request once finished typing
    console.log('debounced onChange: ', event.target.value)
  }, 500)

  return (
    <div className={styles.textField}>
      {isOpen 
        ?  <>
             <input type="text" value={text} onChange={onChange} aria-label={`${text} input`} />
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
