import { useState, useRef, useEffect } from 'react'
import SlideNav from './SlideNav/SlideNav'
import Feed from '../../features/Feed/Feed'
import styles from './SlideShow.module.css'

function SlideShow({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const videoRefs = useRef([])

  const onEnded = event => {
    // handleNext() // needs button code might need to pass functions to buttons
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
  }, [currentIndex])

  // move buttons into their own components
  // make sure the initial video autoplays
  
  return (
    <section className={styles.slideShow} aria-label="slideshow" aria-description="a slideshow of popular content">
      <SlideNav length={data.length} setCurrentIndex={setCurrentIndex} />
      <div style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        <Feed data={data} /> {/* need to pass videoRefs into feed */}
        
        {/*!!data.length && data.map((slide, index) => 
          <figure key={slide.id}>
            <video
              ref={video => { videoRefs.current[index] = video }}
              src={slide.url}
              onEnded={onEnded}
              playsInline
              muted
            />
          </figure>
        ) */}
          
      </div>
    </section>
  )
}

export default SlideShow
