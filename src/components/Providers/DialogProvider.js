import { useState, useRef, useEffect, createContext, useContext } from 'react'

const DialogContext = createContext(null)

function DialogProvider({ children }) {
  const [content, setContent] = useState(null)
  const dialogRef = useRef(null)

  // Sync the native <dialog> state with React state
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (content) {
      // .showModal() is critical for focus trapping and backdrop
      if (!dialog.open) {
        dialog.showModal() 
      }
      
    } else {
      dialog.close()
    }
  }, [content])

  const openDialog = (component) => setContent(component)
  const closeDialog = () => setContent(null)

  return (
    <DialogContext.Provider value={{ openDialog, closeDialog }}>
      {children}
      
      <dialog ref={dialogRef}  onClose={closeDialog}>
        {content}
      </dialog>
    </DialogContext.Provider>
  )
}

export const useDialog = () => useContext(DialogContext)
