import { useState, useRef, useEffect } from 'react'
import useCaptions from '../../../hooks/useCaptions'
import * as config from '../../../config'
import storage from '../../../utilities/storage'
import validate from '../../../utilities/validate'
import CaptionTimeButton from './CaptionTimeButton/CaptionTimeButton'
import CaptionTime from './CaptionTime/CaptionTime'
import TextToolbar from '../../../components/TextToolbar/TextToolbar'
import Input from '../../../components/Input/Input'
import PenToSquareIcon from '../../../components/Icons/PenToSquareIcon/PenToSquareIcon'
import TrashCanIcon from '../../../components/Icons/TrashCanIcon/TrashCanIcon'
import styles from './CaptionsMenu.module.css'

  // consider keypress (enter/esxapq) and focus controls.
  // if designed for mobile it may not need

function CaptionsMenu({ activeCaption, setActiveCaption, closeCaptionsMenu }) {
  const { captions, createCaption, updateCaption, deleteCaption } = useCaptions()
  const [captionTime, setCaptionTime] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const captionsRef = useRef(null)

  const updateActiveCaption = ({ target: { id, value } }) => {
    setActiveCaption(prev => ({ ...prev, [id]: value }))
  }

  const updateActiveCaptionStyle = update => {
    setActiveCaption(prev => ({ ...prev, style: update(prev.style) }))
  }

  const validateCaption = caption => {
    // This validates start/end dont overlap
    // break this out into its own function:
    /*
    const sorted = [...captions].sort((a, b) => a.start - b.start)
    const conflicted = sorted.some((caption, index) =>
      index > 0 && caption.start < sorted[index - 1].end
    )
    if (conflicted) {
      throw new Error('This caption conflicts with an existing caption.')
    }
    */

    // need to check end isnt outside video duration
    // need duration prop from the concatenated blob created in Editor
    return caption
  }
  
  const saveCaption = () => {
    if (!activeCaption.text.trim()) {
      return
    }
    try {
      validateCaption(activeCaption)
      createCaption({
        id: activeCaption.id,
        text: validate.caption.text(activeCaption.text.trim()),
        start: validate.caption.start(activeCaption.start.trim()),
        end: validate.caption.end(activeCaption.end.trim()),
        style: activeCaption.style
      })
      setActiveCaption({
        id: crypto.randomUUID(),
        text: '',
        start: '',
        end: '',
        style: {
          // fontFamily: '',
          fontSize: 16,
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
    } catch (error) {
      console.log(error)
    }
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

  // debug:
  useEffect(() => {
    console.log('activeCaption.style: ', activeCaption.style)
  }, [activeCaption.style])

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
      <CaptionTimeButton setCaptionTime={setCaptionTime} />
      {captionTime && <CaptionTime activeCaption={activeCaption} updateActiveCaption={updateActiveCaption} />}
      <TextToolbar style={activeCaption.style} setStyle={updateActiveCaptionStyle} />
    </section>
  )
}

export default CaptionsMenu
