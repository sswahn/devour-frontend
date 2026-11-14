import { useState, useEffect, useRef } from 'react'
import { createElevatorController, generateSongFromSeed, renderSongToWav } from './elevatorSynth'

function AddMusic() {
  const [seed, setSeed] = useState(101)
  const [song, setSong] = useState(() => generateSongFromSeed(101))
  const [isPlaying, setIsPlaying] = useState(false)
  const [isExporting, setIsExporting] = useState(false)

  const controllerRef = useRef(null)

  useEffect(() => {
    controllerRef.current = createElevatorController()
    return () => controllerRef.current?.destroy()
  }, [])

  const changeSeed = (newSeed) => {
    const validSeed = Math.max(1, newSeed)
    const updatedSong = generateSongFromSeed(validSeed)
    setSeed(validSeed)
    setSong(updatedSong)
    controllerRef.current?.setSong(updatedSong)
  }

  const handleTogglePlay = () => {
    if (!controllerRef.current) return
    if (isPlaying) {
      controllerRef.current.stop()
      setIsPlaying(false)
    } else {
      controllerRef.current.setSong(song)
      controllerRef.current.start()
      setIsPlaying(true)
    }
  }

  const handleDownloadWav = async () => {
    setIsExporting(true)
    try {
      const wavBlob = await renderSongToWav(song)
      const url = URL.createObjectURL(wavBlob)

      const link = document.createElement('a')
      link.href = url
      link.download = `elevator-${song.keyName.replace(/\s+/g, '-')}-seed-${song.seed}.wav`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <div style={{ padding: '24px', border: '1px solid #ddd', borderRadius: '12px', maxWidth: '420px', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
        <h3 style={{ margin: 0 }}>{song.title}</h3>
        <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#2c5e4f' }}>{song.keyName}</span>
      </div>

      <p style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#444' }}>
        {song.styleName} • {song.bassStyle}
      </p>
      <p style={{ margin: '0 0 20px 0', fontSize: '13px', color: '#777' }}>
        {song.bpm} BPM • Lead: {song.leadWave} • Warmth: {song.filterCutoff}Hz
      </p>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
        <button
          onClick={() => changeSeed(seed - 1)}
          disabled={seed <= 1}
          style={{ padding: '10px 14px', cursor: seed <= 1 ? 'not-allowed' : 'pointer' }}
        >
          ⏮ Prev
        </button>

        <button
          onClick={handleTogglePlay}
          style={{ flex: 1, padding: '10px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          {isPlaying ? '⏹ Stop' : '▶ Play'}
        </button>

        <button
          onClick={() => changeSeed(seed + 1)}
          style={{ padding: '10px 14px', cursor: 'pointer' }}
        >
          Next ⏭
        </button>
      </div>

      <button onClick={handleDownloadWav} disabled={isExporting} style={{ width: '100%', padding: '10px', cursor: 'pointer' }}>
        {isExporting ? 'Rendering Loop...' : '⬇ Download 4-Bar Loop (.WAV)'}
      </button>
    </div>
  )
}

export default AddMusic
