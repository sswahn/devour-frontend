import useScroll from './useScroll'

function useScrollIntercept() {
  const { scrollRef } = useScroll()
  const multiplier = 0.2
  
  const handleScroll = delta => {
    scrollRef.current.scrollTop += delta * multiplier
  }

  // 1. Mouse/Trackpad
  window.addEventListener('wheel', event => {
    event.preventDefault()
    if (!ticking) {
      ticking = true
      requestAnimationFrame(() => {
        handleScroll(event.deltaY)
        ticking = false
      })
    }
  }, { passive: false })
  
  // 2. Touch (Mobile)
  let touchStart
  window.addEventListener('touchstart', event => {
    touchStart = event.touches[0].pageY
  }, { passive: false })

  window.addEventListener('touchmove', event => {
    event.preventDefault()
    const touchEnd = event.touches[0].pageY
    const delta = touchStart - touchEnd
    handleManualScroll(delta)
    touchStart = touchEnd // Update for continuous movement
  }, { passive: false })
  
  // 3. Keyboard
  window.addEventListener('keydown', event => {
    const keys = { 'ArrowDown': 40, 'ArrowUp': -40, ' ': 200, 'PageDown': 400, 'PageUp': -400 }
    if (keys[event.key]) {
      event.preventDefault()
      handleManualScroll(keys[event.key])
    }
  })
}

export default useScrollIntercept
