import { useState, useRef, useCallback, createContext, useContext } from 'react'

const DialogContext = createContext(null)

function DialogProvider({ children }) {
  const [content, setContent] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const dialogRef = useRef(null)

  const openDialog = useCallback(component => {
    setContent(component)
    setIsOpen(true)
    dialogRef.current.showModal() 
  }, [])
  
  const closeDialog = useCallback(() => {
    setContent(null)
    setIsOpen(false)
    dialogRef.current.close()
  }, [])

  return (
    <DialogContext.Provider value={{ openDialog, closeDialog }}>
      {children}
      <Dialog dialogRef={dialogRef} close={closeDialog} isOpen={isOpen} content={content} />
    </DialogContext.Provider>
  )
}

export { DialogContext, DialogProvider }
