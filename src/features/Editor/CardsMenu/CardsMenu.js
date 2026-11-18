import { useState, useEffect, useRef } from 'react'
import * as config from '../../../config'
import useCards from '../../../hooks/useCards'
// import usePhoto from '../../../hooks/usePhoto'
import storage from '../../../utilities/storage'
import CardTime from './CardTime/CardTime'
import styles from './CardsMenu.module.css'

function CardsMenu({ activeCard, setActiveCard, closeCardMenu }) {
  const { cards, createCard } = useCards()
  const photo = { url: ''} // create a usePhoto() hook/provider
  const [cardTime, setCardTime] = useState(false)
  const cardRef = useRef(null)

  const updateActiveCardTime = ({ target: { id, value} }) => {
    setActiveCard(prev => ({ ...prev, [id]: value }))
  }

  const changeBackgroundColor = event => {
    setActiveCard(prev => ({
      ...prev,
      background: {
        style: {
          ...prev.background.style,
          backgroundColor: event.target.value
        }
      }
    }))
  }

  const updateActiveCardTextStyle = update => {
    setActiveCard(prev => ({
      ...prev,
      text: {
        ...prev.text,
        style: {
          ...prev.text.style,
          ...update
        }
      }
    }))
  }

  const addText = event => {
    setActiveCard(prev => ({
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
    setActiveCard(prev => {
      const { text, ...card } = prev
      return card
    })
  }

  const addPhoto = event => {
    setActiveCard(prev => ({
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
    setActiveCard(prev => {
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
    setActiveCard(prev => ({
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
    setActiveCard(prev => {
      const { upload, ...card } = prev
      return card
    })
  }

  const saveCard = () => {
    // if text, validate text
    // if upload, validate upload
    
    // save active card to context array
    /* createCard(activeCard)
    // then reset defaults:
    /*
    setActiveCard({
      id: crypto.randomUUID(),
      start: '',
      end: '',
      background: {
        style: {
          backgroundColor: 'black'
        }
      }
    })
    */
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

  {/*
  - text input
  - text positioning
  
  - choose background color (default black and white text)
  - take photo (replaces background)
  
  - time length (how long to display card)
  
  - upload and position image/logo (maybe for pro plan)
  */}
  
  return (
    <section ref={cardRef} className={styles.cardsMenu}>
      <Input 
        id="text"
        type="text"
        label="Add a card"
        value={activeCard.text}
        error={errors.text}
        onChange={addText} />
      <CardTimeButton setCardTime={setCardTime} />
      {cardTime && <CardTime activeCard={activeCard} updateActiveCardTime={updateActiveCardTime} errors={errors} />}
      <TextToolbar style={activeCard.style} setStyle={updateActiveCardTextStyle} />
    </section>
  )
}

export default CardsMenu
