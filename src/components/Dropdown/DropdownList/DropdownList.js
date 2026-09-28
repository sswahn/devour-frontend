import { useState, useRef, useEffect } from  'react'
import ListItemButton from '../ListItemButton/ListItemButton'
import styles from './DropdownList.module.css'

function DropdownList({ id, items, isOpen, close, isMounted, mountList, listRef, buttonRef }) {
   
  const onMount = () => {
    if (!isMounted) {
      mountList()
      listRef.current.firstElementChild.firstElementChild.focus()
    }
  }

  useEffect(() => {
    // Wait for the next repaint to transition:
    const timer = requestAnimationFrame(onMount)
    return () => {
      cancelAnimationFrame(timer)
    }
  }, [])
  
  return (
    <ul 
      id={`dropdown-list-${id}`} 
      className={`${styles.dropdownList} ${isMounted ? styles.open : ''}`} 
      ref={listRef} 
      role="menu" 
      aria-labelledby={`dropdown-button-${id}`} 
      hidden={!isOpen}>
      {items?.map((item, index) => 
        <li key={index} role="none">
          <ListItemButton 
           buttonRef={buttonRef} 
           listRef={listRef}
           icon={item.icon}
           text={item.text} 
           method={item.method} 
           close={close} 
         />
        </li>
      )}
    </ul>
  )
}

export default DropdownList
