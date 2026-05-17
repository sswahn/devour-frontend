import { useState, useRef, useEffect, createContext } from 'react'
import Sidebar from '../Sidebar/Sidebar'

const SidebarContext = createContext(null)

function SidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState(null)
  const sidebarRef = useRef(null)

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
    <SidebarContext.Provider value={{ openSidebar, closeSidebar }}>
      {children}
      <Sidebar sidebarRef={sidebarRef} content={content} close={closeSidebar} />
    </SidebarContext.Provider>
  )
}

export { SidebarContext, SidebarProvider }
