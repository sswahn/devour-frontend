import { useState, useRef, useEffect } from 'react'
import { overlay, api } from '../../config'
import useOverlay from '../../hooks/useOverlay'
import useSwipeFromEdge from '../../hooks/useSwipeFromEdge'
import useDebounce from '../../hooks/useDebounce'
import server from '../../utilities/server'
import TopNav from './TopNav/TopNav'
import SearchIcon from '../../components/Icons/SearchIcon/SearchIcon'
import SearchInput from './SearchInput/SearchInput'
import SpeechRecognitionButton from './SpeechRecognitionButton/SpeechRecognitionButton'
import SearchResults from './SearchResults/SearchResults'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import styles from './Search.module.css'

function Search() {
  const { closeOverlay } = useOverlay()
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState([
  {
    id: 0,
    username: 'test_user',
    picture: '',
    location: 'ny',
    description: 'test description of post.',
    timestamp: new Date()
  },
  {
    id: 1,
    username: 'test_user_2',
    picture: '',
    location: 'costa rica',
    description: 'another test description of second post.',
    timestamp: new Date()
  }
  ])
  const [recentSearches, setRecentSearches] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const { onPointerDown, onPointerMove, onPointerUp, onPointerCancel } = useSwipeFromEdge(closeOverlay)
  const overlayRef = useRef(null)

  const onSubmit = event => {
    event.preventDefault()
  }

  const requestSearchResults = useDebounce(async () => {}, 600)
  
  const onKeyDown = event => {
    if (event.key === 'Escape') {
      event.preventDefault()
      closeOverlay()
    }
  }

  return (
    <search id={overlay.search} className={styles.search} ref={overlayRef} onKeyDown={onKeyDown} role="dialog" aria-modal="true">
      <div onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerCancel}>
        <TopNav close={closeOverlay} />
        <form onSubmit={onSubmit}>
          <SearchIcon size={10} />
          <SearchInput 
            searchValue={searchValue} 
            setSearchValue={setSearchValue}
            error={error}
            setError={setError}
          />
          <SpeechRecognitionButton setSearchValue={setSearchValue} />
        </form>
        
        <ul id="search-results" role="listbox" aria-live="polite" aria-busy={loading}>
          {loading ? <LoadingSpinner /> : <SearchResults searchResults={searchResults} />}
        </ul>
      </div>
    </search>
  )
}

export default Search
