import { useState, useRef, useEffect } from 'react'

function useScrollIntercept() {
  const [isSet, setIsSet] = useState(false)
  const targetElement = useRef(null)
  const targetScroll = useRef(0)
  const prevY = useRef(0)
  const frame = useRef(null)
 // const MULTIPLIER = 0.2 // Slows scroll - if to slow, try 0.3
 // const SMOOTHING = 0.08 // Lower: heavier, thicker, more delayed, Higher: tighter, more responsive - try 0.12 if change above
//  const MAX_STEP = 80
  const MULTIPLIER = 1
const SMOOTHING = 0.25
const MAX_STEP = 240

  const setTargetElement = element => {
    targetElement.current = element
    addEventListeners(element)
  }

  const animate = () => {
    const element = targetElement.current
    if (!element) {
      frame.current = null
      return
    }

    console.log('animating...')
    
    const distance = targetScroll.current - element.scrollTop
    // Snap-friendly settling: yield control back to the browser near the end
    if (Math.abs(distance) < 1) {
      targetScroll.current = element.scrollTop
      frame.current = null
      return
    }
    // Smoothed movement
    const step = Math.max(-MAX_STEP, Math.min(MAX_STEP, distance * SMOOTHING))


    console.log('STEP: ', step)
    
    //element.scrollTop += step

    element.scrollTo({
      top: step,
      behavior: 'auto'
    })

    
    frame.current = requestAnimationFrame(animate)
  }

  const interceptScroll = deltaY => {
    const element = targetElement.current
    if (!element) {
      return
    }
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

  const onScroll = event => {
    const element = targetElement.current
    if (!element) {
      return
    }

    console.log('In onScroll.')
    
    const scrollTop = element.scrollTop
    const difference = Math.abs(scrollTop - targetScroll.current)
    if (!frame.current || difference > 24) { // Browser/snap took over
      targetScroll.current = scrollTop

      console.log('In onScroll bottom condition.')
    }
  }

  const addEventListeners = element => {
    element.addEventListener('wheel', onWheel, { passive: false })
    element.addEventListener('touchstart', onTouchStart, { passive: false })
    element.addEventListener('touchmove', onTouchMove, { passive: false })
    element.addEventListener('keydown', onKeyDown)
    element.addEventListener('scroll', onScroll)
  }

  /*
  useEffect(() => {
    const element = targetElement.current
    if (!element) {
      return
    }
    element.addEventListener('wheel', onWheel, { passive: false })
    element.addEventListener('touchstart', onTouchStart, { passive: false })
    element.addEventListener('touchmove', onTouchMove, { passive: false })
    element.addEventListener('keydown', onKeyDown)
    element.addEventListener('scroll', onScroll)
    return () => {
      element.removeEventListener('wheel', onWheel, { passive: false })
      element.removeEventListener('touchstart', onTouchStart, { passive: false })
      element.removeEventListener('touchmove', onTouchMove, { passive: false })
      element.removeEventListener('keydown', onKeyDown)
      element.removeEventListener('scroll', onScroll)
      if (frame.current) {
        cancelAnimationFrame(frame.current)
      }
    }
  }, [isSet])
  */

  return { setTargetElement }
}

export default useScrollIntercept
