import { useState, useRef, useEffect } from 'react'
import styles from './SlideShow.module.css'

function SlideShow({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const videoRefs = useRef([])

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % data.length)
  }

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + data.length) % data.length)
  }

  const onEnded = event => {
    handleNext()
  }

  const playCurrent = () => {
    videoRefs.current?.forEach((video, index) => {
      if (index === currentIndex) {
        video.currentTime = 0
        video.play().catch(console.error)
      } else {
        video.pause()
      }
    })
  }

  useEffect(() => {
    if (!!data.length) {
      playCurrent()
    }
  }, [data, currentIndex])
  
  return (
    <section className={styles.suggestions} aria-label="slideshow" aria-description="a slideshow of popular content">
      <div style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
  
        <button className="nav-button nav-prev" onClick={handlePrev} aria-label="Previous slide">&#10094;</button>
        <button className="nav-button nav-next" onClick={handleNext} aria-label="Next slide">&#10095;</button>

        {!!data.length && data.map((slide, index) => (
          <figure key={slide.id}>
            <video
              ref={video => { videoRefs.current[index] = video }}
              src={slide.url}
              onEnded={onEnded}
              playsInline
              muted
            />
          </figure>
        ))}
          
      </div>
    </section>
  )
}

export default SlideShow
