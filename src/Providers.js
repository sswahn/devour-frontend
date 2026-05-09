import { ScrollProvider } from './components/Providers/ScrollProvider'
import { SessionProvider } from './components/Providers/SessionProvider'
import { OverlayProvider } from './components/Providers/OverlayProvider'
import { ProfileProvider } from './components/Providers/ProfileProvider'
import { DialogProvider } from './components/Providers/DialogProvider'
import { ContentProvider } from './components/Providers/ContentProvider'

function Providers({ children }) {
  return (
    <ScrollProvider>
      <SessionProvider>
        <OverlayProvider>
          <ProfileProvider>
            <DialogProvider>
              <ContentProvider>
                {children}
              </ContentProvider>
            </DialogProvider>
          </ProfileProvider>
        </OverlayProvider>
      </SessionProvider>
    </ScrollProvider>
  )
}

export default Providers
