import { Fragment } from 'react'

function Figcaption({ activeCaption }) {

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
