import { fireEvent, render, screen } from '@testing-library/react'
import HomeButton from './HomeButton'

// Mock CSS module
jest.mock('./HomeButton.module.css', () => ({
  homeButton: 'homeButton'
}))

// Mock HomeIcon component
jest.mock('../../Icons/HomeIcon/HomeIcon', () => () => (
  <svg data-testid="home-icon" />
))

// Mock useScroll hook
jest.mock('../../../hooks/useScroll')

describe('HomeButton', () => {
  let scrollToMock
  
  beforeEach(() => {
    // Arrange: Spy on window.scrollTo
    scrollToMock = jest.fn()
    window.scrollTo = scrollToMock
    // Arrange: Mock navigator.vibrate
    navigator.vibrate = jest.fn()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the button with correct accessibility label', () => {
    render(<HomeButton />)

    const button = screen.getByRole('button', {
      name: /scroll to top/i
    })

    expect(button).toBeInTheDocument()
  })

  it('renders the HomeIcon component', () => {
    render(<HomeButton />)

    expect(screen.getByTestId('home-icon')).toBeInTheDocument()
  })

  it('vibrates and scrolls to top when clicked', () => {
    render(<HomeButton />)

    const button = screen.getByRole('button', {
      name: /scroll to top/i
    })

    fireEvent.click(button)

    expect(navigator.vibrate).toHaveBeenCalledWith(50)

    expect(scrollToMock).toHaveBeenCalledWith({
      behavior: 'smooth',
      top: 0
    })
  })

  it('does not throw if navigator.vibrate is unavailable', () => {
    navigator.vibrate = undefined

    render(<HomeButton />)

    const button = screen.getByRole('button', {
      name: /scroll to top/i
    })

    expect(() => {
      fireEvent.click(button)
    }).not.toThrow()

    expect(scrollToMock).toHaveBeenCalledWith({
      behavior: 'smooth',
      top: 0
    })
  })
})
