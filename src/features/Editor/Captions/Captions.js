import { useState, useEffect } from 'react'
import useEditor from '../../../hooks/useEditor'
import Input from '../../../components/Input/Input'
import BoldIcon from '../../../components/Icons/BoldIcon/BoldIcon'
import styles from './Captions.module.css'

import MediaEditor from '../../../components/MediaEditor/MediaEditor'

function Captions() {
  const [data, setData] = useEditor()
  const [caption, setCaption] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const onChange = event => {
    const { value } = event.target
    setCaption(value)
    localStorage.setItem('caption', value)
  }

  const onSubmit = event => {
    // create the object for this caption with all its attributes:
    const obj = { 
      captions : [{
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
      }]
    }
    setData(prev => ({ ...prev, ...obj }))
  }

  const loadFromStorage = () => {
    const item = localStorage.getItem('caption')
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
        <MediaEditor />
      </form>
    </section>
  )
}

export default Captions
