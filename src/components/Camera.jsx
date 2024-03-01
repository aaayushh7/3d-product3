import React, { useRef } from 'react';

export const CameraAccess = () => {
  const videoRef = useRef(null);

  const handleButtonClick = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  return (
    <div>
      <button className='fixed bottom-8 right-[350px] px-7 py-3 shadow-md items-center justify-center bg-[#5f80ea] rounded-md cursor-pointer 'onClick={handleButtonClick}>Access Camera</button>
      <video ref={videoRef} width="640" height="480" autoPlay></video>
    </div>
  );
};