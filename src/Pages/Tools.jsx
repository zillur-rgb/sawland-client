import React, { useContext } from "react";
import AllProducts from "../Components/Products/AllProducts";
import ToolsContext from "../ToolsContext/ToolsContext";

const Tools = () => {
  return (
    <div className="w-3/4 mx-auto">
      <h1 className="text-main font-bold my-60 text-3xl text-center">
        Select Your Saw from variety of selection
      </h1>
      <AllProducts />
    </div>
  );
};

export default Tools;
