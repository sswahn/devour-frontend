import { useRef } from 'react'
import { overlays } from '../../../config'
import useFocusStack from '../../../hooks/useFocusStack'
import SearchIcon from '../../Icons/SearchIcon/SearchIcon'
import styles from './SearchButton.module.css'

function SearchButton({ openOverlay }) {
  const buttonRef = useRef(null)
  const { push } = useFocusStack()
  
  const action = async () => {
    push(buttonRef.current)
    openOverlay(overlays.search)
  }
  
  const onClick = event => {
    navigator.vibrate?.(50)
    action()
  }

  const onKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      action()
    }
  }
  
  return (
    <button 
      className={styles.searchButton} 
      ref={buttonRef} 
      onClick={onClick} 
      onKeyDown={onKeyDown} 
      type="button" 
      aria-label="search" 
      aria-haspopup="dialog">
      <SearchIcon />  
    </button>
  )
}

export default SearchButton
