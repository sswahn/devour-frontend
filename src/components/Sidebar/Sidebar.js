import { useState, useEffect } from 'react'
import CloseButton from '../CloseButton/CloseButton'
import styles from './Sidebar.module.css'

// consider removing, global sidebar not needed.

function Sidebar({ sidebarRef, content, close }) {
  const [isOpen, setIsOpen] = useState(false)
  
  const onClick = event => {
    if (event.target === event.currentTarget) {
      close()
    }
  }

  useEffect(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!isOpen) { 
          setIsOpen(true)
        }
      })
    })
  }, [])  
  
  return (
    <aside className={styles.overlay} ref={sidebarRef} onClick={onClick}>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <CloseButton overlay="sidebar" close={close} />
        {content}
      </div>
    </aside>
  )
}

export default Sidebar
