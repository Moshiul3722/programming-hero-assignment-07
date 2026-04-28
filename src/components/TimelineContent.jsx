"use client";
import { CallButtonContext } from "@/context/callButton.context";
import Image from "next/image";
import { useContext, useEffect, useMemo, useState } from "react";
import callIcon from "../assets/call.png";
import textIcon from "../assets/text.png";
import videoIcon from "../assets/video.png";
import { format } from "date-fns";
import { FaAngleDown } from "react-icons/fa";

const TimelineContent = () => {
  const [sortingType, setSortingType] = useState("");
  const { callFriends } = useContext(CallButtonContext);

  // show current date as format
  const today = new Date();
  const currentDate = format(today, "MMMM dd, yyyy");
  console.log(callFriends, "Timeline");

  // sorting calls based on type
  const getFilteredCalls = () => {
    if (!sortingType) return callFriends;
    return callFriends.filter((call) => call.type === sortingType);
  };

  const filteredCalls = getFilteredCalls();

  // reset all call
  const showAllCalls = () => {
    setSortingType("");
  };

  return (
    <div className="">
      <div className="dropdown dropdown-right w-60">
        <div tabIndex={0} role="button" className="btn mt-6 w-58">
          Filter timeline <FaAngleDown />
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li onClick={showAllCalls}>
            <a>Filter timeline</a>
          </li>
          <li onClick={() => setSortingType("textToFriend")}>
            <a>Text</a>
          </li>
          <li onClick={() => setSortingType("callToFriend")}>
            <a>Call</a>
          </li>
          <li onClick={() => setSortingType("videoToFriend")}>
            <a>Video</a>
          </li>
        </ul>
      </div>
      <div>
        {filteredCalls.map((call, index) => (
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
    </div>
  );
};

export default TimelineContent;
