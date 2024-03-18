"use client";
import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { load as cocoSsdLoad } from "@tensorflow-models/coco-ssd";
import * as tf from "@tensorflow/tfjs";

let detectInterval;

const ObjectDetection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const webCamRef = useRef(null);

  const runCoco = async () => {
    setIsLoading(true);
    const net = await cocoSsdLoad();
    setIsLoading(false);

    detectInterval = setInterval(() => {
      //   runObjectDetection(net);
    }, 10);
  };

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
    runCoco();
    showMyVideo();
  }, []);
  return (
    <div className="mt-8">
      {isLoading ? (
        <div>
          <h2 className="gradiant-text">Loading AI Model...</h2>
        </div>
      ) : (
        <div className="relative flex justify-center items-center gradiant p-1.5 rounded-md">
          {/* webcam */}
          <Webcam
            ref={webCamRef}
            className="rounded-md w-full lg:h-[650px]"
            muted
            mirrored={true}
          />
        </div>
      )}
    </div>
  );
};

export default ObjectDetection;
