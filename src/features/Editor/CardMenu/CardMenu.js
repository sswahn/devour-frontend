import { useEffect, useRef } from 'react'
import styles from './CardMenu.module.css'

function CardMenu({ closeCardMenu }) {
  const cardRef = useRef(null)

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
    <div ref={cardRef} className={styles.cardMenu}>A card menu</div>
  )
}

export default CardMenu
