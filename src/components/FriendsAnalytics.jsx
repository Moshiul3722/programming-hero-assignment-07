"use client";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { CallButtonContext } from "@/context/callButton.context";
import { useContext } from "react";
import Link from "next/link";

export default function FriendsAnalytics() {
  const { callFriends } = useContext(CallButtonContext);

  const typeColors = {
    textToFriend: "#7E35E1",
    callToFriend: "#244D3F",
    videoToFriend: "#37A163",
  };

  const chartData = Object.values(
    callFriends.reduce((acc, item) => {
      const text = item.type;
      const result = text.replace(/([A-Z])/g, " $1");
      const finalResult = result.charAt(0).toUpperCase() + result.slice(1);

      if (!acc[item.type]) {
        acc[item.type] = {
          name: finalResult,
          value: 0,
          fill: typeColors[item.type] || "#999", // default color
        };
      }
      acc[item.type].value += 1;
      return acc;
    }, {}),
  );

  return (
    <div className="mt-6 bg-white rounded-md p-6 shadow">
      <h2 className="text-[20px]">By Interaction Type</h2>
      {callFriends.length == 0 ? (
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
        <PieChart
          style={{
            width: "100%",
            maxWidth: "300px",
            maxHeight: "50vh",
            margin: "auto",
            aspectRatio: 1,
          }}
          responsive
        >
          <Pie
            data={chartData}
            innerRadius="80%"
            outerRadius="100%"
            // Corner radius is the rounded edge of each pie slice
            cornerRadius="50%"
            fill="#8884d8"
            // padding angle is the gap between each pie slice
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          />
          <Legend />
          <Tooltip />
        </PieChart>
      )}
    </div>
  );
}
