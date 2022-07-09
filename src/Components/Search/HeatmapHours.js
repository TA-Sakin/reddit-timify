import React from "react";
import { hours } from "../Shared/Constant";
const HeatmapHours = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[154px] min-h-[52px] bg-white"></div>
      {hours.map((hour) => (
        <div
          style={{
            background: "linear-gradient(180deg, #fefefe 0%, #e9e9e9 100%)",
          }}
          className="h-[52px] flex flex-1 justify-around items-center border-solid border-[#f3f3f3]"
        >
          <span className="text-[#787878] text-[14px] font-medium">{hour}</span>
        </div>
      ))}
    </div>
  );
};

export default HeatmapHours;
