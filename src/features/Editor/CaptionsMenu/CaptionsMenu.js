import { useState, useRef, useEffect, Fragment } from 'react'
import { normalizeSegments, updateSegments, updateSegmentsForTextChange } from '../../../utilities/captionSegments'
import { renderCaption } from '../../../utilities/renderCaption'
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
  const [errors, setErrors] = useState({})
  const captionsRef = useRef(null)
  const inputRef = useRef(null)

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

  // selection needs to be reset to default somewhere.
  //

  const updateActiveCaption = ({ target: { id, value } }) => {
    if (id === 'text') {
      return updateActiveCaptionText(value)
    }
    setActiveCaption(prev => ({ ...prev, [id]: value }))
  }

  const updateActiveCaptionStyle = update => {
    const { selectionStart, selectionEnd } = inputRef.current
    let selection = null
    if (selectionStart !== selectionEnd) {
      selection = {
        start: selectionStart,
        end: selectionEnd
      }
    }
    setActiveCaption(prev => {
      if (!selection) {
        return {
          ...prev,
          style: update(prev.style)
        }
      }

      const segments = updateSegments(
        prev.text,
        prev.segments,
        selection,
        update
      )

      console.log({
        text: prev.text,
        selection,
        segments: segments.map(segment => ({
          ...segment,
          text: prev.text.slice(segment.start, segment.end)
        }))
      })
      
      return {
        ...prev,
        segments
      }
    })
  }

  /*
   What should really handle this is:
   if a user clicks to create a caption, the existing caption
   should populate the form and allow editing relacement of existing caption.
   A user can still manipluate manually the time of the caption, so validation below
   is still required.
  */
  const validateCaption = caption => {
    // This validates start/end dont overlap
    // Also validate that caption end isnt outside or past the end of the video.
    const sorted = [...captions].sort((a, b) => a.start - b.start)
    const hasOverlap = sorted.some(existing => 
      caption.start < existing.end && caption.end > existing.start
    )
    if (hasOverlap) {
      throw new Error('This caption overlaps with an existing caption.')
    }
    if (caption.end > videoRef.current.duration) {
      throw new Error('Caption end time exceeds the video duration.')
    }
    return caption
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
      setActiveCaption({ // doesnt work perhaps because the persitence doesnt fire before unmounting
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
          ref={inputRef}
          id="text"
          type="text"
          label="Add a caption"
          value={activeCaption.text}
          error={errors.text}
          onChange={updateActiveCaption}
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
