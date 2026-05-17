import Avatar from '../../../components/Avatar'
import Dropdown from '../../../components/Dropdown'

function SearchResults({ searchResults, loading }) {
  
  const dropdown =  []

  return searchResults.length > 0 && searchResults.map(result =>
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
  )
}

export default SearchResults
