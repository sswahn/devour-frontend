import { useState, useEffect, useRef } from 'react'
import { DEFAULT_TEXT_STYLE } from '../../../constants/defaultTextStyle'
import * as config from '../../../config'
import useCards from '../../../hooks/useCards'
// import usePhoto from '../../../hooks/usePhoto'
import { errorHandler } from '../../../utilities/errorHandler'
import storage from '../../../utilities/storage'
import Input from '../../../components/Input/Input'
import CardTimeButton from './CardTimeButton/CardTimeButton'
import CardTime from './CardTime/CardTime'
import TextToolbar from '../../../components/TextToolbar/TextToolbar'
import styles from './CardsMenu.module.css'

function CardsMenu({ activeCard, setActiveCard, closeCardMenu }) {
  const { cards, createCard } = useCards()
  const photo = { url: ''} // create a usePhoto() hook/provider
  const [cardTime, setCardTime] = useState(false)
  const cardRef = useRef(null)
  const [errors, setErrors] = useState({})

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
        style: update(prev.text?.style ?? {})
      }
    }))
  }

  const addText = event => {
    setActiveCard(prev => ({
      ...prev,
      text: {
        value: event.target.value,
        style: { ...DEFAULT_TEXT_STYLE, textAlign: 'center' }
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
        alt: '',
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
    try {
    // if text, validate text
    // if upload, validate upload
    
    // save active card to context array
    /* createCard(activeCard)
    // then reset defaults:
    /*
    setActiveCard({
      id: crypto.randomUUID(),
      start: '',
      end: ''
    })
    */
    } catch (error) {
      errorHandler(errors, setErrors)
    }
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
