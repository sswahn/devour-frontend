import { useRef } from 'react'
import useScroll from './useScroll'

function useScrollIntercept() {
  const { scrollRef } = useScroll()
  const latestDeltaY = useRef(null)
  const ticking = useRef(false)
  
  const interceptScroll = deltaY => {
    latestDeltaY.current = deltaY
    if (!ticking.current) {
      ticking.current = true
      requestAnimationFrame(() => {
        scrollRef.current.scrollTop += latestDeltaY.current * 0.2
        ticking.current = false
      })
    }
  }

  // 1. Mouse/Trackpad
  window.addEventListener('wheel', event => {
    event.preventDefault()
    interceptScroll(event.deltaY)
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
    const deltaY = lastY - y
    interceptScroll(deltaY)
    lastY = y
  }, { passive: false })
  
  // 3. Keyboard
  window.addEventListener('keydown', event => {
    const map = {
      'ArrowDown': 40, 
      'ArrowUp': -40, 
      'PageDown': 400, 
      'PageUp': -400,
      ' ': 200, 
    }
    if (map[event.key]) {
      event.preventDefault()
      interceptScroll(map[event.key])
    }
  })
}

export default useScrollIntercept
