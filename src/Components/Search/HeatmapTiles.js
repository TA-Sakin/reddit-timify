import React from "react";
import { colors } from "../Shared/Constant";
import PropTypes from "prop-types";
import "./tiles.css";
const HeatmapTiles = ({ posts, index, selected, setSelected }) => {
  let count = posts.length;
  const color = count >= 10 ? colors[10] : colors[count];
  const handleClick = () => {
    setSelected(index);
  };

  return (
    <>
      <div
        onClick={handleClick}
        active={selected}
        style={{
          backgroundColor: `${color}`,
        }}
        className={`${
          selected && "m-active"
        } h-10 w-10 box-border text-gray-700 cursor-pointer flex justify-center items-center text-[14px] font-bold hover:border-[1px] border-solid border-black `}
      >
        {posts.length}
      </div>
    </>
  );
};
HeatmapTiles.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HeatmapTiles;
