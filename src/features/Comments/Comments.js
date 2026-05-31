import { useState, useRef, useEffect } from 'react'
import { api } from '../../config'
import server from '../../utilities/server'
import useContent from '../../hooks/useContent'
import useGestures from '../../hooks/useGestures'
import FocusTrap from '../../components/FocusTrap/FocusTrap'
import TopNav from './TopNav/TopNav'
import CommentsListItem from './CommentsListItem/CommentsListItem'
import CommentsForm from './CommentsForm/CommentsForm'
import styles from './Comments.module.css'

function Comments({ closeComments }) {
  const { content } = useContent()
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState([])
  const commentsRef = useRef(null)
  
  const ticking = useRef(false)
  const latestDeltaX = useRef(0)
  const { onGestureDown, onGestureMove, onGestureUp, onGestureCancel } = useGestures()


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
    // loadComments()
  }, [])

  useEffect(() => {
    requestAnimationFrame(() => {
      if (!isOpen) {
        setIsOpen(true)
      }
    })
  }, [])

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

  // needs PointerEvents and hook swipeToClose; 
  // should only swipe closed to the side it opened from.




  const throttleTransition = (deltaX, currentTarget) => {
    latestDeltaX.current = deltaX
    if (!ticking.current) {
      ticking.current = true
      requestAnimationFrame(() => {
        currentTarget.style.transform = `translate3d(${latestDeltaX.current}px, 0, 0)`
        ticking.current = false
      })
    }
  }

  const onPointerDown = event => {
    const { clientX, currentTarget } = event
    const EDGE_THRESHOLD = 35
    const width = window.innerWidth
    // Only capture if actually hitting an edge
    const isLeft = clientX < EDGE_THRESHOLD
    const isRight = clientX > width - EDGE_THRESHOLD
    if (isLeft || isRight) {
      onGestureDown(event)
      currentTarget.style.transition = 'none'
      currentTarget.style.willChange = 'transform'
    }
  }
  
  const onPointerMove = event => {
    const { currentTarget } = event
    const { deltaX, edge, axis } = onGestureMove(event)
    if (deltaX === undefined || axis === 'y' || edge === 'right') {
      return
    }
    const raw = Math.max(0, deltaX) 
    const resisted = raw / (1 + Math.abs(raw) / 300)
    throttleTransition(resisted, currentTarget)
  }

  const onPointerUp = event => {
    const { currentTarget } = event
    const { deltaX, edge, velocity, timestamp } = onGestureUp(event)
  
    // 1. Kill the move throttle immediately
    ticking.current = false
  
    const raw = Math.max(0, deltaX)
    const resisted = raw / (1 + Math.abs(raw) / 300)
    const shouldClose = Math.abs(resisted) >= 150
  
    // 2. State Prep: Switch transition ON
    currentTarget.style.transition = 'transform 0.25s cubic-bezier(0.2, 0, 0, 1)'
    
  
    // 3. The "Double rAF" — Guarantees transition starts without layout thrashing
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (shouldClose) {
          navigation.vibrate?.(50)
          const translation = '100vw'
          
          currentTarget.style.transform = `translate3d(${translation}, 0, 0)`
          currentTarget.parentElement.style.opacity = 0
          currentTarget.addEventListener('transitionend', close, { once: true })
        } else {
          currentTarget.style.transform = 'translate3d(0, 0, 0)'
          
          // Cleanup transition when snap-back finishes
          currentTarget.addEventListener('transitionend', () => {
            currentTarget.style.transition = ''
          }, { once: true })
        }
      })
    })
  }

  const onPointerCancel = event => {
    onGestureCancel(event)
  }


  return (
    <aside className={styles.overlay}>
      <div ref={commentsRef} 
        className={[ 
          styles.comments, 
          isOpen === true && styles.open, 
          isOpen === false && styles.close 
        ].filter(Boolean).join(' ')}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}>
        <FocusTrap>
          <TopNav close={close} />
    
          <ul>
            {data.length === 0 
              ? <li>No comments yet.</li> 
              : data.map(comment => <CommentsListItem comment={comment} />)
            }
          </ul>
                         
          <CommentsForm />
        </FocusTrap>
      </div>
    </aside>
  )
}

export default Comments
