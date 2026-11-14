// elevatorSynth.js
export function createElevatorMusic(initialBpm = 105) {
  let audioCtx = null;
  let loopTimer = null;
  let isPlaying = false;
  let step = 0;
  let bpm = initialBpm;

  // Jazz chords in Hz (Fmaj7 -> G7 -> Em7 -> A7)
  const chords = [
    [174.61, 220.00, 261.63, 329.63],
    [196.00, 246.94, 293.66, 349.23],
    [164.81, 196.00, 246.94, 293.66],
    [220.00, 277.18, 329.63, 392.00],
  ];

  // C Major Pentatonic notes in Hz
  const melodyNotes = [523.25, 587.33, 659.25, 783.99, 880.00, 1046.50];

  function playTone(frequency, duration, maxVolume, waveType) {
    if (!audioCtx) return;
    const now = audioCtx.currentTime;

    const osc = audioCtx.createOscillator();
    const filter = audioCtx.createBiquadFilter();
    const gainNode = audioCtx.createGain();

    osc.type = waveType;
    osc.frequency.setValueAtTime(frequency, now);

    // Warm, muffled speaker filter
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(850, now);

    // Smooth ADSR envelope to prevent audio clicks
    gainNode.gain.setValueAtTime(0.0001, now);
    gainNode.gain.linearRampToValueAtTime(maxVolume, now + 0.04);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc.start(now);
    osc.stop(now + duration);
  }

  function sequencerStep() {
    const eighthNoteSeconds = 60 / bpm / 2;
    const stepInMeasure = step % 8;
    const chordIndex = Math.floor(step / 8) % chords.length;
    const currentChord = chords[chordIndex];

    // Syncopated Bossa Nova chords
    if (stepInMeasure === 0 || stepInMeasure === 3 || stepInMeasure === 6) {
      const duration = stepInMeasure === 0 ? eighthNoteSeconds * 2.5 : eighthNoteSeconds * 1.5;
      currentChord.forEach((freq) => playTone(freq, duration, 0.035, 'triangle'));
    }

    // Procedural lead melody
    if (Math.random() < 0.6) {
      const randomFreq = melodyNotes[Math.floor(Math.random() * melodyNotes.length)];
      playTone(randomFreq, eighthNoteSeconds * 1.8, 0.045, 'sine');
    }

    step++;
  }

  function start() {
    if (isPlaying) return;

    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContextClass();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    isPlaying = true;
    step = 0;
    sequencerStep();

    const intervalMs = (60 / bpm / 2) * 1000;
    loopTimer = setInterval(sequencerStep, intervalMs);
  }

  function stop() {
    if (!isPlaying) return;
    clearInterval(loopTimer);
    loopTimer = null;
    isPlaying = false;
  }

  function setBpm(newBpm) {
    bpm = newBpm;
    // Restart interval with new speed if currently playing
    if (isPlaying) {
      clearInterval(loopTimer);
      const intervalMs = (60 / bpm / 2) * 1000;
      loopTimer = setInterval(sequencerStep, intervalMs);
    }
  }

  // Full cleanup for React component unmounting
  function destroy() {
    stop();
    if (audioCtx) {
      audioCtx.close();
      audioCtx = null;
    }
  }

  return {
    start,
    stop,
    setBpm,
    destroy,
  };
}
