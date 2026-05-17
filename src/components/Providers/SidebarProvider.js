import { useState, useRef, useEffect, createContext } from 'react'
import Sidebar from '../Sidebar/Sidebar'

const SidebarContext = createContext(null)

function SidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState(null)
  const sidebarRef = useRef(null)

  const openSidebar = component => {
    console.log('openSidebar fired: ', component)
    setContent(component)
  }
  
  const closeSidebar = () => {
    setContent(null)
  }

  const action = () => {
    console.log('toggling sidebar.')
    
    content !== null ? setIsOpen(true) : setIsOpen(false)
  }

  useEffect(() => {
    action()
  }, [content])

  return (
    <SidebarContext.Provider value={{ openSidebar, closeSidebar }}>
      {children}
      {isOpen && <Sidebar sidebarRef={sidebarRef} content={content} close={closeSidebar} />}
    </SidebarContext.Provider>
  )
}

export { SidebarContext, SidebarProvider }
