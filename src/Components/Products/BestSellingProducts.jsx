import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import ToolsContext from "../../ToolsContext/ToolsContext";
import Loading from "../Shared/Loading";

const BestSellingProducts = () => {
  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("allTools", () =>
    fetch("http://localhost:5000/tools").then((res) => res.json())
  );
  if (tools?.length < 1) {
    return <p>Empty</p>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-3/4 mx-auto">
      <h1 className="text-main font-bold my-60 text-3xl text-center">
        Best Selling Tools
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-50">
        {tools?.slice(3, 6)?.map((tool) => (
          <div
            key={tool.name}
            className="border border-text border-opacity-20 hover:border-opacity-100 cursor-pointer card card-compact w-full bg-base-100 shadow-md"
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
                <Link to={`/tools/${tool._id}`}>
                  <button className="btn bg-main border-none hover:bg-hover">
                    Purchase Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellingProducts;
