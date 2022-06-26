import React from "react";
import table from "../../Assets/table.png";
const Contents = () => {
  return (
    <div className="text-center mt-7">
      <h1 className="text-4xl">No reactions to your reddit posts?</h1>
      <p className="text-[#93918F] mt-4">
        Great timing, great results! Find the best time to post on your
        subreddit.
      </p>
      <button className="py-2 px-5 font-semibold mt-12 bg-orange-400 text-white rounded-sm hover:bg-orange-500 focus:outline-none focus:ring-opacity-75 text-sm">
        SHOW ME THE BEST TIME
      </button>
      <p className="text-[#93918F] mt-8">r/javascript</p>
      <div className="flex justify-center mt-10">
        <img src={table} alt="" />
      </div>
    </div>
  );
};

export default Contents;
