import { useState, useRef, useEffect, Fragment } from 'react'
import { normalizeSegments, updateSegments, updateSegmentsForTextChange } from '../../../utilities/captions'
import { DEFAULT_TEXT_STYLE } from '../../../constants/defaultTextStyle'
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

function CaptionsMenu({ videoRef, closeCaptionsMenu }) {
  const { captions, createCaption } = useCaptions()
  const [activeCaption, setActiveCaption] = useState(() => {
    const { currentTime, duration } = videoRef.current
    return storage.local.get(config.storage.activeCaption) ?? {
      id: crypto.randomUUID(),
      text: '',
      start: currentTime, 
      end: Math.min(currentTime + 3, duration),
      style: DEFAULT_TEXT_STYLE,
      segments: []
    }
  })
  const [captionTimeIsOpen, setCaptionTimeIsOpen] = useState(false) 
  const [selection, setSelection] = useState(null)
  const [errors, setErrors] = useState({})
  const captionsRef = useRef(null)

  const updateActiveCaptionText = text => {
    setActiveCaption(prev => ({
      ...prev,
      text,
      segments: updateSegmentsForTextChange(
        prev.text,
        text,
        prev.segments
      )
    }))
  }

  const updateActiveCaption = ({ target: { id, value } }) => {
    if (id === 'text') {
      return updateActiveCaptionText(value)
    }
    setActiveCaption(prev => ({ ...prev, [id]: value }))
  }

  const updateActiveCaptionStyle = update => {
    setActiveCaption(prev => {
      if (!selection) {
        return {
          ...prev,
          style: update(prev.style)
        }
      }
  
      return {
        ...prev,
        segments: updateSegments(
          prev.text,
          prev.segments,
          selection,
          update
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

  const renderCaption = caption => {
    const { text, segments } = caption
    if (!segments.length) {
      return text
    }
    const normalized = normalizeSegments(text, segments)
    const elements = []
    let position = 0
    normalized.forEach((segment, index) => {
      if (position < segment.start) {
        elements.push(
          <span key={`text-${position}-${segment.start}`}>
            {text.slice(position, segment.start)}
          </span>
        )
      }
      elements.push(
        <span key={`segment-${segment.start}-${segment.end}-${index}`} style={segment.style}>
          {text.slice(segment.start, segment.end)}
        </span>
      )
      position = segment.end
    })
    if (position < text.length) {
      elements.push(
        <span key={`text-${position}-${text.length}`}>
          {text.slice(position)}
        </span>
      )
    }
    return elements
  }
  
  const saveCaption = () => {
    if (!activeCaption.text.trim()) {
      return
    }
    try {
      validateCaption(activeCaption)
      // validation needs rework: start/end are Numbers
      const text = validate.caption.text(activeCaption.text.trim())
      const data = {
        id: activeCaption.id,
        text: text,
        start: Number(activeCaption.start.toFixed(2)), // validate.caption.start(activeCaption.start),
        end: Number(activeCaption.end.toFixed(2)), // validate.caption.end(activeCaption.end.trim()),
        style: activeCaption.style,
        segments: normalizeSegments(text, activeCaption.segments)
      }
      createCaption(data)
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
        setCaptionTimeIsOpen(true) // open dropdown to display inputs
      }
      errorHandler(error, setErrors)
    }
  }

  const onSelect = ({ target }) => {
    const { selectionStart, selectionEnd } = target
    if (selectionStart === selectionEnd) {
      return setSelection(null)
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

  useEffect(() => {
    storage.local.set(config.storage.activeCaption, activeCaption)
  }, [activeCaption])

  return (
    <Fragment>
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
        <CaptionTimeButton setCaptionTimeIsOpen={setCaptionTimeIsOpen} />
        {captionTimeIsOpen && <CaptionTime activeCaption={activeCaption} updateActiveCaption={updateActiveCaption} errors={errors} />}
        <TextToolbar style={activeCaption.style} setStyle={updateActiveCaptionStyle} />
      </section>
      {activeCaption?.text && 
        <figcaption className={styles.liveCaptions} style={activeCaption.style}>
          {renderCaption(activeCaption)}
        </figcaption>
      }
    </Fragment>
  )
}

export default CaptionsMenu
