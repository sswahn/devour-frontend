import { useState } from 'react'
import styles from './Suggestions.module.css'

function Suggestions() {
  const [suggestions, setSuggestions] = useState([])
  
  return (
    <section className={styles.suggestions} aria-label="suggestions slideshow" aria-description="a slideshow of popular content">
      <div className="slideshow-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {SAMPLE_VIDEOS.map((slide, index) => (
          <div key={slide.id} className="slide">
            <video
              ref={(el) => { videoRefs.current[index] = el; }}
              className="slide-video"
              src={slide.url}
              playsInline
            />
            {/* Title Overlay */}
            <div className="title-overlay">
              <h3>{slide.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button className="nav-button nav-prev" onClick={handlePrev} aria-label="Previous slide">&#10094;</button>
      <button className="nav-button nav-next" onClick={handleNext} aria-label="Next slide">&#10095;</button>

      {/* Dot Indicators (probably wont use dot indicators) */}
      <div className="indicator-container">
        {SAMPLE_VIDEOS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`dot ${currentIndex === index ? 'dot-active' : 'dot-inactive'}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Suggestions
