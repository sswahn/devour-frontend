import { useContext } from 'react'
import { CardsContext } from '../components/Providers/CardsProvider'

function useCards() {
  const { cards, createCard, updateCard, deleteCard } = useContext(CardsContext)
  
  return { cards, createCard, updateCard, deleteCard }
}

export default useCards
