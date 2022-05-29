import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import ToolsContext from "../../ToolsContext/ToolsContext";
import Loading from "../Shared/Loading";

const AllProducts = () => {
  // const { tools } = useContext(ToolsContext);
  const [expand, setExpand] = useState(false);
  const [user, loading] = useAuthState(auth);
  const [admin] = useAdmin(user);

  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("allTools", () =>
    fetch("http://localhost:5000/tools").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-40 my-65">
      {tools?.map((tool) => (
        <div
          key={tool.name}
          className="border border-text border-opacity-20 hover:border-opacity-100 cursor-pointer card card-compact w-full bg-base-100 shadow-xl"
        >
          <img className=" rounded-lg" src={tool.image} alt="Shoes" />
          <div className="card-body">
            <h2 className="card-title text-main text-2xl">{tool.name}</h2>
            <p className="text-text">
              {expand ? tool.desc.slice(0, 130) : tool.desc}
              <button
                onClick={() => setExpand(!expand)}
                className="text-main btn-link"
              >
                Expand
              </button>
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
              {!admin || !user ? (
                <Link to={`/tools/purchase/${tool._id}`}>
                  <button className="btn bg-main border-none hover:bg-hover">
                    Purchase Now
                  </button>
                </Link>
              ) : (
                <Link to={`/tools/purchase/${tool._id}`}>
                  <button className="btn bg-main border-none hover:bg-hover">
                    Manage the Product
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
