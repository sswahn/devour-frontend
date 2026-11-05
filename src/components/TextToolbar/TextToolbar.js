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

function TextToolbar({ textStyles, setTextStyles }) {
  const [activeDropdown, setActiveDropdown] = useState('')

  const openDropdown = id => {
    setActiveDropdown(id)
  }

  const toggleStyle = key => {
    setTextStyles(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const updateStyle = (key, value) => {
    setTextStyles(prev => ({ ...prev, [key]: value }))
  }

  const offClickClose = event => {
    // if target is not included in drodown then close
  }

  useEffect(() => {
    console.log('textAlign: ', textStyles.textAlign)
  }, [textStyles.textAlign])

  useEffect(() => {
    document.addEventListener('click', offClickClose)
    return () => {
      document.removeEventListener('click', offClickClose)
    }
  }, [])


  // still need line spacing; consider: stroke, strikethrough, , bulleted list, numbered list, font family
  
  return (
    <div className={styles.textToolbar}>
      <BoldButton setStyle={toggleStyle} />
      <ItalicButton setStyle={toggleStyle} />
      <UnderlineButton setStyle={toggleStyle} />
      <FontColorButton openDropdown={openDropdown} />
      {activeDropdown === 'color' && <ColorPalette color={textStyles.color} setColor={val => updateStyle('color', val)} />}
      <FontSizeButton openDropdown={openDropdown} />
      {activeDropdown === 'fontSize' && <FontSizeSlider fontSize={textStyles.fontSize} setFontSize={val => updateStyle('fontSize', val)} />}
      <BackgroundColorButton openDropdown={openDropdown} />
      {activeDropdown === 'backgroundColor' && <ColorPalette color={textStyles.backgroundColor} setColor={val => updateStyle('backgroundColor', val)} />}
      <TextAlignButton openDropdown={openDropdown} />
      {activeDropdown === 'textAlign' && <AlignText textAlign={textStyles.textAlign} setTextAlign={val => updateStyle('textAlign', val)} />}
    </div>
  )
}

export default TextToolbar
