import { useState, useEffect } from  'react'
import BoldButton from './BoldButton/BoldButton'
import ItalicButton from './ItalicButton/ItalicButton'
import UnderlineButton from './UnderlineButton/UnderlineButton'
import FontSizeButton from './FontSizeButton/FontSizeButton'
import FontSizeSlider from './FontSizeSlider/FontSizeSlider'
import styles from 'TextToolbar.module.css'

function TextToolbar({ setStyle }) {
  const [fontSize, setFontSize] = useState(12)
  const [color, setColor] = useState('#ffffff')
  const [bold, setBold] = useState(false)
  const [italic, setItalic] = useState(false)
  const [underline, setUnderline] = useState(false)
  const [stroke, setStroke] = useState('none')
  const [strokeColor, setStrokeColor] = useState('#000000')
  const [strokeWidth, setStrokeWidth] = useState(2)
  const [backgroundColor, setBackgroundColor] = useState('transparent')
  const [textAlign, setTextAlign] = useState('left')
  const [fontSizeSlider, setFontSizeSlider] = useState(false)

  const openFontSizeSlider = () => {
    setFontSizeSlider(prev => !prev)
  }

  useEffect(() => {
    setStyle({ 
      fontSize,
      color,
      bold,
      italic,
      underline,
      strokeColor,
      strokeWidth,
      backgroundColor,
      textAlign
    })
  }, [
    fontSize,
    color,
    bold,
    italic,
    underline,
    strokeColor,
    strokeWidth,
    backgroundColor,
    textAlign
  ])
  
  return (
    <div className={styles.textToolbar}>
      <BoldButton setBold={setBold} />
      <ItalicButton setItalic={setItalic} />
      <UnderlineButton setUnderline={setUnderline} />
      <FontSizeButton openFontSizeSlider={openFontSizeSlider} />
      {fontSizeSlider && <FontSizeSlider fontSize={fontSize} setFontSize={setFontSize} />}
    </div>
  )
}

export default TextToolbar
