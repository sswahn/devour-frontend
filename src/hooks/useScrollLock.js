import { useEffect } from 'react'
import useOverlay from './useOverlay'

function useScrollLock() {
  const { isActive } = useOverlay()
  
  const lockScroll = () => {
    const { scrollY } = window
    const html = document.documentElement
    html.classList.add('lockScroll')
    return () => {
      html.removeAttribute('class')
      window.scrollTo(0, scrollY)
    }
  }
  
  useEffect(() => {
    if (!isActive) {
      return
    }
    const unlockScroll = lockScroll()
    return () => {
      unlockScroll()
    }
  }, [isActive])

}

export default useScrollLock
