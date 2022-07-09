import React, { useCallback, useState } from "react";
import HeatmapDays from "./HeatmapDays";
import HeatmapHours from "./HeatmapHours";

const Heatmap = ({ postsPerDay }) => {
  const [selectedDayAndHour, setSelectedDayAndHour] = useState({
    day: null,
    hour: null,
  });

  const { day, hour } = selectedDayAndHour;
  const selectedPosts = (postsPerDay[day] && postsPerDay[day][hour]) || [];

  const updateSelectedDayAndHour = useCallback((newSelectedDayAndHour) => {
    setSelectedDayAndHour(newSelectedDayAndHour);
  }, []);
  return (
    <div className="max-w-[1115px] my-0 mx-auto mt-14">
      <HeatmapHours />
      <div className="flex max-h-[280px]"></div>
      <HeatmapDays />
    </div>
  );
};

export default Heatmap;
