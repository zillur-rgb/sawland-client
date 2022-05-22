import React, { useContext } from "react";
import ToolsContext from "../../ToolsContext/ToolsContext";

const AllProducts = () => {
  const { tools } = useContext(ToolsContext);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-40 my-65">
      {tools.map((tool) => (
        <div
          key={tool.name}
          className="border border-text border-opacity-20 hover:border-opacity-100 cursor-pointer card card-compact w-full bg-base-100 shadow-xl"
        >
          <img className=" rounded-lg" src={tool.image} alt="Shoes" />
          <div className="card-body">
            <h2 className="card-title text-main text-2xl">{tool.name}</h2>
            <p className="text-text">
              {tool.desc.slice(0, 130)}{" "}
              <button className="text-main btn-link">Expand</button>
            </p>
            <p className="text-text">
              <span className="font-bold">Best for: </span>
              {tool.BestFor}
            </p>
            <div className="card-actions items-center justify-end">
              <p className="text-header text-lg font-medium">
                Price:{" "}
                <span className="text-text font-bold">€{tool.price}</span>
              </p>
              <button className="btn bg-main border-none hover:bg-hover">
                Purchase Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
