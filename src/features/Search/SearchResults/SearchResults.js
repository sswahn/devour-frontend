import Avatar from '../../../components/Avatar/Avatar'
import Dropdown from '../../../components/Dropdown/Dropdown'
import styles from './SearchResults.module.css'

function SearchResults({ searchResults, loading }) {
  
  const dropdown =  []

  // for better accessibility:
  // use article, header, h2, username

  return searchResults.map(result =>
    <li className={styles.searchResults} key={result.id} role="option"> 
      <Avatar username={result.username} />
      <div>
        <div>
          <strong>{result.username}</strong>
          <time datetime={result.timestamp}>{result.timestamp}</time>
        </div>
        <div>
          <span>{result.location}</span>
          <span>{result.cuisine}</span>
        </div>
      </div>
      <Dropdown items={dropdown} />
    </li>
  )
}

export default SearchResults
