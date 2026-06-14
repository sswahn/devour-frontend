import { useEffect } from 'react'

function useScrollLock(isActive) {
  
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
    if (!isActive) { // && isActive !== 'notifications'
      return
    }
    const unlockScroll = lockScroll()
    return () => {
      unlockScroll()
    }
  }, [isActive])

}

export default useScrollLock
