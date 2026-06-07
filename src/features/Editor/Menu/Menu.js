import { useRef } from 'react'
import styles from './Menu.module.css'

function Menu() {
  const listRef = useRef(null)
  const data = useRef({
    startY: 0,
    currentAngle: 0,
    angleAtStart: 0,
    isDragging: false
  })
  
  const angleStep = 360 / listRef.current.children.length // Dynamic math based on item count
  // put in useEffect:
  [ ...listRef.current.children ].forEach((item, index) => { // Position items programmatically around the wheel circle
    const itemAngle = index * angleStep
    item.style.transform = `rotateX(${itemAngle}deg) translateZ(180px)`
  })

  const onPointerDown = event => {
    const { clientY, currentTarget } = event
    data.current = {
      ...data.current,
      startY: clientY
      isDragging: true
    }
    currentTarget.style.transition = 'none' // Instant feedback during drag
  }

  // 3. Track the movement
  const onPointerMove = event => {
    const { clientY, currentTarget } = event
    const { startY, angleAtStart, isDragging } = data.current
    if (!isDragging) {
      return
    }
    const deltaY = clientY - startY
    const dragSensitivity = 3 // Sensitivity factor: higher numbers mean you have to drag further to spin it
    data.current.currentAngle = angleAtStart - (deltaY / dragSensitivity) // Convert pixel drag distance into degrees of rotation
    currentTarget.style.transform = `rotateX(${currentAngle}deg)`
  }

  // 4. Snap to the nearest menu item on release
  const onPointerUp = event => {
    const { currentTarget } = event
    const { isDragging } = data.current
    if (!isDragging) {
      return
    }
    data.current.isDragging = false
    data.current.currentAngle = Math.round(currentAngle / angleStep) * angleStep // Calculate the closest clean item angle step
    
    currentTarget.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)' // Smoothly snap into place
    currentTarget.style.transform = `rotateX(${data.current.currentAngle}deg)`
  }

  const onPointerCancel = event => {
    data.current = {
      startY: 0,
      currentAngle: 0,
      angleAtStart: 0,
      isDragging: false
    }
  }
  
  return (
    <div className="rolodex-container" aria-label="rotating menu">
      <ul ref={listRef}
        onPointerDown={onPointerDown} 
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}>
        <li className="item active">
          <button type="button">Location</button>
        </li>
        <li className="item">
          <button type="button">Caption</button>
        </li>
        <li className="item">
          <button type="button">Description</button>
        </li>
        <li className="item active">
          <button type="button">Media Editor</button>
        </li>
      </ul>
    </div>
  )
}

export default Menu
