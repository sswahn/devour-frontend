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

  const [position, setPosition] = useState(0);
  const swipeData = useRef({ startX: 0, activeSide: null });
  const EDGE_THRESHOLD = 30; // pixels from the edge to trigger
  const CLOSE_THRESHOLD = 150; // distance swiped to trigger close


  /* 
  const geoRef = useRef(null)
  const handleLocation = event => {
    if (event.target.position) {
      const { latitude, longitude } = event.target.position.coords
      alert(`Coordinates: ${latitude}, ${longitude}`)
    } else if (event.target.error) {
      alert(`Error: ${event.target.error.message}`)
    }
  }
  useEffect(() => {
    const geo = geoRef.current
    geo.addEventListener('location', handleLocation)
    return () => {
      geo.removeEventListener('location', handleLocation)
    }
  }, [])
  <geolocation ref={geoRef}></geolocation>
  */

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

  const resetPointer = () => {
    setPosition(0)
    swipeData.current = { 
      startX: 0, 
      activeSide: null, 
      id: null 
    }
  }

  const onPointerDown = event => {
    const { clientX, pointerId, currentTarget } = event
    const width = window.innerWidth

    if (clientX < EDGE_THRESHOLD) {
      currentTarget.setPointerCapture(pointerId)
      swipeData.current = { 
        startX: clientX, 
        activeSide: 'left' 
      }
    } else if (clientX > width - EDGE_THRESHOLD) {
      currentTarget.setPointerCapture(pointerId)
      swipeData.current = { 
        startX: clientX, 
        activeSide: 'right' 
      }
    }
  }

  const onPointerMove = event => {
    const { activeSide, startX } = swipeData.current
    if (!activeSide) {
      return
    }
    
    const diff = event.clientX - startX

    // Only allow swiping inward from the respective edge
    if (activeSide === 'left' && diff > 0) {
      setPosition(diff)
    } else if (activeSide === 'right' && diff < 0) {
      setPosition(diff)
    }
  }

  const onPointerUp = () => {
    if (!swipeData.current.activeSide) {
      return
    }
    
    const position = event.clientX - startX
    const absPos = Math.abs(position)

    if (absPos > CLOSE_THRESHOLD) {
      action()
    }
    resetPointer()
  }
  
  const onPointerCancel = event => {
    resetPointer()
  }
  
  return (
    <section 
      id="profile"
      className={styles.profile} 
      ref={focusRef} 
      onKeyDown={onKeyDown}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
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
