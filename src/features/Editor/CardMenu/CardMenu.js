import { useState, useEffect, useRef } from 'react'
import styles from './CardMenu.module.css'

function CardMenu({ startTime, closeCardMenu }) {
  // create a photo provider const { photo } = usePhoto()
  const [url, setUrl] = useState(null)
  const [card, setCard] = useState({
    id: crypto.randomUUID(),
    start: startTime,
    end: startTime + 5,
    background: {
      style: {
        backgroundColor: 'black'
      }
    }
  })
  const cardRef = useRef(null)

  const addText = event => {
    setCard(prev => ({
      ...prev,
      text: {
        value: event.target.value,
        style: {
          // fontFamily: '',
          color: 'white',
          position: 'absolute',
          bottom: 'auto',
          left: 'auto',
          right: 'auto',
          top: 'auto',
          textAlign: 'center'
        }
      })
    )
  }

  const removeText = event => {
    setCard(prev => {
      const { text, ...card } = prev
      return card
    })
  }

  const addPhoto = event => {
    setCard(prev => ({
      ...prev,
      background: {
        style: {
          backgroundImage: `url('${url}')`
        }
      }
    }))
  }

  const removePhoto = event => {
    setCard(prev => ({
      ...prev,
      background: {
        style: {
          backgroundColor: 'black'
        }
      }
    }))
  }

  const addUpload = event => {
    setCard(prev => ({
      ...prev,
      upload: {
        url: '',
        style: {
          position: 'absolute',
          bottom: 'auto',
          left: 'auto',
          right: 'auto',
          top: 'auto',
        }
      })
    )
  }

  const removeUpload = event => {
    setCard(prev => {
      const { upload, ...card } = prev
      return card
    })
  }

  const offClickToClose = event => {
    if (cardRef.current && !cardRef.current.contains(event.target)) {
      closeCardMenu()
    }
  }

  useEffect(() => {
    document.addEventListener('click', offClickToClose)
    return () => {
      document.removeEventListener('click', offClickToClose)
    }
  }, [offClickToClose])
  
  return (
    <div ref={cardRef} className={styles.cardMenu}>
      <p>A card menu</p>
      {/*
        - text input
        - text positioning
        
        - choose background color (default black and white text)
        - take photo (replaces background)
        
        - time length (how long to display card)

        - upload and position image/logo (maybe for pro plan)
      */}
    </div>
  )
}

export default CardMenu
