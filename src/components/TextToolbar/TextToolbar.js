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
    console.log('opening TextToolbar dropdown.')
    setActiveDropdown(prev => prev === id ? null : id)
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
      {activeDropdown === 'fontSize' && <FontSizeSlider fontSize={style.fontSize} setStyle={setStyle} />}
      {activeDropdown === 'textAlign' && <AlignText textAlign={style.textAlign} setStyle={setStyle} />}
      {activeDropdown?.toLowerCase().includes('color') && 
        <ColorPalette color={style[activeDropdown]} setColor={val => setStyle(prev => ({ ...prev, [activeDropdown]: val }))} />
      }
    </div>
  )
}

export default TextToolbar
