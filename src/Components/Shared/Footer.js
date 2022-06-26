import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../../Assets/logo1.png";
import { FcReddit } from "react-icons/fc";

const Footer = () => {
  return (
    <div className="mx-32 text-[#93918F] h-[100px] mt-24 flex items-center justify-evenly">
      <Link className="flex items-center" to="/">
        <p className="">reddit timify</p>
      </Link>
      <button className="text-3xl">
        <FcReddit></FcReddit>
      </button>
      <div>
        <button>Terms & Privacy</button>
      </div>
    </div>
  );
};

export default Footer;
