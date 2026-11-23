import { useState, useRef, useEffect, Fragment } from 'react'
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

function CaptionsMenu({ closeCaptionsMenu }) {
  const { captions, createCaption } = useCaptions()
  const [activeCaption, setActiveCaption] = useState(() => 
    storage.local.get(config.storage.activeCaption) ?? {
      id: crypto.randomUUID(),
      text: '',
      start: '',
      end: '',
      style: DEFAULT_TEXT_STYLE,
      segments: []
    }
  )
  const [captionTime, setCaptionTime] = useState(false)
  const [selection, setSelection] = useState({})
  const [errors, setErrors] = useState({})
  const captionsRef = useRef(null)

  const updateActiveCaption = ({ target: { id, value } }) => {
    setActiveCaption(prev => ({ ...prev, [id]: value }))
  }

  const updateActiveCaptionStyle = update => {
    setActiveCaption(prev => {
      if (!Object.keys(selection).length) {
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
    const text = activeCaption?.text
    if (!text || (typeof text === 'string' && !text.trim()) || (Array.isArray(text) && !text.length)) {
      return
    }
    try {
      validateCaption(activeCaption)
      // validation needs rework, text can now be an array, and start/end are Numbers.
      const data = {
        id: activeCaption.id,
        text: activeCaption.text, // validate.caption.text(activeCaption.text.trim()),
        start: activeCaption.start, // validate.caption.start(activeCaption.start),
        end: activeCaption.end, // validate.caption.end(activeCaption.end.trim()),
        style: activeCaption.style,
        segments: activeCaption.segments //.toSorted((a, b) => a.start - b.start) // this sort is redundant
      }
      console.log('data for createCaption: ', data)
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
        setCaptionTime(true) // open dropdown to display inputs
      }
      errorHandler(error, setErrors)
    }
  }

  const renderSegments = () => {
    const { text, segments } = activeCaption
    const elements = []
    let position = 0
    // Filter out invalid/empty segments and sort by start index
    const sortedSegments = [...segments]
      .filter((seg) => seg.start < seg.end)
      .sort((a, b) => a.start - b.start)
    sortedSegments.forEach((segment) => {
      const start = Math.max(position, segment.start)
      const end = Math.min(text.length, segment.end)
      if (start >= end) {
        return
      }
      // 1. Unstyled text before the segment
      if (position < start) {
        elements.push(
          <span key={`gap-${position}-${start}`}>
            {text.slice(position, start)}
          </span>
        )
      }
      // 2. Styled segment with position-based key
      elements.push(
        <span key={`seg-${start}-${end}`} style={segment.style}>
          {text.slice(start, end)}
        </span>
      )
      position = end
    })
    // 3. Remaining trailing text
    if (position < text.length) {
      elements.push(
        <span key={`rem-${position}-${text.length}`}>
          {text.slice(position)}
        </span>
      )
    }
    setActiveCaption(prev => ({ ...prev, text: elements }))
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
        <CaptionTimeButton setCaptionTime={setCaptionTime} />
        {captionTime && <CaptionTime activeCaption={activeCaption} updateActiveCaption={updateActiveCaption} errors={errors} />}
        <TextToolbar style={activeCaption.style} setStyle={updateActiveCaptionStyle} />
      </section>
      {activeCaption?.text && 
        <figcaption className={styles.liveCaptions} style={activeCaption.style}>
          {activeCaption.text}
        </figcaption>
      }
    </Fragment>
  )
}

export default CaptionsMenu
