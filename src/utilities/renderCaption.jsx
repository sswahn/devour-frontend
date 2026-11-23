import { normalizeSegments } from './captionSegments'

export const renderCaption = caption => {
  const { text, segments } = caption
  if (!segments.length) {
    return text
  }
  const normalized = normalizeSegments(text, segments)
  const elements = []
  let position = 0

  console.log({
    text: JSON.stringify(text),
    normalized
  })
  
  normalized.forEach((segment, index) => {
    if (position < segment.start) {
      elements.push(text.slice(position, segment.start))
    }
    elements.push(
      <span key={`segment-${segment.start}-${segment.end}-${index}`} style={segment.style}>
        {text.slice(segment.start, segment.end)}
      </span>
    )
    position = segment.end
  })
  if (position < text.length) {
    elements.push(text.slice(position))
  }
  return elements
}
  
