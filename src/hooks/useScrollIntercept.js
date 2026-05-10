import { useRef, useEffect } from 'react'
import useScroll from './useScroll'

function useScrollIntercept() {
  const { scrollRef } = useScroll()
  const targetScroll = useRef(0)
  const prevY = useRef(0)
  const velocity = useRef(0)
  const frame = useRef(null)
  const MULTIPLIER = 0.2 // Slows scroll
  const SMOOTHING = 0.08 // Lower: heavier, thicker, more delayed, Higher: tighter, more responsive
  const MAX_STEP = 80

  const animate = () => {
    const element = scrollRef.current
    const scrollTop = element.scrollTop
    const distance = targetScroll.current - scrollTop
    if (Math.abs(distance) < 0.1) { // Stop animation when close enough
      frame.current = null
      return
    }
    const step = Math.max(-MAX_STEP, Math.min(MAX_STEP, distance * smoothing)) // Smoothed movement
    element.scrollTop += step
    frame.current = requestAnimationFrame(animate)
  }

  const interceptScroll = deltaY => {
    const newScroll = targetScroll.current + deltaY * MULTIPLIER
    const maxScroll = element.scrollHeight - element.clientHeight // Clamp target scroll
    targetScroll.current = Math.max(0, Math.min(newScroll, maxScroll))
    // Start animation loop
    if (!frame.current) {
      frame.current = requestAnimationFrame(animate)
    }
  }

  // 1. Mouse/Trackpad
  const onWheel = event => {
    event.preventDefault()
    interceptScroll(event.deltaY)
  }
  
  // 2. Touch (Mobile)
  const onTouchStart = event => {
    prevY.current = event.touches[0].pageY
  }

  const onTouchMove = event => {
    event.preventDefault()
    const y = event.touches[0].pageY
    const deltaY = prevY.current - y
    interceptScroll(deltaY)
    prevY.current = y
  }
  
  // 3. Keyboard
  const onKeyDown = event => {
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
  }

  useEffect(() => {
    const element = scrollRef.current
    if (!element) {
      return
    }
    element.addEventListener('wheel', onWheel, { passive: false })
    element.addEventListener('touchstart', onTouchStart, { passive: false })
    element.addEventListener('touchmove', onTouchMove, { passive: false })
    element.addEventListener('keydown', onKeyDown)
    return () => {
      element.removeEventListener('wheel', onWheel, { passive: false })
      element.removeEventListener('touchstart', onTouchStart, { passive: false })
      element.removeEventListener('touchmove', onTouchMove, { passive: false })
      element.removeEventListener('keydown', onKeyDown)
    }
  }, [])
}

export default useScrollIntercept
