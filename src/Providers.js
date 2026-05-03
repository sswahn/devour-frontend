import { SessionProvider } from './components/Providers/SessionProvider'
import { FocusTrapProvider } from './components/Providers/FocusTrapProvider'
import { OverlayProvider } from './components/Providers/OverlayProvider'
import { ProfileProvider } from './components/Providers/ProfileProvider'
import { CommentsProvider } from './components/Providers/CommentsProvider'

function Providers({ children }) {
  return (
    <SessionProvider>
      <FocusTrapProvider>
        <OverlayProvider>
          <ProfileProvider>
            <CommentsProvider>
              {children}
            </CommentsProvider>
          </ProfileProvider>
        </OverlayProvider>
      </FocusTrapProvider>
    </SessionProvider>
  )
}

export default Providers
