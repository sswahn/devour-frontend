import { useState, useEffect } from 'react'
import Input from '../../components/Input'
import styles from './Caption.module.css'

function Caption() {
  const [caption, setCaption] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const onChange = ({ target }) => {
    // set caption
    // setItem in localStorage
  }
  
  return (
    <section className={styles.caption}>
      <form>
        <Input 
          id="caption"
          type="text"
          label="Add a caption"
          value={caption}
          error={errorMessage}
          onChange={onChange}
          required
          aria-label="Add a caption" />
      </form>
    </section>
  )
}

export default Caption
