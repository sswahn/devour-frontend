import { ScrollProvider } from './components/Providers/ScrollProvider'
import { SessionProvider } from './components/Providers/SessionProvider'
import { FullscreenProvider } from './components/Providers/FullscreenProvider'
import { OverlayProvider } from './components/Providers/OverlayProvider'
import { ProfileProvider } from './components/Providers/ProfileProvider'
import { DialogProvider } from './components/Providers/DialogProvider'
import { ContentProvider } from './components/Providers/ContentProvider'

function Providers({ children }) {
  return (
    <ScrollProvider>
      <SessionProvider>
        <FullscreenProvider>
          <OverlayProvider>
            <ProfileProvider>
              <DialogProvider>
                <ContentProvider>
                  {children}
                </ContentProvider>
              </DialogProvider>
            </ProfileProvider>
          </OverlayProvider>
        </FullscreenProvider>
      </SessionProvider>
    </ScrollProvider>
  )
}

export default Providers
