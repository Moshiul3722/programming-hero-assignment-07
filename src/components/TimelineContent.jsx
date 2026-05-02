"use client";
import { CallButtonContext } from "@/context/callButton.context";
import Image from "next/image";
import { useContext, useState } from "react";
import callIcon from "../assets/call.png";
import textIcon from "../assets/text.png";
import videoIcon from "../assets/video.png";
import { format } from "date-fns";
import { FaAngleDown } from "react-icons/fa";
import Link from "next/link";

const TimelineContent = () => {
  const [sortingType, setSortingType] = useState("");
  const { callFriends } = useContext(CallButtonContext);

  // show current date as format
  const today = new Date();
  const currentDate = format(today, "MMMM dd, yyyy");
  // console.log(callFriends, "Timeline");

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
<<<<<<< HEAD
  // console.log(callFriends, "Yet found");
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
      {filteredCalls.length == 0 ? (
=======

  // console.log(callFriends, "Yet found");

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
      {callFriends.length == 0 ? (
>>>>>>> 05ca2eb (Little correction)
        <div className="flex justify-center flex-col items-center space-y-6">
          <h2 className="text-3xl font-bold text-[#ff2b2b]">
            Data not loaded yet!
          </h2>
          <Link href="/">
            <button className="btn btn-outline btn-accent">
              Back to Home page
            </button>
          </Link>
        </div>
      ) : (
        <>
<<<<<<< HEAD
         
=======
>>>>>>> 05ca2eb (Little correction)
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
        </>
      )}
    </div>
  );
};

export default TimelineContent;
