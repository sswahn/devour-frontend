
/* 
context = {
  component: 'HomeButton',
  action: 'onClick',
  userId: context.user.id
}
*/

function logError(error, context = {}) {
  const payload = {
    message: error.message,
    stack: error.stack,
    name: error.name,
    context,
    timestamp: Date.now(),
    userAgent: navigator.userAgent
  }
  
  console.error('error payload: ', payload)
  
  // make request to sentry
}

export default logError
