import { StrictMode } from 'react'
import ErrorBoundary from './ErrorBoundary'
import Providers from './Providers'
import AppRoot from './components/AppRoot/AppRoot'
import './index.css'

function App() {
  return (
    <StrictMode> 
      <ErrorBoundary> 
        <Providers>
          <AppRoot />
        </Providers>
      </ErrorBoundary> 
    </StrictMode>
  )
}

export default App
