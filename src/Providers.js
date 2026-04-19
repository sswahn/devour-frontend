import SessionProvider from './components/Providers/SessionProvider'
import FocusTrapProvider from './components/Providers/FocusTrapProvider'
import FocusStackProvider from './components/Providers/FocusStackProvider'

function Providers({ children }) {
  return (
    <SessionProvider>
      <FocusTrapProvider>
        <FocusStackProvider>
          {children}
        </FocusStackProvider>
      </FocusTrapProvider>
    </SessionProvider>
  )
}

export default Providers
