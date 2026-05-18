import { createRoot } from 'react-dom/client'
import registerServiceWorker from './registerServiceWorker'
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
registerServiceWorker()
