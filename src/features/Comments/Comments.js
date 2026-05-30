import { useState, useRef, useEffect } from 'react'
import { api } from '../../config'
import validate from '../../utilities/validate'
import server from '../../utilities/server'
import useContent from '../../hooks/useContent'
import TopNav from './TopNav/TopNav'
import CommentsListItem from './CommentsListItem/CommentsListItem'
import CommentsForm from './CommentsForm/CommentsForm'
import styles from './Comments.module.css'

function Comments({ closeComments }) {
  const { content } = useContent()
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState([])
  const commentsRef = useRef(null)

  const close = () => {
    setIsOpen(false)
    commentsRef.current.addEventListener('transitionend', closeComments, {
      once: true,
    })
  }

  const loadComments = async () => {
    const request = {
      id: content.id
    }
    const response = await server.get(`${api.comments}/${request.id}`)
    setData(response.data)
  }

  useEffect(() => {
    if (navigator.virtualKeyboard) {
      navigator.virtualKeyboard.overlaysContent = true
    }
    return () => {
      if (navigator.virtualKeyboard) {
        navigator.virtualKeyboard.overlaysContent = false
      }
    }
  }, [])

  useEffect(() => {
    // loadComments()
  }, [])

  useEffect(() => {
    requestAnimationFrame(() => {
      if (!isOpen) {
        setIsOpen(true)
      }
    })
  }, [])


  // needs PointerEvents and hook swipeToClose; should only swipe closed to the side it opened from.
  
  return (
    <aside className={styles.overlay}>
      <div ref={commentsRef} className={[ styles.comments, isOpen === true && styles.open, isOpen === false && styles.close ].filter(Boolean).join(' ')}>
        <TopNav close={close} />
  
        <ul>
          {data.length === 0 
            ? <li>No comments yet.</li> 
            : data.map(comment => <CommentsListItem comment={comment} />)
          }
        </ul>
                       
        <CommentsForm />
      </div>
    </aside>
  )
}

export default Comments
