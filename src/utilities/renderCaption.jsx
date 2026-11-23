import { normalizeSegments } from './captions'

 export const renderCaption = caption => {
    const { text, segments } = caption
    if (!segments.length) {
      return text
    }
    const normalized = normalizeSegments(text, segments)
    const elements = []
    let position = 0
    normalized.forEach((segment, index) => {
      if (position < segment.start) {
        elements.push(
          <span key={`text-${position}-${segment.start}`}>
            {text.slice(position, segment.start)}
          </span>
        )
      }
      elements.push(
        <span key={`segment-${segment.start}-${segment.end}-${index}`} style={segment.style}>
          {text.slice(segment.start, segment.end)}
        </span>
      )
      position = segment.end
    })
    if (position < text.length) {
      elements.push(
        <span key={`text-${position}-${text.length}`}>
          {text.slice(position)}
        </span>
      )
    }
    return elements
  }
  
