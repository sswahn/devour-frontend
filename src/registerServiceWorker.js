
export default async function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      try {
        const registration = await navigator.serviceWorker.register('/devour-frontend/sw.js') // change this later when live to /sw.js
  
        console.log('SW registered:', registration)
      }
      catch (error) {
        console.error('SW registration failed:', error)
      }
    })
  }
}
