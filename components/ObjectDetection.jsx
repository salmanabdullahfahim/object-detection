"use client";
import React, { useEffect, useRef } from "react";
import Webcam from "react-webcam";

const ObjectDetection = () => {
  const webCamRef = useRef(null);

  const showMyVideo = () => {
    if (
      webCamRef.current !== null &&
      webCamRef.current.video?.readyState === 4
    ) {
      const myVideWidth = webCamRef.current.video.videoWidth;
      const myVideHeight = webCamRef.current.video.videoHeight;

      webCamRef.current.video.width = myVideWidth;
      webCamRef.current.video.height = myVideHeight;
    }
  };

  useEffect(() => {
    showMyVideo();
  }, []);
  return (
    <div className="mt-8">
      <div className="relative flex justify-center items-center gradiant p-1.5 rounded-md">
        {/* webcam */}
        <Webcam
          ref={webCamRef}
          className="rounded-md w-full lg:h-[650px]"
          muted
          mirrored={true}
        />
      </div>
    </div>
  );
};

export default ObjectDetection;
