import FriendsCard from "@/components/FriendsCard";
import { BiMessageDots } from "react-icons/bi";
import { FiArchive } from "react-icons/fi";
import { IoTrashOutline, IoVideocamOutline } from "react-icons/io5";
import { MdNotificationsPaused } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";
import { format } from "date-fns";
import CallButton from "@/components/CallButton";
import TextButton from "@/components/TextButton";
import VideoButton from "@/components/VideoButton";
import { useContext } from "react";
import { CallButtonContext } from "@/context/callButton.context";

const friendsPromise = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  return data;
};
// const something = useContext(CallButtonContext);

const FriendDetailPage = async ({ params }) => {
  const { id } = await params;
  const friends = await friendsPromise();
  const friend = friends.find((friend) => friend.id === parseInt(id));

  console.log(friend, "Friend Id");

  const { days_since_contact, goal, next_due_date } = friend;

  return (
    <div className="w-7xl mx-auto py-20">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1 row-span-2">
          <FriendsCard from="friendDetail" friendInfo={friend}></FriendsCard>
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
            <CallButton />
            <TextButton />
            <VideoButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailPage;
