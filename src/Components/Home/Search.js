import React from "react";

const Search = () => {
  return (
    <div className="mt-10 min-h-[57vh] mx-10">
      <h3 className="text-center text-2xl md:text-4xl">
        Find the best time for a subreddit
      </h3>
      <form className="flex justify-center">
        <div className="flex items-center mb-6 w-full max-w-lg mt-8">
          <div className="">
            <label className="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-3">
              r/
            </label>
          </div>
          <div className="w-full">
            <input className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-orange-500" />
          </div>
          <button
            className="py-[10px] ml-2 px-4 font-semibold bg-orange-400 text-white rounded-sm hover:bg-orange-500 focus:outline-none focus:ring-opacity-75 text-sm"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
