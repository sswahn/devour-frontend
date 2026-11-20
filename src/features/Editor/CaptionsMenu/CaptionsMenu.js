import { useState, useRef, useEffect } from 'react'
import { DEFAULT_TEXT_STYLE } from '../../constants/defaultTextStyle'
import useCaptions from '../../../hooks/useCaptions'
import * as config from '../../../config'
import { errorHandler } from '../../../utilities/errorHandler'
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
  const { captions, createCaption } = useCaptions()
  const [captionTime, setCaptionTime] = useState(false)
  const [selection, setSelection] = useState({})
  const [errors, setErrors] = useState({})
  const captionsRef = useRef(null)

  const updateActiveCaption = ({ target: { id, value } }) => {
    setActiveCaption(prev => ({ ...prev, [id]: value }))
  }

  const updateActiveCaptionStyle = update => {
    setActiveCaption(prev => {
      if (!selection) {
        return { ...prev, style: update(prev.style) }
      }
      const index = prev.segments.findIndex(segment =>
        segment.start === selection.start && segment.end === selection.end
      )
      if (index === -1) {
        return { 
          ...prev, 
          segments: [ 
            ...prev.segments, 
            { 
              ...selection, 
              style: update({})
            }
          ]
        }
      }

      return {
        ...prev,
        segments: prev.segments.map((segment, i) =>
          i === index ? { ...segment, style: update(segment.style) } : segment
        )
      }
    })
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
        style: activeCaption.style,
        segments: activeCaption.segments.toSorted((a, b) => a.start - b.start)
      })
      setActiveCaption({
        id: crypto.randomUUID(),
        text: '',
        start: '',
        end: '',
        style: DEFAULT_TEXT_STYLE,
        segments: []
      })
    } catch (error) {
      if (error?.field === 'start' || error?.field === 'end') {
        setCaptionTime(true) // open dropdown to display inputs
      }
      errorHandler(error, setErrors)
    }
  }

  const onSelect = ({ target }) => {
    const { selectionStart, selectionEnd } = target
    if (selectionStart === selectionEnd) {
      return
    }
    setSelection({
      start: selectionStart,
      end: selectionEnd
    })
  }

  const offClickToClose = event => {
    if (captionsRef.current && !captionsRef.current.contains(event.target)) {
      saveCaption()
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
        error={errors.text}
        onChange={updateActiveCaption}
        onSelect={onSelect}
        required />
      <CaptionTimeButton setCaptionTime={setCaptionTime} />
      {captionTime && <CaptionTime activeCaption={activeCaption} updateActiveCaption={updateActiveCaption} errors={errors} />}
      <TextToolbar style={activeCaption.style} setStyle={updateActiveCaptionStyle} />
    </section>
  )
}

export default CaptionsMenu
