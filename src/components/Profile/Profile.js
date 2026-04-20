import { useRef, useEffect } from 'react'
import useFocusStack from '../../hooks/useFocusStack'
import useFocusTrap from '../../hooks/useFocusTrap'
import CloseButton from '../CloseButton/CloseButton'
import Dropdown from '../Dropdown/Dropdown'
import FollowButton from './FollowButton/FollowButton'
import FollowStats from './FollowStats/FollowStats'
import styles from './Profile.module.css'

function Profile({ closeProfile }) {
  const { pop } = useFocusStack()
  const focusRef = useFocusTrap()
  const swipeData = useRef({ 
    startX: 0, 
    activeSide: null 
  })

  const action = () => {
    closeProfile()
    pop()
  }
  
  const onKeyDown = event => {
    if (event.key === 'Escape') {
      event.preventDefault()
      action() 
    }
  }

  const resetSwipeData = () => {
    swipeData.current = { 
      startX: 0, 
      activeSide: null
    }
  }

  const onPointerDown = event => {
    const { clientX, pointerId, currentTarget } = event
    const width = window.innerWidth
    const EDGE_THRESHOLD = 30
    
    // Only capture if actually hitting an edge
    const isLeft = clientX < EDGE_THRESHOLD
    const isRight = clientX > width - EDGE_THRESHOLD
    if (isLeft || isRight) {
      currentTarget.setPointerCapture(pointerId)
      swipeData.current = { 
        startX: clientX, 
        activeSide: isLeft ? 'left' : 'right'
      }
    }
  }

  const onPointerUp = event => {
    const { activeSide, startX } = swipeData.current
    if (!activeSide) {
      return
    }
    const diff = event.clientX - startX
    const absPos = Math.abs(diff)
    const isCorrectDir = activeSide === 'left' ? diff > 0 : diff < 0
    const CLOSE_THRESHOLD = 150 
    
    if (absPos > CLOSE_THRESHOLD && isCorrectDir) {
      action()
    }
    resetSwipeData()
  }
  
  const onPointerCancel = event => {
    resetSwipeData()
  }
  
  return (
    <section 
      id="profile"
      className={styles.profile} 
      ref={focusRef} 
      onKeyDown={onKeyDown}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      tabIndex={-1} 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="username" 
      aria-describedby="biography">
      <nav>
        <CloseButton overlay="profile" close={closeProfile} />
        <Dropdown items={[
          { text: 'alert message', method: () => alert('dropdown item clicked.') },
          { text: 'console log message', method: () => console.log('dropdown item clicked.') }
        ]} />
      </nav>
      <header>
        <img src="" alt={`{''}'s profile picture`} />
        <div>
          <h1 id="username">Username</h1>
          <address>New York, NY</address>
           {/* <p id="biography">Some biographical information about Username.</p> */}
        </div>
      </header>
  
      <FollowButton />
      <FollowStats />
        
      <div id="profile-feed" role="feed">
        {/* feed role="feed" must have article elements as children */}
      </div>

    </section>
  )
}

export default Profile
