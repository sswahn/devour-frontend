import { useState, useEffect } from 'react'
import CloseButton from './CloseButton/CloseButton'
import styles from './Sidebar.module.css'

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
        setIsOpen(true)
      })
    })
  }, [])  
  
  return (
    <aside className={styles.sidebar} ref={sidebarRef} onClick={onClick}>
      <div className={`${isOpen ? styles.open : undefined}`}>
        <CloseButton close={close} />
        {content}
      </div>
    </aside>
  )
}

export default Sidebar
