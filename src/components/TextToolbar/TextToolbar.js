import { useState, useEffect } from  'react'
import BoldButton from './BoldButton/BoldButton'
import ItalicButton from './ItalicButton/ItalicButton'
import UnderlineButton from './UnderlineButton/UnderlineButton'
import FontColorButton from './FontColorButton/FontColorButton'
import PositionButton from './PositionButton/PositionButton'
import FontSizeButton from './FontSizeButton/FontSizeButton'
import BackgroundColorButton from './BackgroundColorButton/BackgroundColorButton'
import TextAlignButton from './TextAlignButton/TextAlignButton'
import FontSizeSlider from './FontSizeSlider/FontSizeSlider'
import AlignText from './AlignText/AlignText'
import ColorPicker from '../ColorPicker/ColorPicker'
import styles from './TextToolbar.module.css'

function TextToolbar({ style, setStyle }) {
  const [activeDropdown, setActiveDropdown] = useState(null)

  const openDropdown = id => {
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
      <BoldButton fontWeight={style.fontWeight} setFontWeight={setStyle} />
      <ItalicButton fontStyle={style.fontStyle} setFontStyle={setStyle} />
      <UnderlineButton textDecoration={style.textDecoration} setTextDecoration={setStyle} />
      <FontColorButton openDropdown={openDropdown} />
      <BackgroundColorButton openDropdown={openDropdown} />
      <FontSizeButton openDropdown={openDropdown} />
      <TextAlignButton openDropdown={openDropdown} />
      {activeDropdown === 'fontSize' && <FontSizeSlider fontSize={style.fontSize} setFontSize={setStyle} />}
      {activeDropdown === 'textAlign' && <AlignText textAlign={style.textAlign} setTextAlign={setStyle} />}
      {activeDropdown === 'color' && <ColorPicker color={style.color} onChange={val => setStyle(prev => ({ ...prev, color: val }))} />}
      {activeDropdown === 'backgroundColor' && <ColorPicker color={style.backgroundColor} onChange={val => setStyle(prev => ({ ...prev, backgroundColor: val }))} />}
    </div>
  )
}

export default TextToolbar
