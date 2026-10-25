import { useState, useEffect } from 'react'
import useEditor from '../../../hooks/useEditor'
import Input from '../../../components/Input/Input'
import BoldIcon from '../../../components/Icons/BoldIcon/BoldIcon'
import styles from './Captions.module.css'

function Captions() {
  const [data, setData] = useEditor()
  const [captions, setCaptions] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const onChange = event => {
    const { value } = event.target
    const array = [ ...captions, value ]
    setCaptions(array)
    const json = JSON.stringify(array)
    localStorage.setItem('captions', json)
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
    const item = localStorage.getItem('captions')
    const array = JSON.parse(item) || []
    setCaptions(array)
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
        {captions.map(caption => <li>{caption}</li>)}
      </ul>
    </section>
  )
}

export default Captions
