

export const errorHandler = error => {
  switch(error?.name) {
    case 'ValidationError':
     return setErrors({ [error.field]: error.message })
    default:
      throw error
  }
}
