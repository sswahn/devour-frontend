
const recordingErrors = new WeakMap()

const DEFAULT_VIDEO_CONSTRAINTS = {
  facingMode: { ideal: 'environment' },
  width: { ideal: 3840 },
  height: { ideal: 2160 },
  frameRate: { ideal: 60 },
  aspectRatio: {
    ideal:
      typeof window !== 'undefined' && window.innerHeight
        ? window.innerWidth / window.innerHeight
        : 16 / 9
  }
}

const DEFAULT_AUDIO_CONSTRAINTS = {
  echoCancellation: false,
  noiseSuppression: false,
  sampleRate: 48000
}

const RECORDING_MIME_TYPES = [
  'video/webm;codecs=vp9,opus',
  'video/webm;codecs=vp8,opus',
  'video/webm;codecs=h264,opus',
  'video/webm',
  'video/mp4'
]

function isObject(value) {
  return value !== null &&
    typeof value === 'object' &&
    !Array.isArray(value)
}

function assertStream(stream, method) {
  if (typeof MediaStream === 'undefined' || !(stream instanceof MediaStream)) {
    throw new TypeError(`${method}: argument must be a MediaStream.`)
  }
}

function getTracks(stream, kind, method) {
  assertStream(stream, method)

  const tracks = kind === 'video' ? stream.getVideoTracks() : stream.getAudioTracks()

  if (tracks.length === 0) {
    throw new Error(`${method}: no ${kind} tracks available.`)
  }

  return tracks
}

function selectMimeType() {
  if (typeof MediaRecorder === 'undefined') {
    throw new Error('MediaRecorder is not supported in this browser.')
  }

  if (typeof MediaRecorder.isTypeSupported !== 'function') {
    return undefined
  }

  return RECORDING_MIME_TYPES.find(type => MediaRecorder.isTypeSupported(type))
}

const camera = {
  async on(constraints = {}) {
    if (!isObject(constraints)) {
      throw new TypeError('camera.on: argument must be an object.')
    }

    if (typeof navigator === 'undefined' || !navigator.mediaDevices || typeof navigator.mediaDevices.getUserMedia !== 'function') {
      throw new Error('camera.on: camera access is unavailable. ' + 'Use a supported browser in a secure context.')
    }

    for (const key of ['audio', 'video']) {
      if (constraints[key] !== undefined && constraints[key] !== false && constraints[key] !== true && !isObject(constraints[key])) {
        throw new TypeError(`camera.on: "${key}" must be a boolean or constraint object.`)
      }
    }

    const {
      audio = {},
      video = {},
      ...otherConstraints
    } = constraints

    if (Object.keys(otherConstraints).length > 0) {
      throw new TypeError('camera.on: unexpected top-level constraint properties.')
    }

    const finalConstraints = {
      audio:
        audio === false || audio === true
          ? audio
          : { ...DEFAULT_AUDIO_CONSTRAINTS, ...audio },
      video:
        video === false || video === true
          ? video
          : { ...DEFAULT_VIDEO_CONSTRAINTS, ...video }
    }

    return navigator.mediaDevices.getUserMedia(finalConstraints)
  },

  off(stream) {
    assertStream(stream, 'camera.off')

    // Stop every track, including audio tracks.
    stream.getTracks().forEach(track => track.stop())
  },

  getCapabilities(stream) {
    const [track] = getTracks(
      stream,
      'video',
      'camera.getCapabilities'
    )

    if (typeof track.getCapabilities !== 'function') {
      return null
    }

    return track.getCapabilities()
  },

  async light(stream) {
    const [track] = getTracks(
      stream,
      'video',
      'camera.light'
    )

    if (typeof track.getCapabilities !== 'function') {
      throw new Error(
        'camera.light: camera capabilities are unavailable.'
      )
    }

    const capabilities = track.getCapabilities()

    if (!capabilities.torch) {
      throw new Error(
        'camera.light: this camera does not support torch control.'
      )
    }

    return track.applyConstraints({
      advanced: [{ torch: true }]
    })
  },

  async dark(stream) {
    const [track] = getTracks(
      stream,
      'video',
      'camera.dark'
    )

    if (typeof track.getCapabilities !== 'function') {
      throw new Error(
        'camera.dark: camera capabilities are unavailable.'
      )
    }

    const capabilities = track.getCapabilities()

    if (!capabilities.torch) {
      throw new Error(
        'camera.dark: this camera does not support torch control.'
      )
    }

    return track.applyConstraints({
      advanced: [{ torch: false }]
    })
  },

  async takePhoto(stream) {
    const [track] = getTracks(
      stream,
      'video',
      'camera.takePhoto'
    )

    if (track.readyState !== 'live') {
      throw new Error(
        'camera.takePhoto: video track is not live.'
      )
    }

    if (typeof ImageCapture === 'undefined') {
      throw new Error(
        'camera.takePhoto: still photo capture is unsupported.'
      )
    }

    const imageCapture = new ImageCapture(track)

    // Request maximum advertised still-image dimensions when
    // the API exposes them. Do not assume video dimensions
    // describe the sensor's still-photo capabilities.
    let photoSettings

    if (
      typeof imageCapture.getPhotoCapabilities === 'function'
    ) {
      const capabilities =
        await imageCapture.getPhotoCapabilities()

      photoSettings = {}

      if (capabilities.imageWidth?.max > 0) {
        photoSettings.imageWidth = capabilities.imageWidth.max
      }

      if (capabilities.imageHeight?.max > 0) {
        photoSettings.imageHeight = capabilities.imageHeight.max
      }
    }

    return imageCapture.takePhoto(photoSettings)
  },

  mute(stream) {
    const tracks = getTracks(
      stream,
      'audio',
      'camera.mute'
    )

    tracks.forEach(track => {
      track.enabled = false
    })
  },

  unmute(stream) {
    const tracks = getTracks(
      stream,
      'audio',
      'camera.unmute'
    )

    tracks.forEach(track => {
      track.enabled = true
    })
  },

  startRecording(stream, frames) {
    assertStream(stream, 'camera.startRecording')

    if (!Array.isArray(frames)) {
      throw new TypeError('camera.startRecording: frames must be an array.')
    }

    if (stream.getVideoTracks().length === 0) {
      throw new Error('camera.startRecording: stream has no video track.')
    }

    if (stream.getTracks().some(track => track.readyState !== 'live')) {
      throw new Error('camera.startRecording: all tracks must be live.')
    }

    const mimeType = selectMimeType()

    const options = {
      videoBitsPerSecond: 10_000_000,
      audioBitsPerSecond: 192_000
    }

    if (mimeType) {
      options.mimeType = mimeType
    }

    const recorder = new MediaRecorder(stream, options)

    // Keep the first fatal recording error, even if it occurs
    // before stopRecording() is called.
    recordingErrors.set(recorder, null)

    recorder.addEventListener('error', event => {
      if (!recordingErrors.get(recorder)) {
        recordingErrors.set(
          recorder,
          event.error ||
            new Error('camera.startRecording: recording failed.')
        )
      }
    })

    recorder.addEventListener('dataavailable', async event => { // async for debugging
      if (event.data && event.data.size > 0) {

        console.log('Before push:', {
          framesLength: frames.length,
          chunkSize: event.data.size,
          framesReference: frames
        })
        
        frames.push(event.data)
        
        console.log('After push:', {
          framesLength: frames.length,
          totalBytes: frames.reduce(
            (total, chunk) => total + chunk.size,
            0
          )
        })

      }
    })

    try {
      recorder.start()
    } catch (error) {
      recordingErrors.delete(recorder)
      throw error
    }

    return recorder
  },

  stopRecording(recorder, frames) {
    if (
      typeof MediaRecorder === 'undefined' ||
      !(recorder instanceof MediaRecorder)
    ) {
      throw new TypeError(
        'camera.stopRecording: first argument must be a MediaRecorder.'
      )
    }

    if (!Array.isArray(frames)) {
      throw new TypeError(
        'camera.stopRecording: second argument must be an array.'
      )
    }

    if (recorder.state === 'inactive') {
      throw new Error(
        'camera.stopRecording: recorder is already inactive.'
      )
    }


    console.log('stopRecording called:', {
      framesLength: frames.length,
      totalBytes: frames.reduce(
        (total, chunk) => total + chunk.size,
        0
      ),
      framesReference: frames,
      recorderState: recorder.state
    })
    

    return new Promise((resolve, reject) => {
      let settled = false

      const cleanup = () => {
        recorder.removeEventListener('stop', onStop)
        recorder.removeEventListener('error', onError)
      }

      const settle = (callback, value) => {
        if (settled) return

        settled = true
        cleanup()
        callback(value)
      }

      const onError = event => {
        const error =
          event.error ||
          recordingErrors.get(recorder) ||
          new Error('camera.stopRecording: recording failed.')

        recordingErrors.set(recorder, error)
        settle(reject, error)
      }

      const onStop = async () => { // async for debugging

        console.log('Recorder stopped:', {
          framesLength: frames.length,
          totalBytes: frames.reduce(
            (total, chunk) => total + chunk.size,
            0
          ),
          recorderMimeType: recorder.mimeType
        })

        
        const error = recordingErrors.get(recorder)

        // Do not return a seemingly successful video after a
        // fatal recording error.
        if (error) {
          frames.length = 0
          recordingErrors.delete(recorder)
          settle(reject, error)
          return
        }

        const mimeType =
          recorder.mimeType || 'application/octet-stream'

        const blob = new Blob(frames, { type: mimeType })


        const header = [...new Uint8Array(
          await blob.slice(0, 4).arrayBuffer()
        )]
        
        console.log('Final recording Blob:', {
          size: blob.size,
          type: blob.type,
          framesLength: frames.length,
          header: header
            .map(byte => byte.toString(16).padStart(2, '0'))
            .join(' ')
        })
        

        frames.length = 0
        recordingErrors.delete(recorder)

        if (blob.size === 0) {
          settle(
            reject,
            new Error(
              'camera.stopRecording: recording produced no data.'
            )
          )
          return
        }

        settle(resolve, blob)
      }

      recorder.addEventListener('stop', onStop)
      recorder.addEventListener('error', onError)

      try {
        recorder.stop()
      } catch (error) {
        settle(reject, error)
      }
    })
  }
}

export default camera
