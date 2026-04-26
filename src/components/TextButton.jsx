import React from "react";
import { BiMessageDots } from "react-icons/bi";

const TextButton = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4 bg-[#F8FAFC] rounded-md">
      <div className="text-[36px] mb-2">
        <BiMessageDots />
      </div>
      <p className="text-[18px]">Text</p>
    </div>
  );
};

export default TextButton;
