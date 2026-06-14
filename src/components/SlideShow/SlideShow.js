import { useState, useRef, useEffect } from 'react'
import NextButton from '../NextButton/NextButton'
import PreviousButton from '../PreviousButton/PreviousButton'
import Feed from '../../features/Feed/Feed'
import styles from './SlideShow.module.css'

function SlideShow({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const videoRefs = useRef([])

  const onEnded = event => {
    setCurrentIndex(prev => (prev + 1) % data.length)
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

  // make sure the initial video autoplays
  
  return (
    <section className={styles.slideShow} aria-label="slideshow" aria-description="a slideshow of popular content">
      <PreviousButton length={data.length} setCurrentIndex={setCurrentIndex} />
      <NextButton length={data.length} setCurrentIndex={setCurrentIndex} />
      <div className={styles.slideContainer} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
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
