"use client";
import React from "react";
import Webcam from "react-webcam";

const ObjectDetection = () => {
  return (
    <div className="mt-8">
      <div className="relative flex justify-center items-center gradiant p-1.5 rounded-md">
        {/* webcam */}
        <Webcam
          className="rounded-md w-full lg:h-[720px]"
          muted
          mirrored={true}
        />
      </div>
    </div>
  );
};

export default ObjectDetection;
