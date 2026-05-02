import { useState } from 'react'
import styles from './Suggestions.module.css'

function Suggestions() {
  const [suggestions, setSuggestions] = useState([])
  
  return (
    <section className={styles.suggestions} aria-label="suggested content">
      {suggestions.map(suggestion => {
      
        // Not sure how to present suggestions. Possibly posters.
        // Maybe a fullscreen slideshow of video, similar to the edit post section.
        // Use intersection observer to auto rotate through videos.
      
      })}
    </section>
  )
}

export default Suggestions
