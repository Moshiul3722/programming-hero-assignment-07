import FriendsCard from "@/components/FriendsCard";
import { BiMessageDots } from "react-icons/bi";
import { FiArchive } from "react-icons/fi";
import { IoTrashOutline, IoVideocamOutline } from "react-icons/io5";
import { MdNotificationsPaused } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";

const friendsPromise = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  return data;
};

const FriendDetailPage = async ({ params }) => {
  const { id } = await params;
  const friends = await friendsPromise();
  const friend = friends.find((friend) => friend.id === parseInt(id));

  console.log(friend, "Friend Id");

  return (
    <div className="w-7xl mx-auto py-20">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1 row-span-2">
          <FriendsCard friendInfo={friend}></FriendsCard>
        </div>
        <div className="flex justify-center items-center flex-col shadow-sm">
          <h2 className="text-[30px] font-semibold text-[#244D3F]">62</h2>
          <p className="text-[18px] font-normal text-[#64748B]">
            Days Since Contact
          </p>
        </div>
        <div className="flex justify-center items-center flex-col shadow-sm">
          <h2 className="text-[30px] font-semibold text-[#244D3F]">30</h2>
          <p className="text-[18px] font-normal text-[#64748B]">Goal (Days)</p>
        </div>
        <div className="flex justify-center items-center flex-col shadow-sm">
          <h2 className="text-[30px] font-semibold text-[#244D3F]">
            Feb 27, 2026
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
          <div className="p-4 rounded-md flex justify-center items-center shadow-sm gap-1 text-[26px]">
            <MdNotificationsPaused />
            <p className="text-[18px] font-semibold">Snooze 2 weeks</p>
          </div>
          <div className="p-4 rounded-md flex justify-center items-center shadow-sm gap-1 text-[18px]">
            <FiArchive />
            <p className="text-[18px] font-semibold">Archive</p>
          </div>
          <div className="p-4 rounded-md flex justify-center items-center shadow-sm gap-1 text-[20px] text-red-500">
            <IoTrashOutline />
            <p className="text-[18px] font-semibold">Delete</p>
          </div>
        </div>

        <div className="col-span-3 p-4 rounded-md shadow-sm">
          <h2 className="text-2xl mb-4 text-[#244D3F] font-semibold">
            Quick Check-In
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col justify-center items-center p-4 bg-[#F8FAFC] rounded-md">
              <div className="text-[36px] mb-2">
                <TbPhoneCall />
              </div>
              <p className="text-[18px]">Call</p>
            </div>
            <div className="flex flex-col justify-center items-center p-4 bg-[#F8FAFC] rounded-md">
              <div className="text-[36px] mb-2">
                <BiMessageDots />
              </div>
              <p className="text-[18px]">Call</p>
            </div>
            <div className="flex flex-col justify-center items-center p-4 bg-[#F8FAFC] rounded-md">
              <div className="text-[36px] mb-2">
                <IoVideocamOutline />
              </div>
              <p className="text-[18px]">Call</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailPage;
