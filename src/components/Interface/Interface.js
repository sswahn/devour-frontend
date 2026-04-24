import { Suspense, lazy } from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import MobileNav from '../MobileNav/MobileNav'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
const Overlays = lazy(() => import('../Overlays/Overlays'))


// consider deleting Interface and 
// moving its content to <App />

function Interface() {
  return (
    <>
      <Header />
      <Main />
      <MobileNav />
      <Suspense fallback={<LoadingSpinner />}>
        <Overlays />
      </Suspense>
    </>
  )
}

export default Interface
