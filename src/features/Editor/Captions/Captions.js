import { useState, useEffect } from 'react'
import useCaptions from '../../../hooks/useCaptions'
import useTextStyles from '../../../hooks/useTextStyles'
import * as config from '../../../config'
import storage from '../../../utilities/storage'
import TextToolbar from '../../../components/TextToolbar/TextToolbar'
import Input from '../../../components/Input/Input'
import PenToSquareIcon from '../../../components/Icons/PenToSquareIcon/PenToSquareIcon'
import TrashCanIcon from '../../../components/Icons/TrashCanIcon/TrashCanIcon'
import styles from './Captions.module.css'

function Captions() {
  const { captions, createCaption } = useCaptions()
  const [textStyles, setTextStyles] = useTextStyles()
  const [caption, setCaption] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleCaption = ({ target: { value } }) => {
    // The active display below should use local state
    // the existing captions should use the context captions array
  }

  const handleStart = event => {}
  const handleEnd = event => {}

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
    const existing = storage.local.get(config.storage.caption) ?? {}
    storage.local.set(config.storage.caption, { ...existing, [id]: value })
  }

  // TODO: clear inputs on submit
  const onSubmit = async event => {
    event.preventDefault()

    // validate start/end dont overlap
    // break this out into its own function probably part of validation utility:
    const sorted = [...captions].sort((a, b) => a.start - b.start)
    const conflicted = sorted.some((caption, index) =>
      index > 0 && caption.start < sorted[index - 1].end
    )
    if (conflicted) {
      return alert('This caption conflicts with an existing caption.')
    }

    

    // in the valdiation util, for END, need to check end isnt outside video duration
    // this component needs the duration of the concatenated blob created in Editor
    
    const id = crypto.randomUUID()
    const formData = new FormData(event.target)

    // all of these should be validated with the validation utility.
    const text = formData.get('caption').trim()
    const start = formData.get('start').trim()
    const end = formData.get('end').trim()
    
    const data = {
      id,
      text,
      start,
      end,
      style: textStyles
    }
    
    createCaption(data)
    storage.local.set(config.storage.captions, [...captions, data])
    
    // cleanup:
    setCaption('')
    setStart('')
    setEnd('')
    storage.local.remove(config.storage.caption)
  }

  // these click events will be moved when the button components are made.
  const handleEdit = async event => {
    console.log('edit')
    const id = event.target.closest('li').id
    // copy caption data to inuts
    // then update captions with the submitted data
    //mit doesnt need to be in order, only the times are imortant
  }
  
  const handleDelete = event => {
    if (window.confirm('Delete caption?')) {
      const id = event.target.closest('li').id
      const data = captions.filter(caption => caption.id !== id)
      // need in hook: updateCaptions(data)
    }
  }

  const loadFromStorage = () => {
    const items = storage.local.get(config.storage.captions) ?? []
    const item = storage.local.get(config.storage.caption) ?? ''
    // updateCaptions(items)
    setCaption(item)
  }

  useEffect(() => {
    loadFromStorage()
  }, [])

  // TODO: finish captions list add time, text, edit/delete buttons, styling
  
  return (
    <section className={styles.captions}>
      <form onSubmit={onSubmit}>
        <TextToolbar textStyles={textStyles} setTextStyles={setTextStyles} />
        <Input 
          id="caption"
          data-caption-id
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
              <p style={item.style}>{item.text}</p>
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
