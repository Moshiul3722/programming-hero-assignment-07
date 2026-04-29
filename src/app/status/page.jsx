import FriendsAnalytics from "@/components/FriendsAnalytics";
import TimelineContent from "@/components/TimelineContent";

const StatusPage = () => {
  return (
    <div className="bg-[#F8FAFC] py-20">
      <div className="w-7xl mx-auto">
        <h2 className="text-[48px] font-bold text-[#1F2937]">
          Friendship Analytics
        </h2>
        <FriendsAnalytics></FriendsAnalytics>
      </div>
    </div>
  );
};

export default StatusPage;
