import { useState } from 'react'

function useTextStyles() {
  const [styles, setStyles] = useState({
    fontSize: 12,
    color: '#ffffff',
    bold: false,
    italic: false,
    underline: false,
    stroke: 'none',
    strokeColor: '#000000',
    strokeWidth: 2,
    backgroundColor: 'transparent',
    textAlign: 'left'
  })

  return [ styles, setStyles ]
}

export default useTextStyles
