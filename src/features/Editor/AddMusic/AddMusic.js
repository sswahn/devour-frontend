import { useState, useEffect, useRef } from 'react'
import { createElevatorController, generateSongFromSeed, renderSongToWav } from '../../../utilities/elevatorSynth'

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

  const handleNextSong = () => {
    const nextSeed = seed + 1
    const nextSong = generateSongFromSeed(nextSeed)
    setSeed(nextSeed)
    setSong(nextSong)
    controllerRef.current?.setSong(nextSong)
  }

  const handleDownloadWav = async () => {
    setIsExporting(true)
    try {
      const wavBlob = await renderSongToWav(song)
      const url = URL.createObjectURL(wavBlob)

      const link = document.createElement('a')
      link.href = url
      link.download = `elevator-loop-seed-${song.seed}.wav`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <div style={{ padding: '24px', border: '1px solid #ddd', borderRadius: '12px', maxWidth: '380px', fontFamily: 'sans-serif' }}>
      <h3 style={{ margin: '0 0 6px 0' }}>{song.title}</h3>
      <p style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#555' }}>
        {song.progressionName}
      </p>
      <p style={{ margin: '0 0 20px 0', fontSize: '13px', color: '#888' }}>
        Tempo: {song.bpm} BPM • Lead: {song.waveType}
      </p>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
        <button onClick={handleTogglePlay} style={{ flex: 1, padding: '10px', cursor: 'pointer' }}>
          {isPlaying ? '⏹ Stop' : '▶ Play'}
        </button>
        <button onClick={handleNextSong} style={{ flex: 1, padding: '10px', cursor: 'pointer' }}>
          ⏭ Next Song
        </button>
      </div>

      <button onClick={handleDownloadWav} disabled={isExporting} style={{ width: '100%', padding: '10px', cursor: 'pointer' }}>
        {isExporting ? 'Rendering Loop...' : '⬇ Download 4-Bar Loop (.WAV)'}
      </button>
    </div>
  )
}

export default AddMusic
