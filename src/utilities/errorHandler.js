
export const errorHandler = (error, setErrors) => {
  switch(error?.name) {
    case 'ValidationError':
     return setErrors({ [error.field]: error.message })
    default:
      throw error
  }
}
