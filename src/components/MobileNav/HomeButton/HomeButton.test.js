import { render, screen, fireEvent } from '@testing-library/react'
import HomeButton from './HomeButton'

// mock the icon so the test focuses only on HomeButton
jest.mock('../../Icons/HomeIcon/HomeIcon', () => () => <svg data-testid="home-icon" />)

describe('HomeButton', () => {

  beforeEach(() => {
    // mock browser APIs
    global.navigator.vibrate = jest.fn()
    window.scrollTo = jest.fn()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('renders the button', () => {
    render(<HomeButton />)

    const button = screen.getByRole('button', { name: /scroll to top/i })

    expect(button).toBeInTheDocument()
  })

  test('renders the HomeIcon', () => {
    render(<HomeButton />)

    expect(screen.getByTestId('home-icon')).toBeInTheDocument()
  })

  test('vibrates and scrolls to top when clicked', () => {
    render(<HomeButton />)

    const button = screen.getByRole('button', { name: /scroll to top/i })

    fireEvent.click(button)

    expect(navigator.vibrate).toHaveBeenCalledWith(50)

    expect(window.scrollTo).toHaveBeenCalledWith({
      behavior: 'smooth',
      top: 0
    })
  })

})
