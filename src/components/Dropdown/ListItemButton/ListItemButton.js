import styles from './ListItemButton.module.css'

function ListItemButton({ buttonRef, listRef, text, method, close }) {
  
  const focusPrev = button => {
    button === listRef.current.firstElementChild.firstElementChild
      ? listRef.current.lastElementChild.firstElementChild.focus()
      : button.parentElement.previousElementSibling.firstElementChild.focus()
  }

  const focusNext = button => {
    button === listRef.current.lastElementChild.firstElementChild
      ? listRef.current.firstElementChild.firstElementChild.focus() 
      : button.parentElement.nextElementSibling.firstElementChild.focus()
  }

  const escape = () => {
    close()
    buttonRef.current.focus()
  }

  const action = () => {
    method()
  }

  const onClick = event => {
    navigator.vibrate?.(50)
    action()
  }

  const onKeyDown = event => {
    switch (event.key) {
      case 'Enter':
        event.preventDefault()
        return action()
      case 'Tab':
        return close()  // Standard behavior: Close menu if user tabs out
      case 'Escape':
        event.stopPropagation()
        event.preventDefault()
        return escape() // Return focus to button on close
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
  
  return (
    <button className={styles.listItemButton} onClick={onClick} onKeyDown={onKeyDown} type="button" role="menuitem" tabIndex="-1">{text}</button>
  )
}

export default ListItemButton
