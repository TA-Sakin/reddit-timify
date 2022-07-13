import React, { useCallback, useState } from "react";
import HeatmapDays from "./HeatmapDays";
import HeatmapHours from "./HeatmapHours";
import HeatmapTiles from "./HeatmapTiles";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const Heatmap = ({ posts }) => {
  const [selectedDayAndHour, setSelectedDayAndHour] = useState({
    day: null,
    hour: null,
  });
  const { day, hour } = selectedDayAndHour;

  const rows = posts.map((days, i) => {
    const columns = days.map((hours, j) => (
      <HeatmapTiles
        key={uuidv4()}
        posts={hours}
        index={{ day: i, hour: j }}
        selected={selectedDayAndHour.day === i && selectedDayAndHour.hour === j}
        setSelected={setSelectedDayAndHour}
      />
    ));
    return columns;
  });

  return (
    <div className="max-w-[1115px] my-0 mx-auto mt-14">
      <HeatmapHours />
      <div className="flex max-h-[280px]">
        <HeatmapDays />
        <div className="flex flex-wrap flex-1">{rows}</div>
      </div>
      <div className="mt-4">
        <p className="text-center text-[#93918f] text-[14px]">
          All times are shown in your timezone:{" "}
          <span className="font-bold">
            {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </span>
        </p>
      </div>
    </div>
  );
};
Heatmap.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.array).isRequired,
};
export default Heatmap;
