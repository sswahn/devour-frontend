import { useState, useRef, useEffect } from 'react'
import { overlay, api } from '../../config'
import useOverlay from '../../hooks/useOverlay'
import useSwipeFromEdge from '../../hooks/useSwipeFromEdge'
import useDebounce from '../../hooks/useDebounce'
import server from '../../utilities/server'
import CloseButton from '../../components/CloseButton/CloseButton'
import Dropdown from '../../components/Dropdown/Dropdown'
import SearchIcon from '../../components/Icons/SearchIcon/SearchIcon'
import SearchInput from './SearchInput/SearchInput'
import SpeechRecognitionButton from './SpeechRecognitionButton/SpeechRecognitionButton'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import styles from './Search.module.css'

function Search() {
  const { closeOverlay } = useOverlay()
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [recentSearches, setRecentSearches] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const { onPointerDown, onPointerMove, onPointerUp, onPointerCancel } = useSwipeFromEdge(closeOverlay)
  const overlayRef = useRef(null)

  
  const onSubmit = event => {
    event.preventDefault()
  }

  const requestSearchResults = useDebounce(async () => {}, 600)

  const storeSearchTermLocally = value => {
    const key = config.storage.search.terms
    const item = localStorage.getItem(key)
    const existing = item ? JSON.parse(item) : []
    if (existing.includes(value)) {
      return
    }
    const data = [value, ...existing].slice(0, 5)
    localStorage.setItem(key, JSON.stringify(data))
    setRecentSearches(data)
  }
  
  const onKeyDown = event => {
    if (event.key === 'Escape') {
      event.preventDefault()
      closeOverlay()
    }
  }

  return (
    <search id={overlay.search} className={styles.search} ref={overlayRef} onKeyDown={onKeyDown} role="dialog" aria-modal="true">
      <div onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerCancel}>
        <nav>
          <CloseButton overlay={overlay.search} close={action} />
          {/* dont forget dropdown requires icons too. */}
          <Dropdown items={[
            { text: 'alert message', method: () => alert('dropdown item clicked.') },
            { text: 'console log message', method: () => console.log('dropdown item clicked.') }
          ]} />
        </nav>
        <form onSubmit={onSubmit}>
          <SearchIcon size={10} />
          <SearchInput 
            searchValue={searchValue} 
            error={error}
            setSearchValue={setSearchValue}
            setError={setError}
          />
          <SpeechRecognitionButton setSearchValue={setSearchValue} />
        </form>
        
        {/* 
          Change to search results, make a component. 
          Results will include, avatar, user, food, location
          Filters, location, popularity, etc.
        */}
        
        <ul id="suggestions" role="listbox" aria-live="polite" aria-busy={loading}>
          {loading ? <LoadingSpinner /> : recentSearches?.map((search, index) =>
            <li key={index} role="option">{search}</li>
          )}    
        </ul>  
      </div>
    </search>
  )
}

export default Search
