

function useValidation() {

  const validateImage = async (file, options = { maxSizeMB: 5, minDimension: 320 }) => {
    if (!file) {
      throw new Error('No image file found.')
    }
    // Define allowed MIME types and extensions
    const allowedMimeTypes = ['image/webp', 'image/png', 'image/jpeg']
    const allowedExtensions = /(\.webp|\.png|\.jpg|\.jpeg)$/i
    // Validate both the MIME type and the file extension
    const isValidMime = allowedMimeTypes.includes(file.type)
    const isValidExtension = allowedExtensions.test(file.name)
    if (!isValidMime || !isValidExtension) {
      throw new Error('Invalid file type, must be .webp .png or .jpg')
    }
    // 2. File Size Validation
    const maxSizeBytes = options.maxSizeMB * 1024 * 1024
    if (file.size > maxSizeBytes) {
      throw new Error(`File is too large. Maximum allowed size is ${options.maxSizeMB}MB.`)
    }
    // 3. Image Dimensions Validation (Asynchronous)
    return new Promise((resolve, reject) => {
      const img = new Image()
      
      // Create an object URL from the file blob to load into the Image object
      img.src = URL.createObjectURL(file)
  
      img.onload = () => {
        // Clean up memory allocated for the object URL
        URL.revokeObjectURL(img.src)
        // Verify image meets the 2026 platform minimum standards 320px
        if (img.width < options.minDimension || img.height < options.minDimension) {
          return reject(new Error(`Image dimensions are too small. Minimum resolution is ${options.minDimension}x${options.minDimension}px.`))
        }
        // If all checks pass, return the original file object
        resolve(file)
      }
  
      img.onerror = () => {
        URL.revokeObjectURL(img.src)
        reject(new Error('Failed to parse image file. The file may be corrupted.'))
      }
    })
  }

  const validateUsername = username => {
    if (username.length < 3 || username.length > 30) {
      throw new Error('Username must be between 3 and 30 characters.')
    }
    const regex = /^[\p{L}\p{N}](?:[\p{L}\p{N}_]*[\p{L}\p{N}])?$/u
    if (!regex.test(username)) {
      throw new Error('Please use a valid username format.')
    }
    return username
  }

  const validateContact = contact => {
    if (contact.length < 3 || contact.length > 254) {
      throw new Error('Contact must be a valid length.')
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/u
    if (emailRegex.test(contact)) {
      return contact
    }
    const phoneRegex = /^\+?\(?\d{1,4}\)?[\s.-]?\(?\d{1,4}\)?[\s.-]?\d{3,4}[\s.-]?\d{3,4}$/
    if (phoneRegex.test(contact)) {
      const totalDigits = contact.replace(/\D/g, '').length
      if (totalDigits >= 7 && totalDigits <= 15) {
        return contact
      }
    }
    throw new Error('Please use a valid email or phone number.')
  }

  const validateSearchTerm = term => {
    if (term.length < 3 || term.length > 100) {
      throw new Error('Search query must be between 3 and 100 characters.')
    }
    const regex = /^[^<>()\[\]\\/|;=~%^]+$/
    if (!regex.test(term)) {
      throw new Error('Special characters are not allowed.')
    }
    return term
  }
  
  return { validateImage, validateUsername, validateContact, validateSearchTerm }
}

export default useValidation
