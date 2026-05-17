import { useState, useRef, createContext } from 'react'
import Sidebar from '../Sidebar/Sidebar'

const SidebarContext = createContext(null)

function SidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef(null)
  const sidebarRef = useRef(null)

  const openSidebar = component => {
    
    console.log('openSidebar fired: ', component)
    
    contentRef.current = component
    setIsOpen(true)
  }
  
  const closeSidebar = () => {
    contentRef.current = null
    setIsOpen(false)
  }


  return (
    <SidebarContext.Provider value={{ openSidebar, closeSidebar }}>
      {children}
      {isOpen && <Sidebar sidebarRef={sidebarRef} content={contentRef.current} close={closeSidebar} />}
    </SidebarContext.Provider>
  )
}

export { SidebarContext, SidebarProvider }
