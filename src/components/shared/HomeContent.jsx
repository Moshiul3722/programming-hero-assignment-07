import Link from "next/link";
import FriendsCard from "@/components/FriendsCard";
import Image from "next/image";

export default async function HomeContent() {
  const res = await fetch("http://localhost:3000/data.json");
  const friendsData = await res.json();
  console.log(friendsData, "Friends Data");
  return (
    <div>
      <div className="grid grid-cols-4 gap-6 mt-10 mb-10">
        <div className="p-8 bg-white text-center rounded-md shadow-sm">
          <h2 className="font-semibold text-[32px]">{friendsData.length}</h2>
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
            <Link key={friendInfo.id} href={`/friends/${friendInfo.id}`}>
              <FriendsCard
                from="homePage"
                key={index}
                friendInfo={friendInfo}
              ></FriendsCard>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
