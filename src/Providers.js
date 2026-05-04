import { SessionProvider } from './components/Providers/SessionProvider'
import { FocusTrapProvider } from './components/Providers/FocusTrapProvider'
import { OverlayProvider } from './components/Providers/OverlayProvider'
import { ProfileProvider } from './components/Providers/ProfileProvider'
import { DialogProvider } from './components/Providers/DialogProvider'
import { ContentProvider } from './components/Providers/ContentProvider'

function Providers({ children }) {
  return (
    <SessionProvider>
      <FocusTrapProvider>
        <OverlayProvider>
          <ProfileProvider>
            <DialogProvider>
              <ContentProvider>
                {children}
              </ContentProvider>
            </DialogProvider>
          </ProfileProvider>
        </OverlayProvider>
      </FocusTrapProvider>
    </SessionProvider>
  )
}

export default Providers
