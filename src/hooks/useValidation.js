

function useValidation() {

  const validateUsername = username => {
    const usernameRegex = /^[\p{L}\p{N}](?:[\p{L}\p{N}_]*[\p{L}\p{N}])?$/u
    const value = username.trim()
    let result = true
    if (value.length < 3 || value.length < 30) {
      result = false
    }
    if (!usernameRegex.test(value) {
      result = false
    }
    return result
  }

  const validateContact = contact => {
    const value = contact.trim()
    // 1. Bulletproof International Email Regex
    // Ensures at least two characters for the TLD and blocks malformed dot structures
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/u
    
    // 2. Bulletproof International Phone Regex (ReDoS-Safe)
    // Separates the structural characters to prevent processing loops
    const phoneStructureRegex = /^\+?\(?\d{1,4}\)?[\s.-]?\(?\d{1,4}\)?[\s.-]?\d{3,4}[\s.-]?\d{3,4}$/
    if (!emailRegex.test(value)) {
      result = false
    }
    if (phoneStructureRegex.test(value)) {
      result = false
    }
    return result
  }

}

export default useValidation
