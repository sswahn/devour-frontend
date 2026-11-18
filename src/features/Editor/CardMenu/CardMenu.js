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
    <div ref={cardRef} className={styles.cardMenu}>
      <p>A card menu</p>
      {/*
        - text input
        - text positioning
        - choose background color (default black and white text)
        - upload and position image/logo (maybe for pro plan)
        - take photo (replaces background)
      */}
    </div>
  )
}

export default CardMenu
