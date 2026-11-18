import { useState, useEffect, useRef } from 'react'
import styles from './CardMenu.module.css'

function CardMenu({ startTime, closeCardMenu }) {
  // create a photo provider const { photo } = usePhoto()
  const [url, setUrl] = useState(null)
  const [cardText, setCardText] = useState({
    start: startTime,
    end: startTime + 5,
    upload: { // you dont want defaults if these optional components arent used.
      url: '',
      style: {
        
      }
    },
    background: {
      style: {
        backgroundImage: url ? `url('${url}')` : 'none',
        backgroundColor: 'black',
        zIndex: 400
      }
    },
    text: {
      value: '',
      style: {
        // fontFamily: '',
        color: 'white',
        position: 'absolute', // the text must be in a separate div from background in order to position anywhere
        bottom: 'auto',
        left: 'auto',
        right: 'auto',
        top: 'auto',
        textAlign: 'center',
        zIndex: 450
      }
    }
  })
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
        - take photo (replaces background)
        
        - time length (how long to display card)

        - upload and position image/logo (maybe for pro plan)
      */}
    </div>
  )
}

export default CardMenu
