import { useRef } from 'react'
import { overlays } from '../../../config'
import useOverlay from '../../../hooks/useOverlay'
import SearchIcon from '../../Icons/SearchIcon/SearchIcon'
import styles from './SearchButton.module.css'

function SearchButton() {
  const buttonRef = useRef(null)
  const { openOverlay } = useOverlay()
  
  const onClick = event => {
    navigator.vibrate?.(50)
    openOverlay(overlays.search, buttonRef.current)
  }
  
  return (
    <button 
      className={styles.searchButton} 
      ref={buttonRef} 
      onClick={onClick} 
      type="button" 
      aria-label="search" 
      aria-haspopup="dialog">
      <SearchIcon />  
    </button>
  )
}

export default SearchButton
