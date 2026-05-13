

function useValidation() {

  const validateSearchTerm = term => {
    const regex = /^[^<>()\[\]\\/|;=~%^]+$/
    if (term.length < 3 || term.length > 100) {
      throw new Error('Search query must be between 3 and 100 characters.')
    }
    if (!regex.test(term)) {
      throw new Error('Special characters are not allowed.')
    }
    return term
  }

  const validateUsername = username => {
    const regex = /^[\p{L}\p{N}](?:[\p{L}\p{N}_]*[\p{L}\p{N}])?$/u
    if (username.length < 3 || username.length > 30) {
      throw new Error('Username must be between 3 and 30 characters.')
    }
    if (!regex.test(username)) {
      throw new Error('Please use a valid username format.')
    }
    return username
  }

  const validateContact = contact => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/u
    const phoneRegex = /^\+?\(?\d{1,4}\)?[\s.-]?\(?\d{1,4}\)?[\s.-]?\d{3,4}[\s.-]?\d{3,4}$/
    if (contact.length < 3 || contact.length > 254) {
      throw new Error('Contact must be a valid length.')
    }
    if (emailRegex.test(contact)) {
      return contact
    }
    if (phoneRegex.test(contact)) {
      const totalDigits = value.replace(/\D/g, '').length;
      if (totalDigits >= 7 && totalDigits <= 15) {
        return contact
      }
    }
    throw new Error('Please use a valid email or phone number.')
  }

  
  return { validateUsername, validateContact }
}

export default useValidation
