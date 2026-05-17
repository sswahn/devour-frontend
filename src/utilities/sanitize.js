
export const sanitize = (value, maxLength = 1000) => {
  if (typeof value !== 'string') {
    throw new TypeError('Sanitize value must be a valid string.')
  }

  const length = value.trim().length
  if (length < 3 || length > maxLength) {
    throw new Error(`Comments must be between 3 and ${maxLength} characters.`)
  }

  // 2. Map dangerous characters to safe HTML entities
  const htmlEntities = {
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
    '&': '&amp;'
  }

  // 3. Replace characters using a secure global regex
  const sanitizedValue = value.replace(/[<>"'&/]/g, match => htmlEntities[match])

  return sanitizedValue
}
