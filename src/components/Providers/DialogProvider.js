import { useState, useRef, useEffect, useCallback, createContext, useContext } from 'react'

const DialogContext = createContext(null)

function DialogProvider({ children }) {
  const [content, setContent] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const dialogRef = useRef(null)

  const openDialog = useCallback(component => {
    setContent(component)
    setIsOpen(true)
  }, [])
  
  const closeDialog = useCallback(() => {
    setIsOpen(false)
  }, [])

  useEffect(() => {
    if (!dialogRef.current) {
      return
    }
    if (!isOpen) {
      dialogRef.current.showModal()
    } else {
      dialogRef.current.close()
      setContent(null)
    }
  }, [isOpen])

  return (
    <DialogContext.Provider value={{ openDialog, closeDialog }}>
      {children}
      <Dialog dialogRef={dialogRef} close={closeDialog} isOpen={isOpen} content={content} />
    </DialogContext.Provider>
  )
}

export { DialogContext, DialogProvider }
