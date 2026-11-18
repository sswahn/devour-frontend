import { useState, Fragment } from 'react'

function Figcaption({ activeCaption }) {
  const { captions } = useCaptions()
  const [currentCaption, setCurrentCaption] = useState({})
  
  return (
    <Fragment>
      {activeCaption?.text && 
        <figcaption style={activeCaption.style}>
          {activeCaption.segments.length ? renderSegments() : activeCaption.text}
        </figcaption>
      }
      {/* break out into figcaptions component */}
      {currentCaption?.text && <figcaption style={currentCaption.style}>{currentCaption.text}</figcaption>}
    </Fragment>
  )
}

export default Figcaption
