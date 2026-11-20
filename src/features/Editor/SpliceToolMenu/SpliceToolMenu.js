import { useState, useEffect } from 'react'
import { errorHandler } from '../../utilities/errorHandler'
import Input from '../../../components/Input/Input'
import styles from './SpliceToolMenu.module.css'

function SpliceToolMenu() {
  const [splice, setSplice] = useState({
    start: '', // might want to get from current location in timeline, which means moving state up a level
    end: '',
    insert: ''
  })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const updateSplice = ({ target: { id, value } }) => {
    setSplice(prev => ({ ...prev, [id]: value })) // do i want to store locally?
  }

  const onSubmit = event => {
    event.preventDefault()
    try {
      // spliceVideoClips(splice)
    } catch (error) {
      errorHandler(errors, setErrors)
    }
  }
  
  // reqires a new ffmpeg function
  // getting a segment of the blob via start/end time
  // and inserting it in at a given location (insertion time)

  // this component will have three inputs:
  // start, end, insert
  
  return (
    <section className={styles.spliceToolMenu}>
      <form onSubmit={onSubmit}>
        <Input
          id="start"
          inputMode="decimal"
          type="number" 
          step="any"
          label="Start"
          value={splice.start}
          error={errors.start}
          onChange={updateSplice}
          required />
        <Input
          id="end"
          inputMode="decimal"
          type="number" 
          step="any"
          label="End"
          value={splice.end}
          error={errors.end}
          onChange={updateSplice}
          required />
        <Input
          id="insert"
          inputMode="decimal"
          type="number" 
          step="any"
          label="Insert"
          value={splice.insert}
          error={errors.end}
          onChange={updateSplice}
          required />
        <button disabled={loading} type="submit">Submit</button>
      </form>
    </section>
  )
}

export default SpliceToolMenu
