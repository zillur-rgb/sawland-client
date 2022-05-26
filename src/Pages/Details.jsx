import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ToolsContext from "../ToolsContext/ToolsContext";
import ProductDetails from "../Components/Details/ProductDetails";
import { useQuery } from "react-query";
import NewProducts from "../Components/Products/NewProducts";
import Loading from "../Components/Shared/Loading";
import { toast } from "react-toastify";

const Details = () => {
  const { id } = useParams();
  const {
    isLoading,
    refetch,
    data: tool,
  } = useQuery("singleTool", () =>
    fetch(`https://fast-ridge-03538.herokuapp.com/tools/${id}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading />;
  }
  // const tool = tools.find((tool) => tool._id === id);
  return (
    <div className="w-full mx-auto">
      <ProductDetails tool={tool} refetch={refetch} />
      <NewProducts />
    </div>
  );
};

export default Details;
