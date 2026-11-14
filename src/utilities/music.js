// elevatorSynth.js

// 1. Deterministic Pseudorandom Number Generator (Mulberry32)
function createRng(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// 2. Classic Jazz Chord Progressions (Frequencies in Hz)
const PROGRESSIONS = [
  {
    name: 'Classic Bossa (Fmaj7 - G7 - Em7 - A7)',
    chords: [
      [174.61, 220.00, 261.63, 329.63],
      [196.00, 246.94, 293.66, 349.23],
      [164.81, 196.00, 246.94, 293.66],
      [220.00, 277.18, 329.63, 392.00],
    ],
  },
  {
    name: 'Sunday Lobby (Dm9 - G13 - Cmaj9 - A7b9)',
    chords: [
      [146.83, 174.61, 220.00, 261.63, 329.63],
      [196.00, 246.94, 329.63, 349.23, 440.00],
      [130.81, 164.81, 196.00, 246.94, 293.66],
      [220.00, 277.18, 349.23, 392.00, 466.16],
    ],
  },
  {
    name: 'Skyline Lounge (Cmaj7 - A7 - Dm7 - G7)',
    chords: [
      [130.81, 164.81, 196.00, 246.94],
      [220.00, 277.18, 329.63, 392.00],
      [146.83, 174.61, 220.00, 261.63],
      [196.00, 246.94, 293.66, 349.23],
    ],
  },
  {
    name: 'Velvet Ascent (Am7 - D9 - Gmaj7 - Cmaj7)',
    chords: [
      [220.00, 261.63, 329.63, 392.00],
      [146.83, 185.00, 220.00, 261.63, 329.63],
      [196.00, 246.94, 293.66, 369.99],
      [130.81, 164.81, 196.00, 246.94],
    ],
  },
];

const MELODY_POOL = [523.25, 587.33, 659.25, 783.99, 880.00, 1046.50, 1174.66];

// 3. Build a Deterministic 32-Step (4-Measure) Song Pattern from a Seed
export function generateSongFromSeed(seed) {
  const rng = createRng(seed);
  const prog = PROGRESSIONS[Math.floor(rng() * PROGRESSIONS.length)];
  const bpm = Math.floor(92 + rng() * 26); // 92 to 118 BPM
  const waveType = rng() > 0.5 ? 'sine' : 'triangle';

  // Pre-generate a repeatable 32-step (4-bar) melody & rhythm pattern
  const melodySteps = Array.from({ length: 32 }, () => {
    if (rng() < 0.55) {
      return MELODY_POOL[Math.floor(rng() * MELODY_POOL.length)];
    }
    return null;
  });

  // Choose one of two classic Bossa Nova syncopation patterns
  const strumPattern = rng() > 0.5 ? [0, 3, 6] :;

  return {
    seed,
    title: `Track #${seed}`,
    progressionName: prog.name,
    chords: prog.chords,
    bpm,
    waveType,
    melodySteps,
    strumPattern,
  };
}

// 4. Shared Note Synthesis Helper (Works on both Live and Offline AudioContexts)
function scheduleNote(ctx, time, freq, duration, maxVolume, waveType) {
  const osc = ctx.createOscillator();
  const filter = ctx.createBiquadFilter();
  const gainNode = ctx.createGain();

  osc.type = waveType;
  osc.frequency.setValueAtTime(freq, time);

  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(880, time);

  gainNode.gain.setValueAtTime(0.0001, time);
  gainNode.gain.linearRampToValueAtTime(maxVolume, time + 0.035);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, time + duration);

  osc.connect(filter);
  filter.connect(gainNode);
  gainNode.connect(ctx.destination);

  osc.start(time);
  osc.stop(time + duration);
}

// 5. Schedule One Step of a Song on Any AudioContext
function playSongStep(ctx, time, stepIndex, song) {
  const eighthNoteSec = 60 / song.bpm / 2;
  const stepInMeasure = stepIndex % 8;
  const chordIndex = Math.floor(stepIndex / 8) % song.chords.length;
  const currentChord = song.chords[chordIndex];

  // Warm Electric Piano Chords
  if (song.strumPattern.includes(stepInMeasure)) {
    const dur = stepInMeasure === 0 ? eighthNoteSec * 2.4 : eighthNoteSec * 1.4;
    currentChord.forEach((freq) => {
      scheduleNote(ctx, time, freq, dur, 0.032, 'triangle');
    });
  }

  // Soft Root Bass on Beats 1 and 3
  if (stepInMeasure === 0 || stepInMeasure === 4) {
    const bassFreq = currentChord[0] / 2; // Drop 1 octave
    scheduleNote(ctx, time, bassFreq, eighthNoteSec * 2.5, 0.06, 'sine');
  }

  // Procedural Lead Melody
  const melodyFreq = song.melodySteps[stepIndex % 32];
  if (melodyFreq) {
    scheduleNote(ctx, time, melodyFreq, eighthNoteSec * 1.7, 0.042, song.waveType);
  }
}

// 6. Convert an AudioBuffer to a Downloadable WAV Blob
function audioBufferToWavBlob(buffer) {
  const numChannels = buffer.numberOfChannels;
  const sampleRate = buffer.sampleRate;
  const length = buffer.length * numChannels * 2;
  const arrayBuffer = new ArrayBuffer(44 + length);
  const view = new DataView(arrayBuffer);

  const writeString = (offset, str) => {
    for (let i = 0; i < str.length; i++) {
      view.setUint8(offset + i, str.charCodeAt(i));
    }
  };

  // Standard 44-byte WAV Header
  writeString(0, 'RIFF');
  view.setUint32(4, 36 + length, true);
  writeString(8, 'WAVE');
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true); // PCM format
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * numChannels * 2, true);
  view.setUint16(32, numChannels * 2, true);
  view.setUint16(34, 16, true); // 16-bit audio
  writeString(36, 'data');
  view.setUint32(40, length, true);

  // Interleave & convert Float32 samples to Int16 PCM
  const channels = [];
  for (let i = 0; i < numChannels; i++) {
    channels.push(buffer.getChannelData(i));
  }

  let offset = 44;
  for (let i = 0; i < buffer.length; i++) {
    for (let ch = 0; ch < numChannels; ch++) {
      const sample = Math.max(-1, Math.min(1, channels[ch][i]));
      view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7fff, true);
      offset += 2;
    }
  }

  return new Blob([view], { type: 'audio/wav' });
}

// 7. Render a Seamless 4-Measure WAV Loop File Offline
export async function renderSongToWav(song) {
  const sampleRate = 44100;
  const eighthNoteSec = 60 / song.bpm / 2;
  const totalSteps = 32; // Exact 4-bar loop
  const loopDurationSec = totalSteps * eighthNoteSec;

  const OfflineCtx = window.OfflineAudioContext || window.webkitOfflineAudioContext;
  const offlineCtx = new OfflineCtx(2, Math.ceil(sampleRate * loopDurationSec), sampleRate);

  for (let step = 0; step < totalSteps; step++) {
    const stepTime = step * eighthNoteSec;
    playSongStep(offlineCtx, stepTime, step, song);
  }

  const renderedBuffer = await offlineCtx.startRendering();
  return audioBufferToWavBlob(renderedBuffer);
}

// 8. Live Playback Controller Factory for React
export function createElevatorController() {
  let audioCtx = null;
  let timerId = null;
  let isPlaying = false;
  let step = 0;
  let currentSong = generateSongFromSeed(101);

  function tick() {
    if (!audioCtx) return;
    playSongStep(audioCtx, audioCtx.currentTime, step, currentSong);
    step++;
  }

  function start() {
    if (isPlaying) return;
    if (!audioCtx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioCtx();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    isPlaying = true;
    step = 0;
    tick();
    const intervalMs = (60 / currentSong.bpm / 2) * 1000;
    timerId = setInterval(tick, intervalMs);
  }

  function stop() {
    if (!isPlaying) return;
    clearInterval(timerId);
    timerId = null;
    isPlaying = false;
  }

  function setSong(newSong) {
    currentSong = newSong;
    if (isPlaying) {
      stop();
      start();
    }
  }

  function destroy() {
    stop();
    if (audioCtx) {
      audioCtx.close();
      audioCtx = null;
    }
  }

  return { start, stop, setSong, destroy };
}
