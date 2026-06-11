import { useState, useRef, useEffect } from 'react'
import styles from './Suggestions.module.css'

function Suggestions() {
  const [suggestions, setSuggestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const videoRefs = useRef(null)

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % suggestions.length)
  }

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + suggestions.length) % suggestions.length)
  }

  const onEnded = event => {
    handleNext()
  }

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (index === currentIndex) {
        video.currentTime = 0
        video.play().catch(console.error)
      } else {
        video.pause()
      }
    })
  }, [currentIndex])
  
  return (
    <section className={styles.suggestions} aria-label="suggestions slideshow" aria-description="a slideshow of popular content">
      <div className="slideshow-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {suggestions.map((slide, index) => (
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

      <button className="nav-button nav-prev" onClick={handlePrev} aria-label="Previous slide">&#10094;</button>
      <button className="nav-button nav-next" onClick={handleNext} aria-label="Next slide">&#10095;</button>
    </section>
  )
}

export default Suggestions
