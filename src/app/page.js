import FriendsCard from "@/components/FriendsCard";
import Image from "next/image";
import Link from "next/link";
import { GoPlus } from "react-icons/go";

const friendsPromise = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  return data;
};

export default async function Home() {
  const res = await fetch("http://localhost:3000/data.json");
  const friendsData = await res.json();
  console.log(friendsData, "Friends Data");
  return (
    <div className="bg-[#F8FAFC] pt-20 pb-20">
      <div className="w-7xl mx-auto">
        <div className="text-center">
          <h2 className="font-bold text-[48px] mb-4">
            Friends to keep close in your life
          </h2>
          <p className="w-145 mx-auto mb-8">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <Link href="#">
            <button className="flex mx-auto justify-center items-center gap-2 px-4 py-3 rounded-md bg-[#244D3F] text-white font-bold">
              <GoPlus />
              Add a Friend
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-4 gap-6 mt-10 mb-10">
          <div className="p-8 bg-white text-center rounded-md shadow-sm">
            <h2 className="font-semibold text-[32px]">10</h2>
            <p className="text-[18px] mt-2">Total Friends</p>
          </div>
          <div className="p-8 bg-white text-center rounded-md shadow-sm">
            <h2 className="font-semibold text-[32px]">3</h2>
            <p className="text-[18px] mt-2">On Track</p>
          </div>
          <div className="p-8 bg-white text-center rounded-md shadow-sm">
            <h2 className="font-semibold text-[32px]">6</h2>
            <p className="text-[18px] mt-2">Need Attention</p>
          </div>
          <div className="p-8 bg-white text-center rounded-md shadow-sm">
            <h2 className="font-semibold text-[32px]">12</h2>
            <p className="text-[18px] mt-2">Interactions This Month</p>
          </div>
        </div>
        <div className="border border-t-gray-200 border-r-0 border-l-0 border-b-0 mb-10"></div>
        <div>
          <h2 className="font-semibold text-[24px] mb-4">Your Friends</h2>
          <div className="grid grid-cols-4 gap-4">
            {friendsData.map((friendInfo, index) => (
              <FriendsCard key={index} friendInfo={friendInfo}></FriendsCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
