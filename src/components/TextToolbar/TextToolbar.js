import { useState } from  'react'
import BoldButton from './BoldButton/BoldButton'
import ItalicButton from './ItalicButton/ItalicButton'
import UnderlineButton from './UnderlineButton/UnderlineButton'
import FontSizeButton from './FontSizeButton/FontSizeButton'
import FontSizeSlider from './FontSizeSlider/FontSizeSlider'
import styles from './TextToolbar.module.css'

function TextToolbar({ textStyles, setTextStyles }) {
  const [fontSizeSlider, setFontSizeSlider] = useState(false)

  const openFontSizeSlider = () => {
    setFontSizeSlider(prev => !prev)
  }

  const toggleStyle = key => {
    setTextStyles(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const updateStyle = (key, value) => {
    setTextStyles(prev => ({ ...prev, [key]: value }))
  }
  
  return (
    <div className={styles.textToolbar}>
      <BoldButton setBold={() => toggleStyle('bold')} />
      <ItalicButton setItalic={() => toggleStyle('italic')} />
      <UnderlineButton setUnderline={() => toggleStyle('underline')} />
      <FontSizeButton openFontSizeSlider={openFontSizeSlider} />
      {fontSizeSlider && <FontSizeSlider fontSize={textStyles.fontSize} setFontSize={val => updateStyle('fontSize', val)} />}
    </div>
  )
}

export default TextToolbar
