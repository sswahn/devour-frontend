import { SessionProvider } from './components/Providers/SessionProvider'
import { FocusTrapProvider } from './components/Providers/FocusTrapProvider'
import { OverlayProvider } from './components/Providers/OverlayProvider'
import { ProfileProvider } from './components/Providers/ProfileProvider'

function Providers({ children }) {
  return (
    <SessionProvider>
      <FocusTrapProvider>
        <OverlayProvider>
          <ProfileProvider>
            {children}
          </ProfileProvider>
        </OverlayProvider>
      </FocusTrapProvider>
    </SessionProvider>
  )
}

export default Providers
