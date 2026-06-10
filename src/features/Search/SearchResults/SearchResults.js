import Avatar from '../../../components/Avatar/Avatar'
import Dropdown from '../../../components/Dropdown/Dropdown'
import styles from './SearchResults.module.css'

function SearchResults({ searchResults, loading }) {
  
  const dropdown =  []

  // for better accessibility: screen readers use quick keys to navigate between headings, so:
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
          <div>{result.location}</div>
          <div>{result.description?.slice(0, 15)}</div>
        </div>
      </div>
      <Dropdown items={dropdown} />
    </li>
  )
}

export default SearchResults
