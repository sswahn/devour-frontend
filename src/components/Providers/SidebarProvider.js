import { useState, useRef, useEffect, createContext } from 'react'
import Sidebar from '../Sidebar/Sidebar'

const SidebarContext = createContext(null)

function SidebarProvider({ children }) {
  const [content, setContent] = useRef(null)
  const sidebarRef = useRef(null)

  const openSidebar = component => {
    
    console.log('openSidebar fired: ', component)
    
    setContent(component)
  }
  
  const closeSidebar = () => {
    setContent(null)
  }

  return (
    <SidebarContext.Provider value={{ openSidebar, closeSidebar }}>
      {children}
      {content !== null && <Sidebar sidebarRef={sidebarRef} content={content} close={closeSidebar} />}
    </SidebarContext.Provider>
  )
}

export { SidebarContext, SidebarProvider }
