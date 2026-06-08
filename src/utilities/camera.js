//TODO: create a function that returns device camera capabilities
// this will populate UI with buttons interacting with capabilities.

const camera = {
  on(constraints = {}) {
    if (!(constraints instanceof Object) || Array.isArray(constraints)) {
      throw new TypeError('camera.on: argument must be an object literal.')
    }
    const defaultConstraints = {
      audio: {
        echoCancellation: false,
        noiseSuppression: false,
        sampleRate: 48000
      },
      video: {
        facingMode: { ideal: 'environment' },
        width: { ideal: 3840 },
        height: { ideal: 2160 },
        frameRate: { ideal: 60 },
        aspectRatio: {
          ideal: window.innerWidth / window.innerHeight
        }
      }
    }
    const finalConstraints = {
      audio: { ...defaultConstraints.audio, ...(constraints.audio || {}) },
      video: { ...defaultConstraints.video, ...(constraints.video || {}) }
    }
    return navigator.mediaDevices.getUserMedia(finalConstraints)
  },
  off(stream) {
    if (!(stream instanceof MediaStream)) {
      throw new TypeError('Argument must be an instance of MediaStream.')
    }
    try {
      stream.getTracks().forEach(track => {
        if (track.readyState === 'live') {
          track.stop()
        }
      })
    } catch (error) {
      throw new Error(error)
    }
  },
  getCapabilities(stream) {
    if (!(stream instanceof MediaStream)) {
      throw new TypeError('Argument must be an instance of MediaStream.')
    }
    const track = stream.getVideoTracks().at(0)
    return track?.getCapabilities()
  },
  light(stream) {
    if (!(stream instanceof MediaStream)) {
      throw new TypeError('camera.light: argument must be an instance of MediaStream.')
    }
    const videoTracks = stream.getVideoTracks()
    if (!videoTracks.length) {
      throw new Error('No video tracks available.')
    }
    const constraints = {
      fillLightMode: 'flash',
      advanced: [{ torch: true }] 
    }
    return videoTracks[0].applyConstraints(constraints)
  },
  dark(stream) {
    if (!(stream instanceof MediaStream)) {
      throw new TypeError('camera.dark: argument must be an instance of MediaStream.')
    }
    const videoTracks = stream.getVideoTracks()
    if (!videoTracks.length) {
      throw new Error('No video tracks available.')
    }
    const constraints = {
      fillLightMode: 'off',
      advanced: [{ torch: false }] 
    }
    return videoTracks[0].applyConstraints(constraints)
  },
  async takePhoto(stream) {
    if (!(stream instanceof MediaStream)) {
      throw new TypeError('camera.takePhoto: argument must be an instance of MediaStream.')
    }
    const track = stream.getVideoTracks()[0]
    const imageCapture = new ImageCapture(track)
    const capabilities = track.getCapabilities()
    const settings = track.getSettings()
    const options = {
      imageWidth: capabilities.width.max || settings.width,
      imageHeight: capabilities.height.max || settings.height
    }
    
    if (capabilities.hdr && !settings.hdr) {
      console.log("Enabling HDR...")
      await track.applyConstraints({ advanced: [{ hdr: true }] })
    }

    return imageCapture.takePhoto(options)
      
    /*
    const canvas = new OffscreenCanvas(videoElement.videoWidth, videoElement.videoHeight)
    const ctx = canvas.getContext("2d")
    ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height)
    return canvas.convertToBlob({ type: "image/webp" }) // Attempt lossless WebP
    */
  },
  mute(stream) {
    if (!(stream instanceof MediaStream)) {
      throw new TypeError('camera.mute: argument must be an instance of MediaStream.')
    }
    const audioTracks = stream.getAudioTracks()
    if (audioTracks.length === 0) {
        throw new Error('No audio tracks found.')
    }
    audioTracks.forEach(track => {
        track.enabled = false;
    })
  },
  unmute(stream) {
    if (!(stream instanceof MediaStream)) {
      throw new TypeError('camera.unmute: argument must be an instance of MediaStream.')
    }
    const audioTracks = stream.getAudioTracks()
    if (audioTracks.length === 0) {
        throw new Error('No audio tracks found.')
    }
    audioTracks.forEach(track => {
        track.enabled = true;
    })
  },
  startRecording(stream, frames) {
    if (!(stream instanceof MediaStream)) {
      throw new TypeError('camera.startRecording: first argument must be an instance of MediaStream.')
    }
    if (!Array.isArray(frames)) {
      throw new TypeError('camera.startRecording: second argument must be an array.')
    }
    // dynamically get highest bps device is capable of
    const options = {
      mimeType: 'video/webm; codecs=vp9,opus',
      videoBitsPerSecond: 10_000_000, // High video quality
      audioBitsPerSecond: 320_000   // Force 192 kbps audio quality
    }
    const mediaRecorder = new MediaRecorder(stream, options)
    mediaRecorder.addEventListener('dataavailable', event => {
      frames.push(event.data)
    })
    mediaRecorder.start()
    return mediaRecorder
  },
  stopRecording(mediaRecorder, frames) {
    if (!(mediaRecorder instanceof MediaRecorder)) {
      throw new TypeError('camera.stopRecording: first argument must be an instance of MediaRecorder.')
    }
    if (!Array.isArray(frames)) {
      throw new TypeError('camera.stopRecording: second argument must be an array.')
    }
    if (mediaRecorder.state === 'inactive') {
      throw new Error('camera.stopRecording: MediaRecorder is already stopped.')
    }
    return new Promise((resolve, reject) => {
      let settled = false

      // test this with and without settled
      // make sure this is working.
      const settle = fn => (...args) => {
        if (settled) {
          return
        }
        settled = true
        fn(...args)
      }
      mediaRecorder.addEventListener('stop', settle(() => {
        const blob = new Blob(frames, { type: 'video/webm' })
        frames.length = 0
        resolve(blob)
      }), { once: true })
      
      mediaRecorder.addEventListener('error', settle(event => {
        reject(event?.error || new Error('Error on stopRecording'))
      }), { once: true })
      try {
        mediaRecorder.stop()
      } catch (error) {
        settle(() => reject(error))()
      }
    })
  }
}

export default camera
