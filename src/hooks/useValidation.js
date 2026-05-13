

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

}

export default useValidation
