// scrollEngine.js
let subscribers = new Set()
let started = false
let ticking = false
let deltaY = 0
let velocity = 0
let direction = 'idle'
let scrollStart = 0
let prevScrollY = 0
let prevTimestamp = performance.now()

function notify(data) {
  for (const fn of subscribers) {
    fn(data)
  }
}

function update(timestamp) {
  const scrollY = window.scrollY
  
  // Calculate change in Y
  deltaY = scrollY - scrollStart 
  
  // Calculate current scroll direction
  const dY = scrollY - prevScrollY
  direction = dY > 0 ? 'down' : dY < 0 ? 'up' : 'idle'
  
  // Set prevScrollY for use in next frame
  prevScrollY = scrollY

  // Calculate scroll velocity
  const deltaTime = timestamp - prevTimestamp
  const rawVelocity = dY / deltaTime

  // Formula: (currentRawVelocity * smoothingFactor) + (PreviousSmoothedVelocity * (1 - Factor))
  // (smoothingFactor: 0 < factor <= 1. Smaller = smoother.
  velocity = (rawVelocity * 0.05) + (velocity * (1 - 0.05))
  // try for a buttery scroll:
  //velocity = (rawVelocity * 0.03) + (velocity * 0.97)

  console.log('velocity: ', velocity)
  
  // Set prevTimestamp for use in next frame
  prevTimestamp = timestamp
  
  notify({
    deltaY,
    direction,
    velocity
  })
}

function onScroll(event) {
  // Throttle on scroll event
  if (!ticking) {
    requestAnimationFrame(timestamp => {
      update(timestamp)
      ticking = false
    })
    ticking = true
  }
}

function onScrollEnd(event) {
  scrollStart = window.scrollY
  
  notify({
    deltaY,
    direction,
    velocity: 0
  })
}

function start() {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener("scrollend", onScrollEnd, { passive: true })
  started = true
}

function stop() {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('scrollend', onScrollEnd)
  started = false
}

const scroll = {
  subscribe(fn) {
    if (typeof fn !== 'function') {
      throw new TypeError('scroll.subscribe arugument must be of type "function".')
    }
    
    if (!started) {
      start()
    }
   
    subscribers.add(fn)
    
    fn({
      deltaY,
      direction,
      velocity
    })
    
    return () => {
      subscribers.delete(fn)
      if (subscribers.size === 0) {
        stop()
      }
    }
  }
}

export default scroll
