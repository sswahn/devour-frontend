import { useState, useRef, useEffect } from 'react'
import useCaptions from '../../../hooks/useCaptions'
import * as config from '../../../config'
import storage from '../../../utilities/storage'
import CaptionTime from './CaptionTime/CaptionTime'
import TextToolbar from '../../../components/TextToolbar/TextToolbar'
import Input from '../../../components/Input/Input'
import PenToSquareIcon from '../../../components/Icons/PenToSquareIcon/PenToSquareIcon'
import TrashCanIcon from '../../../components/Icons/TrashCanIcon/TrashCanIcon'
import styles from './CaptionsMenu.module.css'

function CaptionsMenu({ activeCaption, setActiveCaption, closeCaptionsMenu }) {
  const { captions, createCaption, updateCaption, deleteCaption } = useCaptions()
  const [errorMessage, setErrorMessage] = useState('')
  const captionsRef = useRef(null)

  const updateActiveCaption = ({ target: { id, value } }) => {
    setActiveCaption(prev => ({ ...prev, [id]: value }))
  }

  const updateActiveCaptionStyle = style => {
    setActiveCaption(prev => ({ ...prev, style: { ...prev.style, ...style } }))
  }

  const formatTime = time => {
    if (time === '' || time == null) {
      throw new TypeError('Time is required.')
    }
    
  }
  
  const saveCaption = () => {
    if (!activeCaption.text.trim()) {
      return
    }
    // This validates start/end dont overlap
    // break this out into its own function probably part of validation utility:
    /*
    const sorted = [...captions].sort((a, b) => a.start - b.start)
    const conflicted = sorted.some((caption, index) =>
      index > 0 && caption.start < sorted[index - 1].end
    )
    if (conflicted) {
      return alert('This caption conflicts with an existing caption.')
    }
    */

    // in the valdiation util, for END, need to check end isnt outside video duration
    // this component needs the duration of the concatenated blob created in Editor

    // be sure to get start time from videoRef.current.currentTime
    // on a related note, video playback should pause, when the open comments button is clicked (if it isnt already)
    
    const start = formatTime(activeCaption.start.trim())
    const end = formatTime(activeCaption.end.trim())
    
    const data = {
      id: activeCaption.id,
      text: activeCaption.text.trim(), // validate
      start: start, // validate
      end: end, // validate
      style: activeCaption.style
    }
    createCaption(data)
    setActiveCaption({
      id: crypto.randomUUID(),
      text: '',
      start: '',
      end: '',
      style: {
        fontSize: 12,
        color: '#ffffff',
        bold: false,
        italic: false,
        underline: false,
        stroke: 'none',
        strokeColor: '#000000',
        strokeWidth: 2,
        backgroundColor: 'transparent',
        textAlign: 'left'
      }
    })
  }

  /* these click events will be moved to the edit caption form
  const handleEdit = async event => {
    const id = event.target.closest('li').id
    const data = {
      // need an edit form
    }
    updateCaption(id, data)
  }
  
  const handleDelete = event => {
    if (window.confirm('Delete caption?')) {
      const id = event.target.closest('li').id
      deleteCaption(id)
    }
  }
  */

  const offClickToClose = event => {
    if (captionsRef.current && !captionsRef.current.contains(event.target)) {
      saveCaption() // await this before closing
      closeCaptionsMenu()
    }
  }

  useEffect(() => {
    document.addEventListener('click', offClickToClose)
    return () => {
      document.removeEventListener('click', offClickToClose)
    }
  }, [offClickToClose])

  return (
    <section ref={captionsRef} className={styles.captionsMenu}>
      <Input 
        id="text"
        type="text"
        label="Add a caption"
        value={activeCaption.text}
        error={errorMessage}
        onChange={updateActiveCaption}
        required />
      <CaptionTime activeCaption={activeCaption} updateActiveCaption={updateActiveCaption} />
      <TextToolbar textStyles={activeCaption.style} setTextStyles={updateActiveCaptionStyle} />
    </section>
  )
}

export default CaptionsMenu
