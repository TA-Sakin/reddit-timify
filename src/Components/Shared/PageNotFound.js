import React from "react";
import notFound from "../../Assets/404.png";
const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center">
      <img className=" min-h-[62vh]" src={notFound} alt="" />
    </div>
  );
};

export default PageNotFound;
