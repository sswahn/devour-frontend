import { useRef } from 'react'
import useFocusStack from '../../../hooks/useFocusStack'
import SearchIcon from '../../Icons/SearchIcon/SearchIcon'
import styles from './SearchButton.module.css'

function SearchButton({ openSearch }) {
  const buttonRef = useRef(null)
  const { push } = useFocusStack()
  
  const action = async () => {
    navigator.vibrate(50)
    push(buttonRef.current)
    openSearch()
  }
  
  const onClick = event => {
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
