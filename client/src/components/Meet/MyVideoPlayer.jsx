import { useEffect, useRef, useState } from 'react';

export const MyVideoPlayer = ({ stream }) => {
  const videoRef = useRef(null);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (videoRef.current && stream) videoRef.current.srcObject = stream;
  }, [stream]);

  const handleClick = () => {
    setEnabled(!enabled);
    stream.getVideoTracks()[0].enabled = !enabled;
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
      <button onClick={handleClick}>Boton</button>
    </>
  );
};
