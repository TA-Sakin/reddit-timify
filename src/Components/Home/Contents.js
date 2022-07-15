import React from "react";
import table from "../../Assets/table.png";
import { Link } from "react-router-dom";
import { DEFAULT_SUBREDDIT } from "../Shared/Constant";
const Contents = () => {
  return (
    <div>
      <div className="text-center mt-7 mx-8">
        <h1 className="text-2xl md:text-4xl">
          No reactions to your reddit posts?
        </h1>
        <p className="text-[#93918F] mt-4 mb-12">
          Great timing, great results! Find the best time to post on your
          subreddit.
        </p>
        <Link
          to={`/search/${DEFAULT_SUBREDDIT}`}
          className="py-2 px-5 font-semibold bg-orange-400 text-white rounded-sm hover:bg-orange-500 focus:outline-none focus:ring-opacity-75 text-sm"
        >
          SHOW ME THE BEST TIME
        </Link>
        <p className="text-[#93918F] mt-8">r/{DEFAULT_SUBREDDIT}</p>
        <div className="flex justify-center mt-10">
          <Link to={`/search/${DEFAULT_SUBREDDIT}`}>
            <img src={table} alt="" />
          </Link>
        </div>
      </div>
      <div className="mx-12 lg:mx-[350px] mt-32">
        <div>
          <h3 id="howitworks" className="text-2xl">
            How it works
          </h3>
          <div className="text-[#93918F] mt-4">
            <p>
              • We find the 500 top posts from the past year for a subreddit.
            </p>
            <p>
              • The data is visualized in a heatmap grouped by weekday and hour
              of the day.
            </p>
            <p>• See immediately when to submit your reddit post.</p>
          </div>
        </div>
        <div className="mt-20 ">
          <h3 id="about" className="text-2xl">
            About
          </h3>
          <div className="text-[#93918F] max-w-2xl mt-4">
            <p>
              The idea of this app is taken from{" "}
              <a
                className="text-[#0087FF]"
                href="https://profy.dev/"
                alt="profydev"
                target="_blank"
                rel="noopener noreferrer"
              >
                profy.dev.{" "}
              </a>
              The goal of this app is to show you the best time to post on
              reddit with relevent data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contents;
