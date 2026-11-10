import { useState, useEffect } from 'react'
import useCaptions from '../../../hooks/useCaptions'
import * as config from '../../../config'
import storage from '../../../utilities/storage'
import TextToolbar from '../../../components/TextToolbar/TextToolbar'
import Input from '../../../components/Input/Input'
import PenToSquareIcon from '../../../components/Icons/PenToSquareIcon/PenToSquareIcon'
import TrashCanIcon from '../../../components/Icons/TrashCanIcon/TrashCanIcon'
import styles from './CaptionsMenu.module.css'

const createDraft = () => {
  // move this to captions provider:
  return {
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
  }
}

function CaptionsMenu({ caption, setCaption }) {
  const { captions, createCaption, updateCaption, deleteCaption } = useCaptions()
  
  const [draft, setDraft] = useState(() => 
    storage.local.get(config.storage.draft) ?? createDraft()
  )
  const [errorMessage, setErrorMessage] = useState('')

  const updateDraft = ({ target: { id, value } }) => {
    setDraft(prev => ({ ...prev, [id]: value }))
  }

  const updateDraftStyle = style => {
    setDraft(prev => ({ ...prev, style: { ...prev.style, ...style } }))
  }
  
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

    const data = {
      id: draft.id,
      text: draft.text.trim(), // validate
      start: draft.start.trim(), // validate
      end: draft.end.trim(), // validate
      style: draft.style
    }
    createCaption(data)
    setDraft(createDraft())
  }

  // these click events will be moved when the button components are made.
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

  useEffect(() => {
    storage.local.set(config.storage.draft, draft)
  }, [draft])

  return (
    <section className={styles.captionsMenu}>
      <form onSubmit={onSubmit}>
        <TextToolbar textStyles={draft.style} setTextStyles={updateDraftStyle} />
        <Input 
          id="text"
          type="text"
          label="Add a caption"
          value={draft.text}
          error={errorMessage}
          onChange={updateDraft}
          required />
        <Input
          id="start"
          inputMode="decimal"
          type="number" 
          step="any"
          label="Start"
          value={draft.start} // consider getting default value from timeline
          error={errorMessage}
          onChange={updateDraft}
          required />
        <Input
          id="end"
          inputMode="decimal"
          type="number" 
          step="any"
          label="End"
          value={draft.end}
          error={errorMessage}
          onChange={updateDraft}
          required />
        <button type="submit" aria-label="submit caption">Submit</button>
      </form>
      {/* 
      move draft state to parent so live updates can appear in the editor figcaption
      or... absolutely position this following <p> where figcaption would be, 
      to give the impression of what it would look like.
      */}
      {draft.text && <p style={draft.style}>{draft.text}</p>}
    </section>
  )
}

export default CaptionsMenu
