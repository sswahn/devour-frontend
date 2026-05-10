import { useRef, useEffect } from 'react'
import useScroll from './useScroll'

function useScrollIntercept() {
  const { scrollRef } = useScroll()
  const latestDeltaY = useRef(null)
  const prevY = useRef(0)
  const ticking = useRef(false)
  const velocity = useRef(0)
  const frame = useRef(null)
  const MULTIPLIER = 0.2
  const FRICTION = 0.9

  const animate = () => {
    const element = scrollRef.current

    if (!element) {
      frame.current = null
      return
    }

    velocity.current *= FRICTION

    if (Math.abs(velocity.current) < 0.1) {
      velocity.current = 0
      frame.current = null
      return
    }

    element.scrollTop += velocity.current

    frame.current = requestAnimationFrame(animate)
  }
  
  const interceptScroll = deltaY => {
    latestDeltaY.current = deltaY
    if (!ticking.current) {
      ticking.current = true
      requestAnimationFrame(() => {
        scrollRef.current.scrollTop += latestDeltaY.current * MULTIPLIER
        ticking.current = false
      })
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
