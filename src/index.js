//import * as serviceWorker from './sw'
import { createRoot } from 'react-dom/client'
import App from './App'
import logError from "./utilities/logError"

// Global error listeners
window.addEventListener('error', event => {
  logError(event.error || new Error('Unknown error'), { source: "error" })
})
window.addEventListener('unhandledrejection', event => {
  logError(event.reason || new Error('Unknown promise rejection.'), { source: "unhandledrejection" })
})

createRoot(document.getElementById('root')).render(<App />)

if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      navigator.serviceWorker.register('/sw.js')
    } catch (error) { 
      logError(error, { source: "serviceWorkerRegistration" }))
    }
  })
}
