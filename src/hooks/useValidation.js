

function useValidation() {

  const validateUsername = username => {
    const regex = /^[\p{L}\p{N}](?:[\p{L}\p{N}_]*[\p{L}\p{N}])?$/u
    const value = username.trim()
    if (value.length < 3 || value.length > 30) {
      throw new Error('Username must be between 3 and 30 characters.')
    }
    if (!regex.test(value)) {
      throw new Error('Please use a valid username format.')
    }
    return true
  }

  const validateContact = contact => {
    const value = contact.trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/u
    const phoneRegex = /^\+?\(?\d{1,4}\)?[\s.-]?\(?\d{1,4}\)?[\s.-]?\d{3,4}[\s.-]?\d{3,4}$/
    if (value.length < 3 || value.length > 254) {
      throw new Error('Contact must be a valid length.')
    }
    if (emailRegex.test(value)) {
      return true
    }
    if (phoneRegex.test(value)) {
      const totalDigits = value.replace(/\D/g, '').length;
      if (totalDigits >= 7 && totalDigits <= 15) {
        return true
      }
    }
    throw new Error('Please use a valid email or phone number.')
  }

}

export default useValidation
