import { useState } from 'react'
import CloseButton from './CloseButton/CloseButton'
import styles from 'Sidebar.module.css'

// like dialog, needs a context provider, at least for open
// probably close for off click, and just pass close to Sidebar as well.

function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const close = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <aside className={`${styles.sidebar} ${isOpen && styles.open}`}>
      <div className={`${styles}`}>
        <CloseButton close={close} />
        {children}
      </div>
    </aside>
  )
}

export default Sidebar
