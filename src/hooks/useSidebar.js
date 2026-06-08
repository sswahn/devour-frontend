import { useContext } from 'react'
import { SidebarContext } from '../components/Providers/SidebarProvider'

function useSidebar() {
  const { openSidebar, closeSidebar } = useContext(SidebarContext)

  return { openSidebar, closeSidebar }
}

export default useSidebar
