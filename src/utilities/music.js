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

// 2. Musical Keys for Transposition
const KEYS = [
  { name: 'C', semitones: 0 },
  { name: 'Db', semitones: 1 },
  { name: 'D', semitones: 2 },
  { name: 'Eb', semitones: 3 },
  { name: 'E', semitones: 4 },
  { name: 'F', semitones: 5 },
  { name: 'Gb', semitones: -6 },
  { name: 'G', semitones: -5 },
  { name: 'Ab', semitones: -4 },
  { name: 'A', semitones: -3 },
  { name: 'Bb', semitones: -2 },
  { name: 'B', semitones: -1 },
];

// 3. Expanded Chord Progressions (Base frequencies in C)
const PROGRESSIONS = [
  {
    name: 'Classic Bossa',
    chords: [
      [174.61, 220.00, 261.63, 329.63], // Fmaj7
      [196.00, 246.94, 293.66, 349.23], // G7
      [164.81, 196.00, 246.94, 293.66], // Em7
      [220.00, 277.18, 329.63, 392.00], // A7
    ],
  },
  {
    name: 'Sunday Lobby 2-5-1',
    chords: [
      [146.83, 174.61, 220.00, 261.63, 329.63], // Dm9
      [196.00, 246.94, 329.63, 349.23, 440.00], // G13
      [130.81, 164.81, 196.00, 246.94, 293.66], // Cmaj9
      [220.00, 277.18, 349.23, 392.00, 466.16], // A7b9
    ],
  },
  {
    name: 'Midnight Minor Bossa',
    chords: [
      [130.81, 155.56, 196.00, 233.08], // Cm7
      [174.61, 207.65, 261.63, 311.13], // Fm7
      [146.83, 174.61, 207.65, 261.63], // Dm7b5
      [196.00, 246.94, 293.66, 349.23], // G7
    ],
    minor: true,
  },
  {
    name: 'Skyline Lounge',
    chords: [
      [130.81, 164.81, 196.00, 246.94], // Cmaj7
      [220.00, 277.18, 329.63, 392.00], // A7
      [146.83, 174.61, 220.00, 261.63], // Dm7
      [196.00, 246.94, 293.66, 349.23], // G7
    ],
  },
  {
    name: 'Velvet Ascent',
    chords: [
      [220.00, 261.63, 329.63, 392.00], // Am7
      [146.83, 185.00, 220.00, 261.63, 329.63], // D9
      [196.00, 246.94, 293.66, 369.99], // Gmaj7
      [130.81, 164.81, 196.00, 246.94], // Cmaj7
    ],
  },
  {
    name: 'Tropical Atrium',
    chords: [
      [130.81, 164.81, 196.00, 246.94], // Cmaj7
      [146.83, 185.00, 220.00, 261.63], // D7
      [146.83, 174.61, 220.00, 261.63], // Dm7
      [196.00, 246.94, 293.66, 349.23], // G7
    ],
  },
];

const MAJOR_MELODY = [523.25, 587.33, 659.25, 783.99, 880.00, 1046.50, 1174.66];
const MINOR_MELODY = [523.25, 622.25, 698.46, 783.99, 932.33, 1046.50, 1174.66];

function transposeFreq(freq, semitones) {
  return freq * Math.pow(2, semitones / 12);
}

// 4. Generate a Diverse Deterministic Song from a Seed
export function generateSongFromSeed(seed) {
  const rng = createRng(seed);

  const key = KEYS[Math.floor(rng() * KEYS.length)];
  const prog = PROGRESSIONS[Math.floor(rng() * PROGRESSIONS.length)];
  const bpm = Math.floor(86 + rng() * 38); // 86 to 124 BPM

  const leadWaves = ['sine', 'triangle'];
  const leadWave = leadWaves[Math.floor(rng() * leadWaves.length)];
  const filterCutoff = Math.floor(650 + rng() * 650); // Warmth variation (650Hz - 1300Hz)

  const bassStyles = ['Two-Beat Bossa', 'Walking Jazz', 'Syncopated Groove'];
  const bassStyle = bassStyles[Math.floor(rng() * bassStyles.length)];

  const strumPatterns = [,
 ,
 ,
  ];
  const strumPattern = strumPatterns[Math.floor(rng() * strumPatterns.length)];

  const shakerPatterns = [, // Steady 8th-note shaker,       // Syncopated bossa shaker,             // Off-beat brushed hi-hat
  ];
  const shakerPattern = shakerPatterns[Math.floor(rng() * shakerPatterns.length)];

  // Transpose chords into the selected key
  const chords = prog.chords.map((chord) =>
    chord.map((freq) => transposeFreq(freq, key.semitones))
  );

  // Build 32-step (4-measure) procedural melody with phrasing rests
  const baseScale = prog.minor ? MINOR_MELODY : MAJOR_MELODY;
  const transposedScale = baseScale.map((f) => transposeFreq(f, key.semitones));
  const noteDensity = 0.4 + rng() * 0.3; // 40% to 70% note density

  const melodySteps = Array.from({ length: 32 }, (_, idx) => {
    // Leave breathing room at the end of every 2nd and 4th measure
    if (idx % 16 === 14 || idx % 16 === 15) return null;
    if (rng() < noteDensity) {
      return transposedScale[Math.floor(rng() * transposedScale.length)];
    }
    return null;
  });

  return {
    seed,
    title: `Track #${seed}`,
    keyName: `${key.name} ${prog.minor ? 'Minor' : 'Major'}`,
    styleName: prog.name,
    bassStyle,
    bpm,
    leadWave,
    filterCutoff,
    chords,
    strumPattern,
    shakerPattern,
    melodySteps,
  };
}

// 5. White-Noise Buffer Cache for Brushed Shaker Percussion
const noiseBufferCache = new WeakMap();

function getNoiseBuffer(ctx) {
  if (noiseBufferCache.has(ctx)) {
    return noiseBufferCache.get(ctx);
  }
  const bufferSize = ctx.sampleRate * 1; // 1 second of white noise
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }
  noiseBufferCache.set(ctx, buffer);
  return buffer;
}

function scheduleShaker(ctx, time, accent) {
  const noise = ctx.createBufferSource();
  noise.buffer = getNoiseBuffer(ctx);

  const filter = ctx.createBiquadFilter();
  filter.type = 'highpass';
  filter.frequency.setValueAtTime(5500, time);

  const gain = ctx.createGain();
  const peak = accent ? 0.022 : 0.011;
  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.linearRampToValueAtTime(peak, time + 0.008);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.055);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  noise.start(time);
  noise.stop(time + 0.06);
}

// 6. Pitched Note Synthesis Helper
function scheduleNote(ctx, time, freq, duration, maxVolume, waveType, cutoff) {
  const osc = ctx.createOscillator();
  const filter = ctx.createBiquadFilter();
  const gainNode = ctx.createGain();

  osc.type = waveType;
  osc.frequency.setValueAtTime(freq, time);

  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(cutoff, time);

  gainNode.gain.setValueAtTime(0.0001, time);
  gainNode.gain.linearRampToValueAtTime(maxVolume, time + 0.03);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, time + duration);

  osc.connect(filter);
  filter.connect(gainNode);
  gainNode.connect(ctx.destination);

  osc.start(time);
  osc.stop(time + duration);
}

// 7. Schedule One Step of a Song on Any AudioContext
function playSongStep(ctx, time, stepIndex, song) {
  const eighthNoteSec = 60 / song.bpm / 2;
  const stepInMeasure = stepIndex % 8;
  const chordIndex = Math.floor(stepIndex / 8) % song.chords.length;
  const currentChord = song.chords[chordIndex];
  const nextChord = song.chords[(chordIndex + 1) % song.chords.length];

  // A. Electric Piano Chords
  if (song.strumPattern.includes(stepInMeasure)) {
    const dur = stepInMeasure === 0 ? eighthNoteSec * 2.3 : eighthNoteSec * 1.4;
    currentChord.forEach((freq) => {
      scheduleNote(ctx, time, freq, dur, 0.03, 'triangle', song.filterCutoff);
    });
  }

  // B. Dynamic Basslines
  const rootBass = currentChord[0] / 2;
  const fifthBass = (currentChord[2] || currentChord[0] * 1.5) / 2;
  const thirdBass = currentChord[1] / 2;
  const nextRootBass = nextChord[0] / 2;

  if (song.bassStyle === 'Two-Beat Bossa') {
    if (stepInMeasure === 0) {
      scheduleNote(ctx, time, rootBass, eighthNoteSec * 2.8, 0.065, 'sine', 500);
    } else if (stepInMeasure === 4) {
      scheduleNote(ctx, time, fifthBass, eighthNoteSec * 2.5, 0.055, 'sine', 500);
    }
  } else if (song.bassStyle === 'Walking Jazz') {
    if (stepInMeasure === 0) {
      scheduleNote(ctx, time, rootBass, eighthNoteSec * 1.8, 0.065, 'sine', 550);
    } else if (stepInMeasure === 2) {
      scheduleNote(ctx, time, thirdBass, eighthNoteSec * 1.8, 0.06, 'sine', 550);
    } else if (stepInMeasure === 4) {
      scheduleNote(ctx, time, fifthBass, eighthNoteSec * 1.8, 0.06, 'sine', 550);
    } else if (stepInMeasure === 6) {
      // Chromatic approach tone into the next chord's root
      const approach = nextRootBass * Math.pow(2, -1 / 12);
      scheduleNote(ctx, time, approach, eighthNoteSec * 1.8, 0.06, 'sine', 550);
    }
  } else {
    // Syncopated Groove
    if (stepInMeasure === 0 || stepInMeasure === 3 || stepInMeasure === 6) {
      const note = stepInMeasure === 3 ? fifthBass : rootBass;
      scheduleNote(ctx, time, note, eighthNoteSec * 1.8, 0.065, 'sine', 500);
    }
  }

  // C. Brushed Shaker Percussion
  if (song.shakerPattern.includes(stepInMeasure)) {
    scheduleShaker(ctx, time, stepInMeasure === 2 || stepInMeasure === 6);
  }

  // D. Procedural Melody
  const melodyFreq = song.melodySteps[stepIndex % 32];
  if (melodyFreq) {
    scheduleNote(
      ctx,
      time,
      melodyFreq,
      eighthNoteSec * 1.75,
      0.042,
      song.leadWave,
      song.filterCutoff + 300
    );
  }
}

// 8. Convert AudioBuffer to Downloadable WAV Blob
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

  writeString(0, 'RIFF');
  view.setUint32(4, 36 + length, true);
  writeString(8, 'WAVE');
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
