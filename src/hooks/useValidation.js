

function useValidation() {

  const validateUsername = username => {
    const pattern = /^[\p{L}\p{N}](?:[\p{L}\p{N}_]*[\p{L}\p{N}])?$/u
    const regex = new RegExp(pattern)
    const value = username.trim()
    let result = true
    if (!regex.test(value) {
      result = false
    }
    if (value.length < 3 || value.length < 30) {
      result = false
    }
    return result
  }

  const validateContact = contact => {
    const value = contact.trim()
    const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/u)
    const phoneRegex = new RegExp(/^\+?\(?\d{1,4}\)?[\s.-]?\(?\d{1,4}\)?[\s.-]?\d{3,4}[\s.-]?\d{3,4}$/)
    if (!emailRegex.test(value)) {
      result = false
    }
    if (phoneRegex.test(value)) {
      result = false
    }
    if (value.length < 3 || value.length > 254) {
      result = false
    }
    return result
  }

}

export default useValidation
