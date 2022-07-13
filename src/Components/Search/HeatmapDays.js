import React from "react";
import { days } from "../Shared/Constant";

const HeatmapDays = () => {
  return (
    <div className="flex flex-col text-center min-w-[154px] bg-[#1e2537] pt-[10px]">
      {days.map((day) => (
        <span className="text-[#fff] min-h-[40px] font-[600] text-[15px]">
          {day}
        </span>
      ))}
    </div>
  );
};

export default HeatmapDays;
