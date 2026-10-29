import { fetchFile } from '@ffmpeg/ffmpeg';

// Helper: Convert seconds to ASS timestamp format (H:MM:SS.cc)
const formatAssTime = (seconds) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const cs = Math.floor((seconds % 1) * 100);
  return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${String(cs).padStart(2, '0')}`;
};

// Helper: Convert hex color to ASS format (&H[Alpha][Blue][Green][Red]&)
const toAssColor = (hex, alphaHex = '00') => {
  if (!hex) return `&H${alphaHex}FFFFFF&`;
  const clean = hex.replace('#', '').trim();
  let r = 'ff', g = 'ff', b = 'ff';
  if (clean.length === 3) {
    r = clean[0] + clean[0];
    g = clean[1] + clean[1];
    b = clean[2] + clean[2];
  } else if (clean.length >= 6) {
    r = clean.substring(0, 2);
    g = clean.substring(2, 4);
    b = clean.substring(4, 6);
  }
  return `&H${alphaHex}${b}${g}${r}&`;
};

// Generate the complete ASS subtitle content string
const generateAssContent = (validCaptions) => {
  let ass = `[Script Info]\n`;
  ass += `Title: Generated Captions\n`;
  ass += `ScriptType: v4.00+\n`;
  ass += `PlayResX: 1920\n`;
  ass += `PlayResY: 1080\n`;
  ass += `WrapStyle: 0\n\n`;

  ass += `[V4+ Styles]\n`;
  ass += `Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding\n`;
  ass += `Style: Default,Arial,36,&H00FFFFFF,&H000000FF,&H00000000,&H80000000,0,0,0,0,100,100,0,0,1,2,0,2,20,20,50,1\n\n`;

  ass += `[Events]\n`;
  ass += `Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\n`;

  for (const caption of validCaptions) {
    const style = caption.style || {};
    const startTime = formatAssTime(caption.start);
    const endTime = formatAssTime(caption.end);

    const fontSize = Number(style.fontSize) || 36;
    const color = toAssColor(style.color || '#ffffff');
    const strokeColor = toAssColor(style.strokeColor || '#000000');
    const strokeWidth = Number(style.strokeWidth) !== undefined ? Number(style.strokeWidth) : 2;
    const bold = style.bold ? 1 : 0;
    const italic = style.italic ? 1 : 0;
    const underline = style.underline ? 1 : 0;

    // ASS numpad alignment: 1 = bottom-left, 2 = bottom-center, 3 = bottom-right
    let alignment = 2;
    if (style.textAlign === 'left') alignment = 1;
    else if (style.textAlign === 'right') alignment = 3;

    // Build inline style override tags
    let tags = `{\\fs${fontSize}\\c${color}\\3c${strokeColor}\\bord${strokeWidth}\\b${bold}\\i${italic}\\u${underline}\\an${alignment}}`;

    // Handle newlines safely in ASS
    const text = (caption.text || '').replace(/\r?\n/g, '\\N');

    ass += `Dialogue: 0,${startTime},${endTime},Default,,0,0,0,,${tags}${text}\n`;
  }

  return ass;
};

export const burnCaptionsToVideo = async (ffmpeg, videoBlob, captions = []) => {
  if (!videoBlob || !captions.length) {
    throw new Error('Video blob and captions array are required.');
  }

  const timestamp = Date.now();
  const inputFileName = `input_${timestamp}.mp4`;
  const subFileName = `subtitles_${timestamp}.ass`;
  const outputFileName = `output_${timestamp}.mp4`;
  const createdFiles = [inputFileName, subFileName, outputFileName];

  try {
    // 1. Write input video to virtual file system
    await ffmpeg.writeFile(inputFileName, await fetchFile(videoBlob));

    // 2. Validate captions
    const validCaptions = captions.filter(caption =>
      typeof caption.text === 'string' &&
      caption.text.trim() &&
      Number.isFinite(caption.start) &&
      Number.isFinite(caption.end) &&
      caption.start >= 0 &&
      caption.end > caption.start
    );

    if (validCaptions.length === 0) {
      throw new Error('No valid captions found to process.');
    }

    // 3. Generate and write the ASS subtitle file
    const assContent = generateAssContent(validCaptions);
    await ffmpeg.writeFile(subFileName, new TextEncoder().encode(assContent));

    // 4. Run FFmpeg command using a single robust subtitles filter
    await ffmpeg.exec([
      '-i', inputFileName,
      '-vf', `subtitles=${subFileName}`,
      '-c:a', 'copy',
      outputFileName
    ]);

    // 5. Read output file back as a Blob
    const data = await ffmpeg.readFile(outputFileName);
    return new Blob([data.buffer], { type: 'video/mp4' });

  } finally {
    // 6. Guaranteed cleanup of all virtual files to prevent WASM memory leaks
    for (const file of createdFiles) {
      try {
        await ffmpeg.deleteFile(file);
      } catch (e) {
        // Ignore files that weren't created or were already cleaned up
      }
    }
  }
};
