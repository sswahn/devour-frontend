import { useState, useEffect } from 'react'
import * as config from '../../../config'
import storage from '../../../utilities/storage'
import Input from '../../../components/Input/Input'
import BoldIcon from '../../../components/Icons/BoldIcon/BoldIcon'
import styles from './Captions.module.css'

function Captions({ captions, createCaption }) {
  const [caption, setCaption] = useState([])
  const [fontSize, setFontSize] = useState(12)
  const [color, setColor] = useState('#ffffff')
  const [bold, setBold] = useState(false)
  const [italic, setItalic] = useState(false)
  const [underline, setUnderline] useState(false)
  const [strokeColor, setStrokeColor] = useState('#000000')
  const [strokeWidth, setStrokeWidth] = useState(2)
  const [backgroundColor, setBackgroundColor] = useState('transparent')
  const [textAlign, setTextAlign] = useState('left')
  const [errorMessage, setErrorMessage] = useState('')

  const onChange = event => {
    const { value } = event.target
    setCaption(value)
    storage.local.set(config.storage.caption, value)
  }

  const onSubmit = event => {
    
    const data = {
      id: crypto.randomUUID(),
      text: target.value,
      start: 0,
      end: 10,
      style: { 
        fontSize,
        color,
        bold,
        italic,
        underline,
        strokeColor,
        strokeWidth,
        backgroundColor,
        textAlign
      }
    }
    createCaption(data) 
    storage.local.remove(config.storage.caption)
  }

  const loadFromStorage = () => {
    const item = storage.local.get(config.storage.caption)
    setCaption(item)
  }

  useEffect(() => {
    loadFromStorage()
  }, [])

  // consider adding caption at the editor level instead of menu?
  
  return (
    <section className={styles.captions}>
      <form onSubmit={onSubmit}>
        <Input 
          id="caption"
          type="text"
          label="Add a caption"
          value={caption}
          error={errorMessage}
          onChange={onChange}
          required />
        <Input
          id="start"
          type="number" 
          step="any"
          label="Start"
          // value={start} default value needs to be gotten from timeline
          error={errorMessage}
          required />
        <Input
          id="end"
          type="number" 
          step="any"
          label="End"
          error={errorMessage}
          required />
      </form>
      <ul>
          {/* needs: edit & delete buttons (pencil and garbage can) */}
        {captions.map(caption => <li key={caption.id} id={caption.id}>{caption.text}</li>)}
      </ul>
    </section>
  )
}

export default Captions
