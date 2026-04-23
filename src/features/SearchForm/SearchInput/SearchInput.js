import { useState, useRef, useEffect } from 'react'
import styles from './SearchInput.module.css'

function SearchInput({ searchValue, error, setSearchValue, setError }) {
  const inputRef = useRef(null)
  
  const onChange = ({ target }) => {
    if (target.validity.patternMismatch) {
      target.reportValidity()
      setError(true)
    } else if (error) {
      setError(false)
    }
    setSearchValue(target.value)
  }

  useEffect(() => {
    inputRef.current.scrollLeft = inputRef.current.scrollWidth
    inputRef.current.focus()
  }, [searchValue])
 

  return (
    <input
      className={styles.input}
      ref={inputRef}
      value={searchValue}
      onChange={onChange}
      maxLength="288"
      pattern="[^<>\(\)\{\}\[\]\\\/\|;=~%^]+"
      title="Special characters are not allowed."
      spellCheck="true"
      autoFocus
      type="search"
      name="search"
      role="combobox"
      aria-autocomplete="list"
      aria-controls="suggestions"
      aria-expanded={true} /* add something like isExpanded={searchResults.length > 0} when backend complete.[ */
    />
  )
}

export default SearchInput
