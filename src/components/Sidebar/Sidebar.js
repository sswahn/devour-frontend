import { useState } from 'react'
import CloseButton from './CloseButton/CloseButton'
import styles from './Sidebar.module.css'

function Sidebar({ sidebarRef, content, isOpen, close }) {

  const onClick = event => {
    if (event.target === event.currentTarget) {
      close()
    }
  }
  
  return (
    <aside className={styles.sidebar} ref={sidebarRef}>
      <div className={`${isOpen ? styles.open : null}`}>
        <CloseButton close={close} />
        {content}
      </div>
    </aside>
  )
}

export default Sidebar
