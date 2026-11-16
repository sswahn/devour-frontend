import { StrictMode, Fragment } from 'react'
import ErrorBoundary from './ErrorBoundary'
import Providers from './Providers'
import Interface from './components/Interface/Interface'
import './index.css'

// Toggle this true/false to turn Strict Mode on or off globally
const USE_STRICT_MODE = false

const ModeWrapper = USE_STRICT_MODE ? StrictMode : Fragment

function App() {
  return (
    <ModeWrapper> 
      <ErrorBoundary> 
        <Providers>
          <Interface />
        </Providers>
      </ErrorBoundary> 
    </ModeWrapper>
  )
}

export default App
