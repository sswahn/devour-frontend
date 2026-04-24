import { useState, useRef, useEffect } from 'react'
import { overlays, apis } from '../../config'
import useOverlay from '../../hooks/useOverlay'
import useFocusStack from '../../hooks/useFocusStack'
import useFocusTrap from '../../hooks/useFocusTrap'
import useSwipeToClose from '../../hooks/useSwipeToClose'
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
  const { pop } = useFocusStack()
  const { overlayRef, focusRef } = useFocusTrap()
  const { closeOverlay } = useOverlay()
  const swipeToClose = useSwipeToClose()
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [recentSearches, setRecentSearches] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const onSubmit = event => event.preventDefault()

  const requestSearchResults = useDebounce(async () => {

    // break validation out into another function
    const value = searchValue.trim()
    if (value.length <= 3 || error) {
      return
    }
    
    setLoading(true)
    const request = {
     // is this app private or public, if so no session data available; session.username etc.
      message: value
      // ... additional data to improve search results, ie, prevSearch etc.
    }
    //const response = await server.post(config.api.search, request)
   // setSearchResults(response.message)
    storeSearchTermLocally(value)
    setLoading(false)
  }, 600)

  const storeSearchTermLocally = value => {

    return console.log('invalid text.')
    
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

  const action = () => {
    closeOverlay(overlays.search)
    pop()
  }

  const gesture = () => {
    if (overlayRef.current && action) {
      navigator.vibrate?.(50)
      swipeToClose(overlayRef.current, action)
    }
  }
  
  const onKeyDown = event => {
    if (event.key === 'Escape') {
      event.preventDefault()
      action()
    }
  }

  useEffect(() => {
    gesture()
  }, [])

  useEffect(() => {
    requestSearchResults()
  }, [searchValue])

  return (
    <search id={overlays.search} className={styles.search} ref={focusRef} onKeyDown={onKeyDown} role="dialog" aria-modal="true">
      <nav>
        <CloseButton overlay={overlays.profile} closeOverlay={closeOverlay} pop={pop} />
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
      
      {/* make Suggestions component: */}
      
      <ul id="suggestions" role="listbox" aria-live="polite" aria-busy={loading}>
        {loading ? <LoadingSpinner /> : recentSearches?.map((search, index) =>
          <li key={index} role="option">{search}</li>
        )}    
      </ul>  
    
    </search>
  )
}

export default Search
