import Avatar from '../../../components/Avatar/Avatar'
import Dropdown from '../../../components/Dropdown/Dropdown'
import styles from './SearchResults.module.css'

function SearchResults({ searchResults, loading }) {
  
  const dropdown =  []

  return searchResults.map(result =>
    <li className={styles.searchResults} key={result.id} role="option"> 
      <article>
        <header>
          <Avatar username={result.username} image={result.picture} />
          <h2>{result.username}</h2>
          <time datetime={result.timestamp}>{result.timestamp}</time>
        </header>
        <div>
          <p>{result.location}</p>
          <p>{result.description?.slice(0, 72)}</p>
        </div>
        <footer>
          <Dropdown items={dropdown} />
        </footer>
      </article>
    </li>
  )
}

export default SearchResults
