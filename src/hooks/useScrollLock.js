import { useEffect } from 'react'

function useScrollLock(isActive) {
  
  const lockScroll = () => {
    const { scrollY } = window
    // const html = document.documentElement
    const root = document.getElementById('root')
    root.classList.add('lockScroll')
    return () => {
      // root.removeAttribute('class')
      root.classList.remove('lockScroll') // test to see if leaves empty class attribute
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
