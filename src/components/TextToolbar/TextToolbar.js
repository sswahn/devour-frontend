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
  const [fontSizeSlider, setFontSizeSlider] = useState(false)
  const [fontColorPalette, setFontColorPalette] = useState(false)
  const [backgroundColorPalette, setBackgroundColorPalette] = useState(false)
  const [textAlign, setTextAlign] = useState(false)

  const openDropdown = id => {
    switch (id) {
      case 'fontSize':
        return setFontSizeSlider(prev => !prev)
      case 'color':
        return setFontColorPalette(prev => !prev)
      case 'backgroundColor':
        return setBackgroundColorPalette(prev => !prev)
      case 'textAlign':
        return setTextAlign(prev => !prev)
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
      {fontColorPalette && <ColorPalette color={textStyles.color} setColor={val => updateStyle('color', val)} />}
      <FontSizeButton openDropdown={openDropdown} />
      {fontSizeSlider && <FontSizeSlider fontSize={textStyles.fontSize} setFontSize={val => updateStyle('fontSize', val)} />}
      <BackgroundColorButton openDropdown={openDropdown} />
      {backgroundColorPalette && <ColorPalette color={textStyles.backgroundColor} setColor={val => updateStyle('backgroundColor', val)} />}
      <TextAlignButton openDropdown={openDropdown} />
      {textAlignment && <AlignText textAlign={textStyles.textAlign} setTextAlign={val => updateStyle('textAlign', val)} />}
    </div>
  )
}

export default TextToolbar
