

function useValidation() {
  const patterns = {
    username: /^[\p{L}\p{N}](?:[\p{L}\p{N}_]*[\p{L}\p{N}])?$/u,
    contact: '', // email or tel
  }

  const validateUsername = username => {
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u
    const phoneStructureRegex = /^\+?[\d\s\-()]{7,25}$/


  }

}

export default useValidation
