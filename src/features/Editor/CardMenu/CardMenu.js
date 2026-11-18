import { useState, useEffect, useRef } from 'react'
import usePhoto from '../../../hooks/usePhoto'
import storage from '../../../utilities/storage'
import styles from './CardMenu.module.css'

function CardMenu({ startTime, closeCardMenu }) {
  const { photo } = usePhoto()

  const [card, setCard] = useState(() => 
    storage.local.get(config.storage.card) ?? {
      id: crypto.randomUUID(),
      start: startTime,
      end: startTime + 5,
      background: {
        style: {
          backgroundColor: 'black'
        }
      }
    }
  )
  const cardRef = useRef(null)

  const changeBackgroundColor = event => {
    setCard(prev => ({
      ...prev,
      background: {
        style: {
          ...prev.background.style,
          backgroundColor: event.target.value
        }
      }
    }))
  }

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
      }
    }))
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
          ...prev.background.style,
          backgroundImage: `url('${photo.url}')`
        }
      }
    }))
  }

  const removePhoto = event => {
    setCard(prev => {
      const { backgroundImage, ...style } = prev.background.style
      return {
        ...prev,
        background: {
          style
        }
      }
    })
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
      }
    }))
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

  useEffect(() => {
    storage.local.set(config.storage.card, card)
  }, [card])
  
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
