import BoldButton from './BoldButton/BoldButton'
import ItalicButton from './ItalicButton/ItalicButton'
import UnderlineButton from './UnderlineButton/UnderlineButton'
import FontSizeButton from './FontSizeButton/FontSizeButton'
import FontSizeSlider from './FontSizeSlider/FontSizeSlider'

function TextToolbar() {
  return (
    <div>
        <BoldButton setBold={setBold} />
        <ItalicButton setItalic={setItalic} />
        <UnderlineButton setUnderline={setUnderline} />
        <FontSizeButton openFontSizeSlider={openFontSizeSlider} />
        {fontSizeSlider && <FontSizeSlider fontSize={fontSize} setFontSize={setFontSize} />}
    </div>
  )
}

export default TextToolbar
