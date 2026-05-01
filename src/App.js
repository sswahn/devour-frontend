import { StrictMode } from 'react'
import useSelectionToSpeech from './hooks/useSelectionToSpeech'
import ErrorBoundary from './ErrorBoundary'
import Providers from './Providers'
import Interface from './components/Interface/Interface'
import './index.css'

function App() {
  useSelectionToSpeech()
  return (
    <StrictMode> 
      <ErrorBoundary> 
        <Providers>
          <Interface />
        </Providers>
      </ErrorBoundary> 
    </StrictMode>
  )
}

export default App
