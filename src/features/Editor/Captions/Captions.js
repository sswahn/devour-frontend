import { useState, useEffect } from 'react'
import Input from '../../components/Input'
import styles from './Captions.module.css'

function Captions() {
  const [captions, setCaptions] = useState({})
  const [errorMessage, setErrorMessage] = useState('')

  const onChange = ({ target }) => {
    // const obj = { [target.id]: target.value }
    setCaption(prev => ({ ...prev, ...obj }))
    const item = localStorage.getItem('profile')
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
