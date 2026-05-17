
function SearchResults() {

  return (
    <ul id="suggestions" role="listbox" aria-live="polite" aria-busy={loading}>
      {loading ? <LoadingSpinner /> : searchResults?.map((result, index) =>
        <li key={index} role="option">
          <div>
            {result}
          </div>
        </li>
      )}    
    </ul>  
  )
}

export default SearchResults
