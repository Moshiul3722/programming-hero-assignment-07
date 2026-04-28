"use client";

import FriendsCard from "@/components/FriendsCard";
import { BiMessageDots } from "react-icons/bi";
import { FiArchive } from "react-icons/fi";
import { IoTrashOutline, IoVideocamOutline } from "react-icons/io5";
import { MdNotificationsPaused, MdVideoCall } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";
import { format } from "date-fns";

import { use, useContext, useEffect, useState } from "react";
import { CallButtonContext } from "@/context/callButton.context";
import { toast, Bounce } from "react-toastify";

const DetailPageContent = ({ id }) => {
  const [allFriend, setAllFriend] = useState([]);
  const { callFriends, setCallFriends } = useContext(CallButtonContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data.json");
        const data = await res.json();
        setAllFriend(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const singleFriend = allFriend.find((friend) => friend.id === parseInt(id));

  if (!singleFriend) {
    return <div>Friend not found</div>;
  }

  const { name, days_since_contact, goal, next_due_date } = singleFriend;

  const handleCallClick = () => {
    setCallFriends([...callFriends, { ...singleFriend, type: "callToFriend" }]);
    toast(`✅ Calling with ${name}`, {
      // style: {
      //   width: "250px",
      //   height: "30px",
      // },
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  const handleTextClick = () => {
    setCallFriends([...callFriends, { ...singleFriend, type: "textToFriend" }]);
    toast(`✅ Text with ${name}`);
  };
  const handleVideoClick = () => {
    setCallFriends([
      ...callFriends,
      { ...singleFriend, type: "videoToFriend" },
    ]);
    toast(`Calling with ${name}`, {
      icon: <MdVideoCall style={{ fontSize: "38px" }} />,
    });
  };

  console.log(callFriends, "Friend Detail Content");

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-1 row-span-2">
        <FriendsCard
          from="friendDetail"
          friendInfo={singleFriend}
        ></FriendsCard>
      </div>
      <div className="flex justify-center items-center flex-col shadow-sm">
        <h2 className="text-[30px] font-semibold text-[#244D3F]">
          {days_since_contact}
        </h2>
        <p className="text-[18px] font-normal text-[#64748B]">
          Days Since Contact
        </p>
      </div>
      <div className="flex justify-center items-center flex-col shadow-sm">
        <h2 className="text-[30px] font-semibold text-[#244D3F]">{goal}</h2>
        <p className="text-[18px] font-normal text-[#64748B]">Goal (Days)</p>
      </div>
      <div className="flex justify-center items-center flex-col shadow-sm">
        <h2 className="text-[30px] font-semibold text-[#244D3F]">
          {/* Feb 27, 2026{next_due_date} */}
          {format(new Date(next_due_date), "MMM dd, yyyy")}
        </h2>
        <p className="text-[18px] font-normal text-[#64748B]">Next Due</p>
      </div>

      <div className="col-span-3 rounded-md  shadow-sm p-6">
        <div className="flex justify-between mb-4">
          <div className="text-[#244D3F] text-[20px] font-semibold">
            Relationship Goal
          </div>
          <button className="btn">Edit</button>
        </div>
        <div className="flex gap-2 text-[18px]">
          Connect every
          <span className="font-bold text-[#244D3F]">30 days</span>
        </div>
      </div>
      <div className="grid col-span-1 gap-2">
        <div className="px-4 py-2 rounded-md flex justify-center items-center shadow-sm gap-1 text-[26px]">
          <MdNotificationsPaused />
          <p className="text-[18px] font-semibold">Snooze 2 weeks</p>
        </div>
        <div className="px-4 py-2 rounded-md flex justify-center items-center shadow-sm gap-1 text-[18px]">
          <FiArchive />
          <p className="text-[18px] font-semibold">Archive</p>
        </div>
        <div className="px-4 py-2 rounded-md flex justify-center items-center shadow-sm gap-1 text-[20px] text-red-500">
          <IoTrashOutline />
          <p className="text-[18px] font-semibold">Delete</p>
        </div>
      </div>

      <div className="col-span-3 p-4 rounded-md shadow-sm">
        <h2 className="text-2xl mb-4 text-[#244D3F] font-semibold">
          Quick Check-In
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <button
            className="cursor-pointer shadow-md"
            onClick={handleCallClick}
          >
            <div className="flex flex-col justify-center items-center p-4 bg-[#F8FAFC] rounded-md">
              <div className="text-[36px] mb-2">
                <TbPhoneCall />
              </div>
              <p className="text-[18px]">Call</p>
            </div>
          </button>

          <button
            className="cursor-pointer shadow-md"
            onClick={handleTextClick}
          >
            <div className="flex flex-col justify-center items-center p-4 bg-[#F8FAFC] rounded-md">
              <div className="text-[36px] mb-2">
                <BiMessageDots />
              </div>
              <p className="text-[18px]">Text</p>
            </div>
          </button>

          <button
            className="cursor-pointer shadow-md"
            onClick={handleVideoClick}
          >
            <div className="flex flex-col justify-center items-center p-4 bg-[#F8FAFC] rounded-md">
              <div className="text-[36px] mb-2">
                <IoVideocamOutline />
              </div>
              <p className="text-[18px]">Video</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailPageContent;
