import React from "react";
import { IoVideocamOutline } from "react-icons/io5";

const VideoButton = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4 bg-[#F8FAFC] rounded-md">
      <div className="text-[36px] mb-2">
        <IoVideocamOutline />
      </div>
      <p className="text-[18px]">Video</p>
    </div>
  );
};

export default VideoButton;
