import { useRef, useEffect } from 'react'
import scroll from '../utilities/scrollEngine'

function useScrollEffect() {
  const elementRef = useRef(null)
  const styleRef = useRef(null)
  const isHidden = useRef(false)
  const highVelocity = useRef(false)

  const scrollEffect = (element, style) => {
    elementRef.current = element
    styleRef.current = style
  }

  const setHidden = element => {
    if (!isHidden.current) {
      element.classList.add(styleRef.current)
      isHidden.current = true
    }
  }

  const setVisible = element => {
    if (isHidden.current) {
      element.classList.remove(styleRef.current)
      isHidden.current = false
    }
  }
  
  const updateElement = ({ deltaY, direction, velocity }) => {
    const element = elementRef.current
    if (!element) {
      return
    }

    if (!highVelocity.current && velocity > 90) {
      highVelocity.current = true
      return setVisible(element)
    }

    if (highVelocity.current && velocity === 0) {
      highVelocity.current = false
      return
    }

    if (highVelocity.current) {
      return
    }

    if (direction === 'down' && deltaY > 200) { // since css snap scrolling, timeout could be better here.
      return setHidden(element)
    }

    if (direction === 'up') {
      return setVisible(element)
    }
  }

  useEffect(() => {
    const unsubscribe = scroll.subscribe(updateElement)
    return () => {
      unsubscribe()
    }
  }, [])

  return { 
    scrollEffect 
  }
}

export default useScrollEffect
