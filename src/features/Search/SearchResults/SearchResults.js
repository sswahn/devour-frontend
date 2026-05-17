import Avatar from '../../../components/Avatar'


function SearchResults() {

  return (
    <ul id="suggestions" role="listbox" aria-live="polite" aria-busy={loading}>
      {loading ? <LoadingSpinner /> : searchResults?.map((result, index) =>
        <li key={index} role="option">
          <div>
            <div>
              <Avatar username={result.username} />
            </div>
            <div>
              <strong>{result.username}</strong>
              <time>{result.timestamp}</time>
            </div>
            <div>
              <span>{result.location}</span>
              <span>{result.cuisine}</span>
            </div>
          </div>
        </li>
      )}    
    </ul>  
  )
}

export default SearchResults
