import { useState } from  'react'
import BoldButton from './BoldButton/BoldButton'
import ItalicButton from './ItalicButton/ItalicButton'
import UnderlineButton from './UnderlineButton/UnderlineButton'
import FontColorButton from './FontColorButton/FontColorButton'
import ColorPalette from './ColorPalette/ColorPalette'
import FontSizeButton from './FontSizeButton/FontSizeButton'
import FontSizeSlider from './FontSizeSlider/FontSizeSlider'
import BackgroundColorButton from './BackgroundColorButton/BackgroundColorButton'
import TextAlignButton from './TextAlignButton/TextAlignButton'
import styles from './TextToolbar.module.css'

function TextToolbar({ textStyles, setTextStyles }) {
  const [fontSizeDropdown, setFontSizeDropdown] = useState(false)
  const [fontColorDropdown, setFontColorDropdown] = useState(false)
  const [backgroundColorDropdown, setBackgroundColorDropdown] = useState(false)
  const [textAlignDropdown, setTextAlignDropdown] = useState(false)

  const openDropdown = id => {
    switch (id) {
      case 'fontSize':
        return setFontSizeDropdown(prev => !prev)
      case 'color':
        return setFontColorDropdown(prev => !prev)
      case 'backgroundColor':
        return setBackgroundColorDropdown(prev => !prev)
      case 'textAlign':
        return setTextAlignDropdown(prev => !prev)
    }
  }

  const toggleStyle = key => {
    setTextStyles(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const updateStyle = (key, value) => {
    setTextStyles(prev => ({ ...prev, [key]: value }))
  }

  // still need textAlign, line spacing; consider: stroke, strikethrough, , bulleted list, numbered list, font family
  
  return (
    <div className={styles.textToolbar}>
      <BoldButton setStyle={toggleStyle} />
      <ItalicButton setStyle={toggleStyle} />
      <UnderlineButton setStyle={toggleStyle} />
      <FontColorButton openDropdown={openDropdown} />
      {fontColorDropdown && <ColorPalette color={textStyles.color} setColor={val => updateStyle('color', val)} />}
      <FontSizeButton openDropdown={openDropdown} />
      {fontSizeDropdown && <FontSizeSlider fontSize={textStyles.fontSize} setFontSize={val => updateStyle('fontSize', val)} />}
      <BackgroundColorButton openDropdown={openDropdown} />
      {backgroundColorDropdown && <ColorPalette color={textStyles.backgroundColor} setColor={val => updateStyle('backgroundColor', val)} />}
      <TextAlignButton openDropdown={openDropdown} />
      {textAlignDropdown && <AlignText textAlign={textStyles.textAlign} setTextAlign={val => updateStyle('textAlign', val)} />}
    </div>
  )
}

export default TextToolbar
