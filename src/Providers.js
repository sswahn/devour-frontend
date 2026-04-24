import { SessionProvider } from './components/Providers/SessionProvider'
import { FocusTrapProvider } from './components/Providers/FocusTrapProvider'
import { FocusStackProvider } from './components/Providers/FocusStackProvider'
import { OverlayProvider } from './components/Providers/OverlayProvider'
import { ProfileProvider } from './components/Providers/ProfileProvider'


function Providers({ children }) {
  return (
    <SessionProvider>
      <FocusTrapProvider>
        <FocusStackProvider>
          <OverlayProvider>
            <ProfileProvider>
              {children}
            </ProfileProvider>
          </OverlayProvider>
        </FocusStackProvider>
      </FocusTrapProvider>
    </SessionProvider>
  )
}

export default Providers
