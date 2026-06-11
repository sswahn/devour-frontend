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
      <article>
        <header>
          <h2>{result.username}</h2>
          <time datetime={result.timestamp}>{result.timestamp}</time>
        </header>
        <p>{result.location}</p>
        <p>{result.description?.slice(0, 15)}</p>
      </article>
      <Dropdown items={dropdown} />
    </li>
  )
}

export default SearchResults
