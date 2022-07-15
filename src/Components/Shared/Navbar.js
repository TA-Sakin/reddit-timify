import React from "react";
// import { Link } from "react-router-dom";
import logo1 from "../../Assets/logo1.png";
import { DEFAULT_SUBREDDIT } from "./Constant";
import { HashLink as Link } from "react-router-hash-link";
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
        <Link smooth className="ml-4 md:ml-[25px]" to="/#howitworks">
          How it works
        </Link>
        <Link smooth className="ml-4 md:ml-[25px]" to="/#about">
          About
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
