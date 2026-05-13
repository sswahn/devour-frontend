

function useValidation() {

  // consider using state to set Error messages

  const validateUsername = username => {
    const regex = /^[\p{L}\p{N}](?:[\p{L}\p{N}_]*[\p{L}\p{N}])?$/u
    const value = username.trim()
    if (value.length < 3 || value.length > 30) {
      return false
    }
    if (!regex.test(value)) {
      return false
    }
    return true
  }

  const validateContact = contact => {
    const value = contact.trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/u
    const phoneRegex = /^\+?\(?\d{1,4}\)?[\s.-]?\(?\d{1,4}\)?[\s.-]?\d{3,4}[\s.-]?\d{3,4}$/
    if (value.length < 3 || value.length > 254) {
      return false
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
    return false
  }

}

export default useValidation
