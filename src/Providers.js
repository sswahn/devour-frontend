import { SessionProvider } from './components/Providers/SessionProvider'
import { FullscreenProvider } from './components/Providers/FullscreenProvider'
import { OverlayProvider } from './components/Providers/OverlayProvider'
import { ProfileProvider } from './components/Providers/ProfileProvider'
import { DialogProvider } from './components/Providers/DialogProvider'
import { ContentProvider } from './components/Providers/ContentProvider'
import { FootageProvider } from './components/Providers/FootageProvider'
import { CaptionsProvider } from './components/Providers/CaptionsProvider'

function Providers({ children }) {
  return (
    <SessionProvider>
      <FullscreenProvider>
        <OverlayProvider>
          <ProfileProvider>
            <ContentProvider>
              <DialogProvider>
                <FootageProvider>
                  <CaptionsProvider>
                    {children}
                  </CaptionsProvider>
                </FootageProvider>
              </DialogProvider>
            </ContentProvider>
          </ProfileProvider>
        </OverlayProvider>
      </FullscreenProvider>
    </SessionProvider>
  )
}

export default Providers
