import { useState, useEffect } from 'react'
import Input from '../../components/Input'
import styles from './Captions.module.css'

function Captions() {
  const [captions, setCaptions] = useState({})
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
    setCaptions(prev => ({ ...prev, ...obj }))
    const item = localStorage.getItem('captions')
    const data = JSON.parse(item)
    const json = JSON.stringify({ ...data, ...obj })
    localStorage.setItem('captions', json)
  }
  
  return (
    <section className={styles.captions}>
      <form>
        <Input 
          id="captions"
          type="text"
          label="Add a caption"
          value={caption}
          error={errorMessage}
          onChange={onChange}
          required />
      </form>
    </section>
  )
}

export default Captions
