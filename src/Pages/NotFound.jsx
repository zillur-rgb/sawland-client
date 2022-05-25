import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center flex-col items-center my-100 h-[450px]">
      <h1 className="text-9xl font-bold text-main text-opacity-40">
        4<span className="text-main">0</span>4
      </h1>
      <h1 className="text-3xl font-bold text-text text-opacity-40">
        No page found
      </h1>
      <Link to="/">
        <button className="btn bg-main border-none hover:bg-hover my-10">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
