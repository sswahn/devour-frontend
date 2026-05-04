import { useState, useRef, useEffect, useCallback, createContext, useContext } from 'react'

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
      <Dialog dialogRef={dialogRef} close={closeDialog} content={content} />
    </DialogContext.Provider>
  )
}

export { DialogContext, DialogProvider }
