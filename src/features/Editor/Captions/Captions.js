import { useState, useEffect } from 'react'
import useCaptions from '../../../hooks/useCaptions'
import * as config from '../../../config'
import storage from '../../../utilities/storage'
import Input from '../../../components/Input/Input'
import BoldIcon from '../../../components/Icons/BoldIcon/BoldIcon'
import styles from './Captions.module.css'

function Captions() {
  const { captions, createCaption } = useCaptions()
  const [caption, setCaption] = useState([])
  const [fontSize, setFontSize] = useState(12)
  const [color, setColor] = useState('#ffffff')
  const [bold, setBold] = useState(false)
  const [italic, setItalic] = useState(false)
  const [underline, setUnderline] = useState(false)
  const [stroke, setStroke] = useState('none')
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
    event.preventDefault()
    const id = crypto.randomUUID()
    const formData = new FormData(event.target)
    const text = formData.get('caption').trim()
    const start = formData.get('start').trim()
    const end = formData.get('end').trim()
    
    const data = {
      id,
      text,
      start,
      end,
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
    // consider caching here
  }

  const loadFromStorage = () => {
    const item = storage.local.get(config.storage.caption) || ''
    setCaption(item)
  }

  useEffect(() => {
    loadFromStorage()
  }, [])

  
  useEffect(() => { // remove after debugging
    console.log('Captions: ', captions)
  }, [captions])
  
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
          inputMode="decimal"
          type="number" 
          step="any"
          label="Start"
          // value={start} default value needs to be gotten from timeline
          error={errorMessage}
          required />
        <Input
          id="end"
          inputMode="decimal"
          type="number" 
          step="any"
          label="End"
          error={errorMessage}
          required />
            
        <button type="submit" aria-label="submit caption">Submit</button>
      </form>
      <ul>
        {/* needs: edit & delete buttons (pencil and garbage can) */}
        {captions.map(obj => <li key={obj.id} id={obj.id}>{obj.text}</li>)}
      </ul>
    </section>
  )
}

export default Captions
