// scrollEngine.js
let element = null
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
  const scrollY = element.scrollTop
  
  // Calculate change in Y
  deltaY = scrollY - scrollStart 
  
  // Calculate current scroll direction
  const dY = scrollY - prevScrollY
  direction = dY > 0 ? 'down' : dY < 0 ? 'up' : 'idle'
  
  // Set prevScrollY for use in next frame
  prevScrollY = scrollY

  // Calculate scroll velocity
  const deltaTime = timestamp - prevTimestamp
  const rawVelocity = deltaY / deltaTime

  // Formula: (currentRawVelocity * smoothingFactor) + (PreviousSmoothedVelocity * (1 - Factor))
  // (smoothingFactor: 0 < factor <= 1. Smaller = smoother.
  velocity = (rawVelocity * 0.05) + (velocity * (1 - 0.05))

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
  scrollStart = element.scrollTop
  
  notify({
    deltaY,
    direction,
    velocity: 0
  })
}

function start() {
  if (element) {
    element.addEventListener('scroll', onScroll, { passive: true })
    element.addEventListener("scrollend", onScrollEnd, { passive: true })
    started = true
  }
}

function stop() {
  if (element) {
    element.removeEventListener('scroll', onScroll)
    element.removeEventListener('scrollend', onScrollEnd)
    started = false
  }
}

const scroll = {
  get(feed) {
    console.log('getting scroll ref in scroll.get(): ', feed)
    element = feed
  },
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
