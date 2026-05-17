import { useState, useRef, useEffect, createContext } from 'react'
import Sidbar from '../Sidbar/Sidbar'

const SidbarContext = createContext(null)

function SidbarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState(null)
  const sidbarRef = useRef(null)

  const openSidebar = component => {
    setContent(component)
  }
  
  const closeSidebar = () => {
    setContent(null)
  }

  const action = () => {
    const sidebar = sidebarRef.current
    if (sidebar) {
      content !== null 
        ? setIsOpen(true) 
        : setIsOpen(false)
    }
  }

  useEffect(() => {
    action()
  }, [content])

  return (
    <SidbarContext.Provider value={{ openSidebar, closeSidebar }}>
      {children}
      <Sidbar sidebarRef={sidebarRef} content={content} close={closeSidebar} />
    </SidbarContext.Provider>
  )
}

export { SidbarContext, SidbarProvider }
