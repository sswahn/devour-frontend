
const validate = {
  async image (file, options = { maxSizeMB: 5, minDimension: 320, maxDimension: 4096 }) {
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
        // Maximum bounds verification (Prevents downstream memory/processing crash)
        if (img.width > options.maxDimension || img.height > options.maxDimension) {
          return reject(new Error(`Image dimensions are too large. Maximum allowed resolution is ${options.maxDimension}x${options.maxDimension}px.`))
        }
        // If all checks pass, return the original file object
        resolve(file)
      }
  
      img.onerror = () => {
        URL.revokeObjectURL(img.src)
        reject(new Error('Failed to parse image file. The file may be corrupted.'))
      }
    })
  },

  username(username) {
    console.log('validate.username: username: ', username)
    console.log('validate.username: username.length: ', username.length)
    if (username.length < 3 || username.length > 30) {
      throw new Error('Username must be between 3 and 30 characters.')
    }
    const regex = /^[\p{L}\p{N}](?:[\p{L}\p{N}_]*[\p{L}\p{N}])?$/u
    if (!regex.test(username)) {
      throw new Error('Please use a valid username format.')
    }
    return username
  },

  contact(contact) {
    console.log('validate.contact: contact: ', contact)
    console.log('validate.contact: contact.length: ', contact.length)
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
  },

  search(search) {
    if (search.length < 3 || search.length > 100) {
      throw new Error('Search query must be between 3 and 100 characters.')
    }
    const regex = /^[^<>()\[\]\\/|;=~%^]+$/
    if (!regex.test(search)) {
      throw new Error('Special characters are not allowed.')
    }
    return search
  },

  comment(comment) {
    if (comment.length < 3 || comment.length > 1000) {
      throw new Error('Comment length must be between 3 and 1000 characters.')
    }
    return comment
  },
  
  biography(biography) {
    if (biography.length < 3 || biography.length > 250) {
      throw new Error('Bio length must be between 3 and 250 characters.')
    }
    return biography
  }
  
}

export default validate
