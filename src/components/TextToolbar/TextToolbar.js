import { useState, useEffect } from  'react'
import BoldButton from './BoldButton/BoldButton'
import ItalicButton from './ItalicButton/ItalicButton'
import UnderlineButton from './UnderlineButton/UnderlineButton'
import FontColorButton from './FontColorButton/FontColorButton'
import ColorPalette from './ColorPalette/ColorPalette'
import FontSizeButton from './FontSizeButton/FontSizeButton'
import FontSizeSlider from './FontSizeSlider/FontSizeSlider'
import BackgroundColorButton from './BackgroundColorButton/BackgroundColorButton'
import TextAlignButton from './TextAlignButton/TextAlignButton'
import AlignText from './AlignText/AlignText'
import styles from './TextToolbar.module.css'

function TextToolbar({ style, setStyle }) {
  const [activeDropdown, setActiveDropdown] = useState(null)

  const openDropdown = id => {
    const value = activeDropdown === id ? null : id
    setActiveDropdown(value)
  }

  const offClickClose = event => {
    // if target is not included in drodown then close
  }

  useEffect(() => {
    document.addEventListener('click', offClickClose)
    return () => {
      document.removeEventListener('click', offClickClose)
    }
  }, [])

  // still need line spacing; consider: stroke, strikethrough, , bulleted list, numbered list, font family
  
  return (
    <div className={styles.textToolbar}>
      <BoldButton setStyle={setStyle} />
      <ItalicButton setStyle={setStyle} />
      <UnderlineButton setStyle={setStyle} />
      <FontColorButton openDropdown={openDropdown} />
      <BackgroundColorButton openDropdown={openDropdown} />
      <FontSizeButton openDropdown={openDropdown} />
      <TextAlignButton openDropdown={openDropdown} />
      {activeDropdown.toLowerCase().includes('color') && 
        <ColorPalette color={textStyles[activeDropdown]} setColor={val => setStyle(prev => ({ ...prev, [activeDropdown]: val }))} />
      }
      {activeDropdown === 'fontSize' && 
        <FontSizeSlider fontSize={textStyles.fontSize} setFontSize={val => setStyle('fontSize', val)} />
      }
      {activeDropdown === 'textAlign' && 
        <AlignText textAlign={textStyles.textAlign} setTextAlign={val => setStyle('textAlign', val)} />
      }
    </div>
  )
}

export default TextToolbar
