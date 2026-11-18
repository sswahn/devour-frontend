import { useState, createContext, useEffect } from 'react'
import * as config from '../../config'
import storage from '../../utilities/storage'

const CardsContext = createContext(null)

function CardsProvider({ children }) {
  const [cards, setCards] = useState([])
  const [isHydrated, setIsHydrated] = useState(false)

  const createCard = data => {
    setCaptions(prev => [ ...prev, data ])
  }
  
  const updateCard = (id, data) => {
    setCaptions(prev => prev.map(caption =>
      caption.id === id ? { ...caption, ...data } : caption
    ))
  }
  
  const deleteCard = id => {
    setCaptions(prev => prev.filter(caption =>
      caption.id !== id 
    ))
  }

  useEffect(() => {
    const stored = storage.local.get(config.storage.cards)
    if (stored !== null) {
      setCaptions(stored)
      setIsHydrated(true)
    }
  }, [])
  
  useEffect(() => {
    if (!isHydrated) {
      return
    }
    storage.local.set(config.storage.cards, cards)
  }, [cards, isHydrated])
  
  return (
    <CardsContext.Provider value={{ cards, createCard, updateCard, deleteCard }}>
      {children}
    </CardsContext.Provider>
  )
}

export { CardsContext, CardsProvider }
