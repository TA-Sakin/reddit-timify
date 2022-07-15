import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo1 from "../../Assets/logo1.png";
import { DEFAULT_SUBREDDIT } from "./Constant";
const Navbar = () => {
  return (
    <header className="h-[100px] flex items-center justify-between mx-6 lg:mx-32">
      <div>
        <Link className="flex items-center" to="/">
          <img className="h-9 mr-1" src={logo1} alt="" />
          <p className="hidden sm:block font-extrabold text-[18px]">
            <span className="text-transparent bg-clip-text text-xl bg-gradient-to-r from-orange-500 to-black ">
              red
            </span>
            dit timify
          </p>
        </Link>
      </div>
      <div>
        <Link className="ml-4 md:ml-[25px]" to={`/search/${DEFAULT_SUBREDDIT}`}>
          Search
        </Link>
        <a smooth className="ml-4 md:ml-[25px]" href="/#howitworks">
          How it works
        </a>
        <a smooth className="ml-4 md:ml-[25px]" href="/#about">
          About
        </a>
      </div>
    </header>
  );
};

export default Navbar;
