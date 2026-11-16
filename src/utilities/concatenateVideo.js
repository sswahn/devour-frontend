/**
 * Natively encodes and concatenates an array of raw video Blobs into a single seamless Blob.
 * Generates an internal inline canvas and handles sequential audio track mixing automatically.
 * 
 * @param {Blob[]} videoBlobs - Array of raw video blobs to merge.
 * @param {string} mimeType - Desired output type. Defaults to webm which has universal browser recorder support.
 * @returns {Promise<Blob>} A promise that resolves into a single physical concatenated Blob.
 */
export async function concatenateVideo(videoBlobs, mimeType = 'video/webm;codecs=vp9,opus') {
  return new Promise(async (resolve, reject) => {
    try {
      if (!videoBlobs || videoBlobs.length === 0) {
        return reject(new Error("No video blobs provided for concatenation."));
      }

      // 1. Programmatically instantiate our hidden rendering pipeline
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const audioDestination = audioCtx.createMediaStreamDestination();

      // 2. Sample the first clip to set canvas dimensions 
      const initialUrl = URL.createObjectURL(videoBlobs[0]);
      const dimensionDetector = document.createElement('video');
      dimensionDetector.src = initialUrl;
      
      await new Promise((res) => {
        dimensionDetector.onloadedmetadata = () => {
          canvas.width = dimensionDetector.videoWidth || 720;
          canvas.height = dimensionDetector.videoHeight || 1280; // Vertical standard fallback
          URL.revokeObjectURL(initialUrl);
          res();
        };
      });

      // 3. Construct a combined media layout stream (Canvas Pixels + Mixed Audio Nodes)
      const canvasStream = canvas.captureStream(30); // Capture at a smooth 30 FPS
      const combinedStream = new MediaStream([
        ...canvasStream.getVideoTracks(),
        ...audioDestination.stream.getAudioTracks()
      ]);

      // 4. Hook up the browser's hardware-accelerated MediaRecorder
      const recordedChunks = [];
      const mediaRecorder = new MediaRecorder(combinedStream, { mimeType }); //

      mediaRecorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) recordedChunks.push(e.data); //
      };

      mediaRecorder.onstop = () => {
        audioCtx.close();
        const singlePhysicalBlob = new Blob(recordedChunks, { type: mimeType.split(';')[0] });
        resolve(singlePhysicalBlob);
      };

      // Ignite the recording loop
      mediaRecorder.start();

      // 5. Run sequential loops over every blob file
      for (const blob of videoBlobs) {
        await new Promise((resolveNextClip) => {
          const video = document.createElement('video');
          video.src = URL.createObjectURL(blob);
          video.muted = false; 
          video.playsInline = true;

          // Wire up audio track routing out of the playing clip into our recorder stream node
          video.oncanplay = () => {
            try {
              const sourceNode = audioCtx.createMediaElementSource(video);
              sourceNode.connect(audioDestination);
              sourceNode.connect(audioCtx.destination); // Allows the processing client to monitor audibly if desired
            } catch (e) {
              // Gracefully handle videos that do not possess an audio track layout
            }
          };

          // Render loops for capturing shifting visual states frame-by-frame
          video.onplay = () => {
            const renderLoop = () => {
              if (video.paused || video.ended) return;
              ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
              requestAnimationFrame(renderLoop); // Locks execution onto standard display intervals
            };
            renderLoop();
          };

          video.onended = () => {
            URL.revokeObjectURL(video.src); // Hard scrub browser memory slots instantly
            resolveNextClip();
          };

          video.play().catch(() => {
            // Safe fallback bypass if user interaction flags trigger an execution stutter
            resolveNextClip();
          });
        });
      }

      // Conclude the recording once all elements finish playing back sequentially
      mediaRecorder.stop();

    } catch (err) {
      reject(err);
    }
  });
}
