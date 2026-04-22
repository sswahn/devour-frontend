import { useState, useEffect } from 'react'

function useListControlKeys() {
  const [list, setList] = useState(null)
  const [methods, setMethods] = useState({})
  
  const focusPrev = button => {
    button === list.firstElementChild.firstElementChild
      ? list.lastElementChild.firstElementChild.focus()
      : button.parentElement.previousElementSibling.firstElementChild.focus()
  }

  const focusNext = button => {
    button === list.lastElementChild.firstElementChild
      ? list.firstElementChild.firstElementChild.focus() 
      : button.parentElement.nextElementSibling.firstElementChild.focus()
  }

  // 3 methods: enter(), close(), escape()

  const onKeyDown = event => {
    event.stopPropagation()
    switch (event.key) {
      case 'Enter':
        event.preventDefault()
        return methods?.enter()
      case 'Tab':
        return methods?.close()  // Standard behavior (no preventDefault): Close menu if user tabs out
      case 'Escape':
        event.preventDefault()
        return methods?.escape()
      case 'ArrowDown':
        event.preventDefault()
        return focusNext(event.target)
      case 'ArrowUp':
        event.preventDefault()
        return focusPrev(event.target)
      default:
        return
    }
  }

  const applyListControls = (list, methods) => {
    setList(list)
    setMethods(methods)
  }

  useEffect(() => {
    list.addEventListener('keydown', onKeyDown)
    return () => {
      list.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  return applyListControls
}

export default useListControlKeys
