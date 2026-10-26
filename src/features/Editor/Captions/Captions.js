import { useState, useEffect } from 'react'
import useCaptions from '../../../hooks/useCaptions'
import * as config from '../../../config'
import storage from '../../../utilities/storage'
import Input from '../../../components/Input/Input'
import BoldIcon from '../../../components/Icons/BoldIcon/BoldIcon'
import PenToSquareIcon from '../../../components/Icons/PenToSquareIcon/PenToSquareIcon'
import TrashCanIcon from '../../../components/Icons/TrashCanIcon/TrashCanIcon'
import styles from './Captions.module.css'

function Captions() {
  const { captions, createCaption } = useCaptions()
  const [caption, setCaption] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
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

  const handleEdit = event => {
    console.log('edit')
  }
  
  const handleDelete = event => {
    console.log('delete')
  }

  const onChange = ({ target: { id, value } }) => {
    switch (id) {
      case 'caption':
        return setCaption(value)
      case 'start':
        return setStart(value)
      case 'end':
        return setEnd(value)
      default:
        return
    }
    storage.local.set(config.storage[id], value)
  }

  // TODO: clear inputs on submit
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
    storage.local.set(config.storage.captions, [...captions, data])
    setCaption('')
    setStart('')
    setEnd('')
    storage.local.remove(config.storage.caption)
  }

  const loadFromStorage = () => {
    const item = storage.local.get(config.storage.caption) ?? ''
    setCaption(item)
  }

  useEffect(() => {
    loadFromStorage()
  }, [])

  // TODO: finish captions list add time, text, edit/delete buttons, styling
  
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
          value={start} // default value needs to be gotten from timeline
          error={errorMessage}
          onChange={onChange}
          required />
        <Input
          id="end"
          inputMode="decimal"
          type="number" 
          step="any"
          label="End"
          value={end}
          error={errorMessage}
          onChange={onChange}
          required />
            
        <button type="submit" aria-label="submit caption">Submit</button>
      </form>
      <ul>
        {captions.map(item => 
          <li key={item.id} id={item.id}>
            <div>
              <div>
                <span>Start: {item.start}</span>
                <span> / </span>
                <span>End: {item.end}</span>
              </div>
              <p>Text: {item.text}</p>
              <div>
                <button onClick={handleEdit} type="button" aria-label="edit caption">
                  <PenToSquareIcon size={16} />
                </button>
                <button onClick={handleDelete} type="button" aria-label="delete caption">
                  <TrashCanIcon size={16} />
                </button>
              </div>
            </div>
          </li>
        )}
      </ul>
    </section>
  )
}

export default Captions
