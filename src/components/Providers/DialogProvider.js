import { useState, useRef, useEffect, useCallback, createContext } from 'react'
import Dialog from '../Dialog/Dialog'

const DialogContext = createContext(null)

function DialogProvider({ children }) {
  const [content, setContent] = useState(null)
  const dialogRef = useRef(null)

  const openDialog = useCallback(component => {
    setContent(component)
  }, [])
  
  const closeDialog = useCallback(() => {
    setContent(null)
  }, [])

  const action = () => {
    const dialog = dialogRef.current
    if (dialog) {
      content !== null 
        ? dialog.showModal() 
        : dialog.close()
    }
  }

  useEffect(() => {
    action()
  }, [content])

  return (
    <DialogContext.Provider value={{ openDialog, closeDialog }}>
      {children}
      <Dialog dialogRef={dialogRef} content={content} />
    </DialogContext.Provider>
  )
}

export { DialogContext, DialogProvider }
