import { render, screen, fireEvent } from '@testing-library/react'
import BackButton from './BackButton'

// Mock CSS module
jest.mock('./BackButton.module.css', () => ({
  backButton: 'backButton'
}))

// Mock icon component
jest.mock('../Icons/ArrowLeftIcon/ArrowLeftIcon', () => {
  return function MockArrowLeftIcon() {
    return <svg data-testid="arrow-left-icon" />
  }
})

describe('BackButton', () => {
  beforeEach(() => {
    navigator.vibrate = jest.fn()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('renders button with correct aria-label', () => {
    render(<BackButton overlay="comments" close={jest.fn()} />)

    expect(
      screen.getByRole('button', { name: 'close comments' })
    ).toBeInTheDocument()
  })

  test('renders arrow icon', () => {
    render(<BackButton overlay="comments" close={jest.fn()} />)

    expect(screen.getByTestId('arrow-left-icon')).toBeInTheDocument()
  })

  test('vibrates and calls close when clicked', () => {
    const close = jest.fn()

    render(<BackButton overlay="comments" close={close} />)

    fireEvent.click(
      screen.getByRole('button', { name: 'close comments' })
    )

    expect(navigator.vibrate).toHaveBeenCalledWith(50)
    expect(close).toHaveBeenCalledTimes(1)
  })

  test('button has type button', () => {
    render(<BackButton overlay="comments" close={jest.fn()} />)

    expect(
      screen.getByRole('button', { name: 'close comments' })
    ).toHaveAttribute('type', 'button')
  })
})
