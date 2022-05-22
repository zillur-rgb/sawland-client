import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ToolsContext from "../ToolsContext/ToolsContext";
import ProductDetails from "../Components/Details/ProductDetails";
import NewProducts from "../Components/Products/NewProducts";

const Details = () => {
  const { id } = useParams();
  const { tools } = useContext(ToolsContext);
  const tool = tools.find((tool) => tool._id === id);
  return (
    <div className="w-full mx-auto">
      <ProductDetails tool={tool} />
      <NewProducts />
    </div>
  );
};

export default Details;
