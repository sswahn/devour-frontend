import { useState, useEffect } from 'react'
import Input from '../../../components/Input'
import styles from './Cards.module.css'

function Cards() {
  const [cards, setCards] = useState({})
  const [errorMessage, setErrorMessage] = useState('')

  const onChange = ({ target }) => {
    const obj = {
      id: crypto.randomUUID(),
      text: target.value,
      start: 0,
      end: 10,
      // for style need to determine the default value.
      style: {
        fontFamily: 'Arial',
        fontSize: 36,
        color: '#ffffff',
        bold: true,
        italic: false,
        underline: false,
        strokeColor: '#000000',
        strokeWidth: 2,
        backgroundColor: 'transparent',
        textAlign: 'left'
      }
    }
    setCards(prev => ({ ...prev, ...obj }))
    const item = localStorage.getItem('cards')
    const data = JSON.parse(item)
    const json = JSON.stringify({ ...data, ...obj })
    localStorage.setItem('cards', json)
  }
  
  return (
    <section className={styles.cards}>
      <form>
        <Input 
          id="cards"
          type="text"
          label="Add a card"
          value={cards}
          error={errorMessage}
          onChange={onChange}
          required />
      </form>
    </section>
  )
}

export default Cards
