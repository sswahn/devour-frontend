import { Component } from 'react'
import logError from './utilities/logError'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    logError(error, {
      source: 'react.errorBoundary',
      componentStack: info.componentStack
    })
    this.setState({ hasError: true, error: error })
  }

  render() {
    if (this.state.hasError) {
      // render custom fallback UI
      return (
        <div style={{
          background: 'black',
          color: 'white',
          height: '100%',
          padding: '200px 0 0 200px',
          width: '100%',
        }}>
          <h1>Oops! Something went wrong.</h1>
          <p>We’re sorry for the inconvenience. Our team has been notified.</p>
          <button onClick={() => window.location.reload()} type="button" style={{ width: '100px', height: '44px' }}>
            Try Again
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
