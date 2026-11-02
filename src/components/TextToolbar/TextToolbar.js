
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
