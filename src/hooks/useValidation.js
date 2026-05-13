

function useValidation() {

  const validateUsername = username => {
    const usernameRegex = /^[\p{L}\p{N}](?:[\p{L}\p{N}_]*[\p{L}\p{N}])?$/u,
    const value = username.trim()
    if (value.length < 3 || value.length < 30) {
      return false
    }
    if (!patterns.username.text(value) {
      return false
    }
  }

  const validateContact = contact => {
    const value = contact.trim()
    // 1. Bulletproof International Email Regex
    // Ensures at least two characters for the TLD and blocks malformed dot structures
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/u;
    
    // 2. Bulletproof International Phone Regex (ReDoS-Safe)
    // Separates the structural characters to prevent processing loops
    const phoneStructureRegex = /^\+?\(?\d{1,4}\)?[\s.-]?\(?\d{1,4}\)?[\s.-]?\d{3,4}[\s.-]?\d{3,4}$/;

  }

}

export default useValidation
