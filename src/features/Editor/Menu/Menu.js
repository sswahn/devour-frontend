import styles from './Menu.module.css'

function Menu() {
  const items = document.querySelectorAll('.rolodex-wheel .item')
  
  let isDragging = false
  let startY = 0
  let currentAngle = 0
  let angleAtStart = 0

  // Dynamic math based on your item count
  const totalItems = items.length
  const angleStep = 360 / totalItems
  
  // Sensitivity factor: higher numbers mean you have to drag further to spin it
  const dragSensitivity = 3
  
  // 1. Position items programmatically around the wheel circle
  items.forEach((item, index) => {
    const itemAngle = index * angleStep
    item.style.transform = `rotateX(${itemAngle}deg) translateZ(180px)`
  })

  // 2. Capture the initial touch/click
  const onPointerDown = event => {
    const { currentTarget } = event
    isDragging = true
    startY = e.clientY
    angleAtStart = currentAngle
    currentTarget.style.transition = 'none' // Instant feedback during drag
  }

  // 3. Track the movement
  const onPointerMove = event => {
    if (!isDragging) {
      return
    }
    const { currentTarget } = event
    const deltaY = e.clientY - startY
    // Convert pixel drag distance into degrees of rotation
    currentAngle = angleAtStart - (deltaY / dragSensitivity)
    
    currentTarget.style.transform = `rotateX(${currentAngle}deg)`
  }

  // 4. Snap to the nearest menu item on release
  const onPointerUp = event => {
    if (!isDragging) {
      return
    }
    isDragging = false
    const { currentTarget } = event
    
    // Calculate the closest clean item angle step
    const snappedAngle = Math.round(currentAngle / angleStep) * angleStep;
    currentAngle = snappedAngle
    
    // Smoothly snap into place
    currentTarget.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)';
    currentTarget.style.transform = `rotateX(${currentAngle}deg)`;
  }

  // Clean up if pointer leaves the screen unexpectedly
  const onPointerCancel = event => {
    isDragging = false
  }
  
  return (
    <div className="rolodex-contain aria-label="Rolodex Menu">
      <ul className="rolodex-wheel"
        onPointerDown={onPointerDown} 
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}>
        <li className="item active">
          <button type="button">Home</button>
        </li>
        <li className="item">About</li>
        <li className="item">Services</li>
        <li className="item">Portfolio</li>
        <li className="item">Contact</li>
      </ul>
    </div>
  )
}

export default Menu
