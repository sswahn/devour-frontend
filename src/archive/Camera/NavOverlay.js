import { useContext } from 'react'
import { Context } from '../../Provider'
import CameraIcon from '../Icons/CameraIcon/CameraIcon'
import FileVideoIcon from '../Icons/FileVideoIcon/FileVideoIcon'
import ImageIcon from '../Icons/ImageIcon/ImageIcon'
import VideoIcon from '../Icons/VideoIcon/VideoIcon'
import LocationIcon from '../Icons/LocationIcon/LocationIcon'
import MicrophoneIcon from '../Icons/MicrophoneIcon/MicrophoneIcon'
import MicrophoneSlashIcon from '../Icons/MicrophoneIcon/MicrophoneSlashIcon'

const NavOverlay = ({ timer, previewFiles, openSubmit, toggleMute, mute }) => {
  const [context, dispatch] = useContext(Context)
  
  const handleOpenLocation = event => {
    dispatch({ type: 'field', payload: context.field === 'location' ? undefined : 'location' })
  }
  
  const handleModeCamera = event => {
    dispatch({ type: 'mode', payload: 'camera' })
  }
  
  const handleModeVideo = event => {
    dispatch({ type: 'mode', payload: 'video' })
  }
  
  const adjustHeight = () => {
    if (context.images.length && context.video.length) {
      return '415px'
    }
    if (context.images.length || context.video.length) {
      return '333px'
    }
    return '250px'
  }
  
  
  function blobsToBase64(blobs) {
    return Promise.all(blobs.map(blob => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = function() {
          resolve(reader.result);
        };
        reader.onerror = reject;
      });
    }));
  }
  
  const handleSubmitTest = async event => {
    const base64Arr = await blobsToBase64(context.video)
    const request = {
      video: base64Arr
    }
    
    const response = await fetch('/api/v1/test', {
      method: 'post',
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    console.log('response: ', response)
    
    const json = await response.json()
    
    console.log('json: ', json)
  }
  
  return (
    <>
      <div className="camera-navigation" style={{ height: adjustHeight() }}>
      
      {/*
        <button id="swap-segment" onClick={handleSubmitTest} type="button">
          Test
        </button>
      */}
      
        {!!context.images.length && (
          <button id="images" className="icon-btn" onClick={previewFiles} type="button" aria-label="preview and edit images" aria-haspopup="dialog">
            <ImageIcon />
            <div className="badge" role="status" aria-label="video count">{context.images.length}</div>
            <div className="tooltip" role="tooltip">Images</div>
          </button>
        )}
        {!!context.video.length && (
          <button id="video" className="icon-btn" onClick={previewFiles} type="button" aria-label="preview and edit video" aria-haspopup="dialog">
            <FileVideoIcon />
            <div className="badge" role="status" aria-label="video count">{context.video.length}</div>
            <div className="tooltip" role="tooltip">Video</div>
          </button>
        )}
        <button 
          className="icon-btn"
          onClick={handleModeCamera} 
          type="button"
          aria-label="camera mode"
          aria-selected={context.mode === 'camera'}>
          <CameraIcon style={{ fill: context.mode === 'camera' ? 'white' : 'gray' }} />
          <div className="tooltip" role="tooltip">Camera</div>
        </button>
        <button 
          className="icon-btn"
          onClick={handleModeVideo} 
          type="button"
          aria-label="video mode"
          aria-selected={context.mode === 'video' || context.mode === 'recording'}
          aria-controls="mute-video">
          <VideoIcon style={{ fill: context.mode === 'video' || context.mode === 'recording' ? 'white' : 'gray' }} />
          <div className="tooltip" role="tooltip">Video</div>
        </button>
        <button className="icon-btn" onClick={openSubmit} type="button" aria-label="add your location" aria-haspopup="dialog">
          <LocationIcon />
          <div className="tooltip" role="tooltip">Location</div>
        </button>
      </div>
      
      {context.mode === 'recording' && (
        <div className="video-timer">
          {`${Math.floor(timer / 60)}:${String(timer % 60).padStart(2, "0")}`}
        </div>
      )}
      
      {(context.mode === 'video' || context.mode === 'recording') && (
        <div id="mute-video" className="video-mute" aria-hidden="false">
          {mute ? (
            <button className="icon-btn" onClick={toggleMute} type="button" aria-label="unmute video">
              <MicrophoneSlashIcon />
              <div className="tooltip" role="tooltip">Unmute</div>
            </button>
          ) : (
            <button className="icon-btn" onClick={toggleMute} type="button" aria-label="mute video">
              <MicrophoneIcon />
              <div className="tooltip" role="tooltip">Mute</div>
            </button>
          )}
        </div>
      )}
    </>
  )
}

export default NavOverlay
