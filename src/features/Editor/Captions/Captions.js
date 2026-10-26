import { useState, useEffect } from 'react'
import * as config from '../../../config'
import storage from '../../../utilities/storage'
import useEditor from '../../../hooks/useEditor'
import Input from '../../../components/Input/Input'
import BoldIcon from '../../../components/Icons/BoldIcon/BoldIcon'
import styles from './Captions.module.css'

function Captions() {
  const { data, setData } = useEditor()
  const [caption, setCaption] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const onChange = event => {
    const { value } = event.target
    setCaption(value)
    storage.local.set(config.storage.caption, value)
  }

  const onSubmit = event => {
    const item = {
      id: crypto.randomUUID(),
      text: target.value,
      start: 0,
      end: 10,
      style: { // for style need to determine the default values.
        fontFamily: 'Arial',
        fontSize: 36,
        color: '#ffffff',
        bold: true, // should be set with state const [bold, setBold] = useState(false)
        italic: false,
        underline: false,
        strokeColor: '#000000',
        strokeWidth: 2,
        backgroundColor: 'transparent',
        textAlign: 'left'
      }
    }
  
    // change from setData to something specific like createCaption(data)
    // and reduce some of this code here...
    // you should just pass the item and the function will handle adding it to the array.
    setData(prev => ({ ...prev, captions: [ ...prev.captions, item ] })) 
  }

  const loadFromStorage = () => {
    const item = storage.local.get(config.storage.caption)
    setCaption(item)
  }

  useEffect(() => {
    loadFromStorage()
  }, [])
  
  return (
    <section className={styles.captions}>
      <form onSubmit={onSubmit}>
        <Input 
          id="captions"
          type="text"
          label="Add a caption"
          value={caption}
          error={errorMessage}
          onChange={onChange}
          required />
      </form>
      <ul>
          {/* needs: edit & delete buttons (pencil and garbage can) */}
        {data?.captions.map(caption => <li key={caption.id} id={caption.id}>{caption.text}</li>)}
      </ul>
    </section>
  )
}

export default Captions
