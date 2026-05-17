import Avatar from '../../../components/Avatar'
import Dropdown from '../../../components/Dropdown'

function SearchResults({ searchResults }) {
  
  const dropdown =  []

  return (
    <ul id="suggestions" role="listbox" aria-live="polite" aria-busy={loading}>
      {loading ? <LoadingSpinner /> : searchResults.map((result, index) =>
        <li key={result.id} role="option">
          <div>
            <Avatar username={result.username} />
            <div>
              <strong>{result.username}</strong>
              <time datetime={result.timestamp}>{result.timestamp}</time>
            </div>
            <div>
              <span>{result.location}</span>
              <span>{result.cuisine}</span>
            </div>
            <Dropdown items={dropdown} />
          </div>
        </li>
      )}    
    </ul>  
  )
}

export default SearchResults
