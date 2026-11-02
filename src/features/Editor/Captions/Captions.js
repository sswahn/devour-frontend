import { useState, useEffect } from 'react'
import * as config from '../../../config'
import storage from '../../../utilities/storage'
import Input from '../../../components/Input/Input'
import TextToolbar from '../../../components/TextToolbar/TextToolbar'
import PenToSquareIcon from '../../../components/Icons/PenToSquareIcon/PenToSquareIcon'
import TrashCanIcon from '../../../components/Icons/TrashCanIcon/TrashCanIcon'
import styles from './Captions.module.css'

function Captions() {
  // TODO: once this is up and running,
  // go ahead and delete the provider, hook, and provider instance.
  const [captions, setCaptions] = useState([])
  const [caption, setCaption] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [style, setStyle] = useState({})
  const [errorMessage, setErrorMessage] = useState('')

  const openFontSizeSlider = () => {
    setFontSizeSlider(prev => !prev)
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
  const onSubmit = async event => {
    event.preventDefault()

    // validate start/end dont overlap
    // break this out into its own function:
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
    
    setCaptions(prev => [ ...prev, data ])
    storage.local.set(config.storage.captions, [...captions, data])
    setCaption('')
    setStart('')
    setEnd('')
    storage.local.remove(config.storage.caption)
    // const blob = await createCaption(blob, data) // this should not be footage, but the concatenated blob
    // result needs name such as tempFootage
    // as original footage must remain intact.
    // setTempFootage(blob)
  }

  // these click events will be moved when the button components are made.
  const handleEdit = async event => {
    console.log('edit')
    // edit the caption in the captions array
    // const id = event.target.closest('li').id
    // need a form inputs for collecting edited data
    //const updated = captions.map(caption =>
     // caption.id === id ? { ...caption, ...data } : caption
   // )
    // then recreate the video with the new data:
    // const blob = await createCaption(footage, data)
    // setTempFootage(blob)
  }
  
  const handleDelete = event => {
    console.log('delete')
    // delete the caption in the captions array
    // const id = event.target.closest('li').id
    // const data = captions.filter(caption => caption.id !== id)
    // then recreate the video with new data:
    // const blob = await createCaption(footage, data)
    // setTempFootage(blob)
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
        <TextToolbar setStyle={setStyle} />
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
