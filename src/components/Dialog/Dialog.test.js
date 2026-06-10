import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import Dialog from './Dialog'
import { overlay } from '../../config'

// Mock CSS module
jest.mock('./Dialog.module.css', () => ({
  dialog: 'dialog'
}))

// Mock CloseButton
jest.mock('../CloseButton/CloseButton', () => {
  return function MockCloseButton(props) {
    return (
      <button
        data-testid="close-button"
        data-overlay={props.overlay}
        onClick={props.close}
      >
        Close
      </button>
    )
  }
})

describe('Dialog', () => {
  test('renders content', () => {
    render(
      <Dialog
        dialogRef={React.createRef()}
        content={<div>Hello World</div>}
        close={jest.fn()}
      />
    )

    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  test('renders CloseButton with correct overlay prop', () => {
    render(
      <Dialog
        dialogRef={React.createRef()}
        content={<div>Content</div>}
        close={jest.fn()}
      />
    )

    expect(screen.getByTestId('close-button')).toHaveAttribute(
      'data-overlay',
      overlay.dialog
    )
  })

  test('calls close when backdrop is clicked', () => {
    const close = jest.fn()

    render(
      <Dialog
        dialogRef={React.createRef()}
        content={<div>Content</div>}
        close={close}
      />
    )

    const dialog = document.getElementById('dialog')

    fireEvent.click(dialog, {
      target: dialog,
      currentTarget: dialog
    })

    expect(close).toHaveBeenCalledTimes(1)
  })

  test('does not call close when dialog content is clicked', () => {
    const close = jest.fn()

    render(
      <Dialog
        dialogRef={React.createRef()}
        content={<div data-testid="content">Content</div>}
        close={close}
      />
    )

    fireEvent.click(screen.getByTestId('content'))

    expect(close).not.toHaveBeenCalled()
  })

  test('assigns dialog ref', () => {
    const dialogRef = React.createRef()

    render(
      <Dialog
        dialogRef={dialogRef}
        content={<div>Content</div>}
        close={jest.fn()}
      />
    )

    expect(dialogRef.current).toBeInstanceOf(HTMLDialogElement)
  })
})
