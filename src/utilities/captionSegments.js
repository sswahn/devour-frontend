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

export const updateSegments = (
  text,
  segments,
  selection,
  update
) => {
  if (!selection) {
    return normalizeSegments(text, segments)
  }

  const textLength = text.length

  const start = Math.max(
    0,
    Math.min(textLength, Number(selection.start))
  )

  const end = Math.max(
    0,
    Math.min(textLength, Number(selection.end))
  )

  if (!isValidRange(start, end)) {
    return normalizeSegments(text, segments)
  }

  const normalized = normalizeSegments(text, segments)

  const boundaries = new Set([0, textLength, start, end])

  normalized.forEach(segment => {
    boundaries.add(segment.start)
    boundaries.add(segment.end)
  })

  const points = [...boundaries].sort((a, b) => a - b)
  const updated = []

  for (let i = 0; i < points.length - 1; i++) {
    const rangeStart = points[i]
    const rangeEnd = points[i + 1]

    if (rangeStart === rangeEnd) {
      continue
    }

    const existing = normalized.find(segment =>
      segment.start <= rangeStart &&
      segment.end >= rangeEnd
    )

    const isSelected =
      rangeStart >= start &&
      rangeEnd <= end

    let style = existing?.style ?? {}

    if (isSelected) {
      style = update(style)
    }

    style = cleanStyle(style)

    if (Object.keys(style).length) {
      updated.push({
        start: rangeStart,
        end: rangeEnd,
        style
      })
    }
  }

  return mergeAdjacentSegments(updated)
}

export const updateSegmentsForTextChange = (
  previousText,
  nextText,
  segments = []
) => {
  if (previousText === nextText) {
    return segments
  }

  const previousLength = previousText.length
  const nextLength = nextText.length

  // Find the first character that changed.
  let start = 0

  while (
    start < previousLength &&
    start < nextLength &&
    previousText[start] === nextText[start]
  ) {
    start += 1
  }

  // Find the unchanged suffix.
  let previousEnd = previousLength
  let nextEnd = nextLength

  while (
    previousEnd > start &&
    nextEnd > start &&
    previousText[previousEnd - 1] === nextText[nextEnd - 1]
  ) {
    previousEnd -= 1
    nextEnd -= 1
  }

  const deletedLength = previousEnd - start
  const insertedLength = nextEnd - start
  const delta = insertedLength - deletedLength

  const updated = []

  segments.forEach(segment => {
    if (!isValidRange(segment.start, segment.end)) {
      return
    }

    const segmentStart = Math.max(0, Math.min(previousLength, segment.start))
    const segmentEnd = Math.max(0, Math.min(previousLength, segment.end))
    const style = cleanStyle(segment.style)

    if (!Object.keys(style).length) {
      return
    }

    // The segment is completely before the changed range.
    if (segmentEnd <= start) {
      updated.push({
        start: segmentStart,
        end: segmentEnd,
        style
      })
      return
    }

    // The segment is completely after the changed range.
    if (segmentStart >= previousEnd) {
      updated.push({
        start: segmentStart + delta,
        end: segmentEnd + delta,
        style
      })
      return
    }

    // The segment intersects the changed range.
    //
    // Preserve the part before the edit.
    if (segmentStart < start) {
      updated.push({
        start: segmentStart,
        end: start,
        style
      })
    }

    // Preserve the part after the edit.
    if (segmentEnd > previousEnd) {
      updated.push({
        start: nextEnd,
        end: segmentEnd + delta,
        style
      })
    }
  })

  /*
   * If text was inserted, give the inserted text a style when the
   * insertion occurred inside an existing styled range.
   *
   * For a replacement, this also preserves the style when the
   * replaced range was contained by a single styled segment.
   */
  if (insertedLength > 0) {
    const containingSegment = segments.find(segment =>
      isValidRange(segment.start, segment.end) &&
      segment.start <= start &&
      segment.end >= previousEnd
    )

    if (containingSegment) {
      const style = cleanStyle(containingSegment.style)

      if (Object.keys(style).length) {
        updated.push({
          start,
          end: nextEnd,
          style
        })
      }
    } else if (deletedLength === 0) {
      /*
       * Pure insertion at a boundary.

       * Prefer the style immediately before the insertion. If there
       * isn't one, use the style immediately after it.
       */
      const previousSegment = segments
        .filter(segment =>
          isValidRange(segment.start, segment.end) &&
          segment.end === start
        )
        .sort((a, b) => b.start - a.start)[0]

      const nextSegment = segments
        .filter(segment =>
          isValidRange(segment.start, segment.end) &&
          segment.start === start
        )
        .sort((a, b) => a.end - b.end)[0]

      const inheritedStyle =
        previousSegment?.style ??
        nextSegment?.style ??
        {}

      const style = cleanStyle(inheritedStyle)

      if (Object.keys(style).length) {
        updated.push({
          start,
          end: nextEnd,
          style
        })
      }
    }
  }

  /*
   * Clamp everything to the new text length and remove invalid
   * ranges before returning the result.
   */
  const normalized = updated
    .map(segment => ({
      ...segment,
      start: Math.max(0, Math.min(nextLength, segment.start)),
      end: Math.max(0, Math.min(nextLength, segment.end))
    }))
    .filter(segment =>
      isValidRange(segment.start, segment.end)
    )
    .sort((a, b) => {
      if (a.start !== b.start) {
        return a.start - b.start
      }

      return a.end - b.end
    })

  return mergeAdjacentSegments(normalized)
}
