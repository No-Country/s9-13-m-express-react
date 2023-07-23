import { useEffect, useRef, useState } from 'react';

export const MyVideoPlayer = ({ stream }) => {
  const videoRef = useRef(null);
  const [video, setVideo] = useState(true);
  const [audio, setAudio] = useState(true);

  useEffect(() => {
    if (videoRef.current && stream) videoRef.current.srcObject = stream;
  }, [stream]);

  const handleVideo = () => {
    setVideo(!video);
    stream.getVideoTracks()[0].enabled = !video;
  };

  const handleAudio = () => {
    setAudio(!audio);
    stream.getAudioTracks()[0].enabled = !audio;
  };

  return (
    <>
      <video
        data-testid='peer-video'
        //   style={{ width: "100%" }}
        ref={videoRef}
        autoPlay
        muted={true}
      />
      <button onClick={handleVideo}>Video</button>
      <button onClick={handleAudio}>Audio</button>
    </>
  );
};
