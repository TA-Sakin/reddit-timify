import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import logo1 from "../../Assets/logo1.png";
const Navbar = () => {
  return (
    <header className="h-[100px] flex items-center justify-between mx-32">
      <div>
        <Link className="flex items-center" to="/">
          <img className="h-9 mr-1" src={logo1} alt="" />
          <p className="font-extrabold text-[18px]">
            <span className="text-transparent bg-clip-text text-xl bg-gradient-to-r from-orange-500 to-black ">
              red
            </span>
            dit timify
          </p>
        </Link>
      </div>
      <div>
        <Link className="ml-[25px]" to="search">
          Search
        </Link>
        <Link className="ml-[25px]" to="">
          How it works
        </Link>
        <Link className="ml-[25px]" to="">
          About
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
