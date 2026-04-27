"use client";
import { CallButtonContext } from "@/context/callButton.context";
import Image from "next/image";
import { useContext } from "react";
import callIcon from "../assets/call.png";
import textIcon from "../assets/text.png";
import videoIcon from "../assets/video.png";
import { format } from "date-fns";

const TimelineContent = () => {
  const { callFriends } = useContext(CallButtonContext);
  const today = new Date();
  const currentDate = format(today, "MMMM dd, yyyy");
  console.log(callFriends, "Timeline");
  return (
    <div>
      {callFriends.map((call, index) => (
        <div
          key={index}
          className="flex items-center bg-white my-6 p-4 rounded-md shadow-md"
        >
          <div className="w-16">
            <Image
              src={
                call.type === "callToFriend"
                  ? callIcon
                  : call.type === "textToFriend"
                    ? textIcon
                    : videoIcon
              }
              alt="Profile"
              width={40}
              height={40}
            />
          </div>
          <div>
            <h2>
              <span className="font-semibold text-[#1F2937] text-[20px]">
                {call.type === "callToFriend"
                  ? "Call"
                  : call.type === "textToFriend"
                    ? "Text"
                    : "Video"}
                &nbsp;
              </span>
              {call.name}
            </h2>
            <p>{currentDate}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineContent;
