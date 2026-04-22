import { useState, useRef, useEffect } from 'react'
import DropdownButton from './DropdownButton/DropdownButton'
import DropdownList from './DropdownList/DropdownList'
import styles from './Dropdown.module.css'

function Dropdown({ id = 0, label = 'dropdown', items }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const buttonRef = useRef(null)
  const listRef = useRef(null)
  
  const open = () => {
    setIsOpen(true)
  }

  const close = () => {
    listRef.current.addEventListener(
      'transitionend', 
      () => setIsOpen(false), 
      { once: true }
    )
    setIsMounted(false)
  }

  const mountList = () => {
    setIsMounted(true)
  }
  
  useEffect(() => {
    return () => {
      setIsOpen(false)
    }
  }, [])

  return (
    <div　className={styles.dropdown}>
      <DropdownButton 
        id={id} 
        label={label} 
        isOpen={isOpen} 
        open={open} 
        close={close} 
        buttonRef={buttonRef}
      /> 
      {isOpen && <DropdownList 
        id={id} 
        items={items} 
        isOpen={isOpen}
        open={open} 
        close={close} 
        isMounted={isMounted}
        mountList={mountList} 
        buttonRef={buttonRef} 
        listRef={listRef}
      />}
    </div>
  )
}

export default Dropdown
