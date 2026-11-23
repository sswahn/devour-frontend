const isFiniteNumber = value =>
  typeof value === 'number' && Number.isFinite(value)

const isValidRange = (start, end) =>
  isFiniteNumber(start) &&
  isFiniteNumber(end) &&
  start < end

const cleanStyle = style =>
  Object.fromEntries(
    Object.entries(style ?? {})
      .filter(([, value]) => value !== undefined && value !== null)
  )

const stylesAreEqual = (a, b) => {
  const aKeys = Object.keys(a)
  const bKeys = Object.keys(b)

  if (aKeys.length !== bKeys.length) {
    return false
  }

  return aKeys.every(key => a[key] === b[key])
}

const mergeAdjacentSegments = segments => {
  return segments.reduce((result, segment) => {
    const previous = result[result.length - 1]

    if (
      previous &&
      previous.end === segment.start &&
      stylesAreEqual(previous.style, segment.style)
    ) {
      previous.end = segment.end
      return result
    }

    result.push(segment)
    return result
  }, [])
}

export const normalizeSegments = (text, segments = []) => {
  const length = text.length

  const validSegments = segments
    .map(segment => ({
      ...segment,
      start: Math.max(0, Math.min(length, Number(segment.start))),
      end: Math.max(0, Math.min(length, Number(segment.end))),
      style: cleanStyle(segment.style)
    }))
    .filter(segment =>
      isValidRange(segment.start, segment.end) &&
      Object.keys(segment.style).length
    )

  if (!validSegments.length) {
    return []
  }

  const boundaries = new Set([0, length])

  validSegments.forEach(({ start, end }) => {
    boundaries.add(start)
    boundaries.add(end)
  })

  const points = [...boundaries].sort((a, b) => a - b)
  const normalized = []

  for (let i = 0; i < points.length - 1; i++) {
    const start = points[i]
    const end = points[i + 1]

    if (start === end) {
      continue
    }

    const activeSegments = validSegments.filter(segment =>
      segment.start <= start && segment.end >= end
    )

    if (!activeSegments.length) {
      continue
    }

    const style = activeSegments.reduce(
      (result, segment) => ({
        ...result,
        ...segment.style
      }),
      {}
    )

    if (Object.keys(style).length) {
      normalized.push({
        start,
        end,
        style
      })
    }
  }

  return mergeAdjacentSegments(normalized)
}
