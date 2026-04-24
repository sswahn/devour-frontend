import { SessionProvider } from './components/Providers/SessionProvider'
import { FocusTrapProvider } from './components/Providers/FocusTrapProvider'
import { FocusStackProvider } from './components/Providers/FocusStackProvider'
import { OverlayProvider } from './components/Providers/OverlayProvider'

function Providers({ children }) {
  return (
    <SessionProvider>
      <FocusTrapProvider>
        <FocusStackProvider>
          <OverlayProvider>
            {children}
          </OverlayProvider>
        </FocusStackProvider>
      </FocusTrapProvider>
    </SessionProvider>
  )
}

export default Providers
