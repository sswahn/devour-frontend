import { useRef, useEffect } from 'react'
import useFocusStack from '../../hooks/useFocusStack'
import useFocusTrap from '../../hooks/useFocusTrap'
import useGesture from '../../hooks/useGesture'
import useSwipeToClose from '../../hooks/useSwipeToClose'
import CloseButton from '../CloseButton/CloseButton'
import Dropdown from '../Dropdown/Dropdown'
import FollowButton from './FollowButton/FollowButton'
import FollowStats from './FollowStats/FollowStats'
import styles from './Profile.module.css'

function Profile({ closeProfile }) {
  const { pop } = useFocusStack()
  const {overlayRef, focusRef} = useFocusTrap()
  const { edgeSwipeMove, edgeSwipeClose, edgeSwipeReset, handlers } = useGesture()
  
  const swipeToClose = useSwipeToClose()

  const action = () => {
    closeProfile()
    pop()
  }

  /*
  const gesture = () => {
    if (overlayRef.current && action) {
      navigator.vibrate?.(50)
      swipeToClose(overlayRef.current, action)
    }
  }
  */

  const onKeyDown = event => {
    if (event.key === 'Escape') {
      event.preventDefault()
      action()
    }
  }

  /*
  useEffect(() => {
    gesture()
  }, [])
  */

  useEffect(() => {
    if (edgeSwipeMove) {
      overlayRef.current.style.transform = `translateX(${edgeSwipeMove}px)`
    }
  }, [edgeSwipeMove])

  useEffect(() => {
    if (edgeSwipeClose) {
      action()
    }
  }, [edgeSwipeClose])

  useEffect(() => {
    if (edgeSwipeReset) {
      overlayRef.current.style.transition = 'transform 0.2s ease'
      overlayRef.current.style.transform = ''
    }
  }, [edgeSwipeReset])
  
  return (
    <section 
      id="profile"
      className={styles.profile} 
      ref={focusRef} 

      {...handlers}

      onKeyDown={onKeyDown}
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
