import { render, screen, fireEvent } from '@testing-library/react'
import CloseButton from './CloseButton'

// Mock CSS module
jest.mock('./CloseButton.module.css', () => ({
  closeButton: 'closeButton'
}))

// Mock icon component
jest.mock('../Icons/XmarkIcon/XmarkIcon', () => {
  return function MockXmarkIcon() {
    return <svg data-testid="xmark-icon" />
  }
})

describe('CloseButton', () => {
  beforeEach(() => {
    navigator.vibrate = jest.fn()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('renders button with correct aria-label', () => {
    render(<CloseButton overlay="comments" close={jest.fn()} />)

    expect(
      screen.getByRole('button', { name: 'close comments' })
    ).toBeInTheDocument()
  })

  test('renders xmark icon', () => {
    render(<CloseButton overlay="comments" close={jest.fn()} />)

    expect(screen.getByTestId('xmark-icon')).toBeInTheDocument()
  })

  test('vibrates and calls close when clicked', () => {
    const close = jest.fn()

    render(<CloseButton overlay="comments" close={close} />)

    fireEvent.click(
      screen.getByRole('button', { name: 'close comments' })
    )

    expect(navigator.vibrate).toHaveBeenCalledWith(50)
    expect(close).toHaveBeenCalledTimes(1)
  })

  test('button has type button', () => {
    render(<CloseButton overlay="comments" close={jest.fn()} />)

    expect(
      screen.getByRole('button', { name: 'close comments' })
    ).toHaveAttribute('type', 'button')
  })
})
