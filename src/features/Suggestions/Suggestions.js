import { useState } from 'react'
import styles from './Suggestions.module.css'

function Suggestions() {
  const [suggestions, setSuggestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const onEnded = event => {
    setCurrentIndex(prev => (prev + 1) % SAMPLE_VIDEOS.length)
  }
  
  return (
    <section className={styles.suggestions} aria-label="suggestions slideshow" aria-description="a slideshow of popular content">
      <div className="slideshow-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {SAMPLE_VIDEOS.map((slide, index) => (
          <div key={slide.id} className="slide">
            <video
              ref={(el) => { videoRefs.current[index] = el }}
              className="slide-video"
              src={slide.url}
              onEnded={onEnded}
              playsInline
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button className="nav-button nav-prev" onClick={handlePrev} aria-label="Previous slide">&#10094;</button>
      <button className="nav-button nav-next" onClick={handleNext} aria-label="Next slide">&#10095;</button>
    </section>
  )
}

export default Suggestions
