import useScroll from './useScroll'

function useScrollIntercept() {
  const { scrollRef } = useScroll()
  
  const handleScroll = deltaY => {
    if (!ticking) {
      ticking = true
      requestAnimationFrame(() => {
        scrollRef.current.scrollTop += deltaY * 0.2
        ticking = false
      })
    }
  }

  // 1. Mouse/Trackpad
  window.addEventListener('wheel', event => {
    event.preventDefault()
    handleScroll(event.deltaY)
  }, { passive: false })
  
  // 2. Touch (Mobile)
  let startY = 0
  let lastY = 0
  window.addEventListener('touchstart', event => {
    startY = event.touches[0].pageY
    lastY = startY
  }, { passive: false })

  window.addEventListener('touchmove', event => {
    event.preventDefault()
    const y = event.touches[0].pageY
    const delta = lastY - y
    handleScroll(deltaY)
    lastY = y
  }, { passive: false })
  
  // 3. Keyboard
  window.addEventListener('keydown', event => {
    const keys = { 'ArrowDown': 40, 'ArrowUp': -40, ' ': 200, 'PageDown': 400, 'PageUp': -400 }
    if (keys[event.key]) {
      event.preventDefault()
      handleScroll(keys[event.key])
    }
  })
}

export default useScrollIntercept
