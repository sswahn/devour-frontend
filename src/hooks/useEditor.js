import { useContext } from 'react'
import { EditorContext } from '../components/Providers/EditorProvider'

function useEditor() {
  const { data, setData } = useContext(EditorContext)

  return { data, setData }
}

export default useEditor
