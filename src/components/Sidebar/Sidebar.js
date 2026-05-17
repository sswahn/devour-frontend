import { useState } from 'react'
import styles from 'Sidebar.module.css'

function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const close = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <aside className={`${styles.sidebar} ${isOpen && styles.open}`}>
      <div className={`${styles}`}>
        {/* <CloseButton close={close} /> */}
        {children}
      </div>
    </aside>
  )
}

export default Sidebar
