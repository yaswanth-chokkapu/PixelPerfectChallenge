import React from "react";
import videoFile from "../assets/seniorhack.mp4";

const VideoPlay = () => {
  return (
    <div className="w-full flex justify-center bg-black">
      <video
        src={videoFile}
        autoPlay
        loop
        muted
        playsInline
        className="w-[80%] sm:w-[85%]  max-h-[600px] object-cover"
      />
    </div>
  );
};

export default VideoPlay;
