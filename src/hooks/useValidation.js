

function useValidation() {

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

  const validateComment = comment => {
    if (comment.length < 3 || comment.length > 1000) {
      throw new Error('Comments must be between 3 and 1000 characters.')
    }
    const xssHtmlRegex = /<[^>]*>/
    if (xssHtmlRegex.test(comment)) {
      throw new Error('HTML tags and scripts are not allowed in comments.')
    }
    return comment
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

  
  return { validateUsername, validateContact, validateSearchTerm }
}

export default useValidation
