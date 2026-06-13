import { useState, useRef, useEffect } from 'react'
import ChevronLeftIcon from '../Icons/ChevronLeftIcon/ChevronLeftIcon'
import ChevronRightIcon from '../Icons/ChevronRightIcon/ChevronRightIcon'
import Feed from '../../features/Feed/Feed'
import styles from './SlideShow.module.css'

function SlideShow({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const videoRefs = useRef([])

  const handleNext = () => {
    console.log('clicked next slide')
    setCurrentIndex(prev => (prev + 1) % data.length)
  }

  const handlePrev = () => {
    console.log('clicked previous slide')
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
  }, [currentIndex])

  // move buttons into their own components
  // make sure the initial video autoplays
  
  return (
    <section className={styles.slideShow} aria-label="slideshow" aria-description="a slideshow of popular content">
      <nav>

        <button onClick={handleNext} aria-label="Next slide">
          <ChevronRightIcon />
        </button>
      </nav>
      <div style={{ transform: `translateX(-${currentIndex * 100}%)` }}>

        <Feed data={data} />
        
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
