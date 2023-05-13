import { useState } from "react";
import hero from "../../Assets/hero.jpg";
import OrderForm from "./OrderForm";

const ProductDetails = ({ tool, refetch }) => {
  return (
    <div className="mt-40 mb-100 w-full lg:w-3/4 mx-auto flex flex-col lg:flex-row items-center justify-between">
      <div className="hero-content flex-col items-start w-full lg:w-2/5 ">
        <h1 className="text-2xl font-header sm:text-3xl my-20 font-bold leading-15 text-header">
          You are purchsing <span className="text-main">{tool?.name}</span>
        </h1>
        <img
          src={tool?.image}
          className="border border-text block max-w-sm rounded-lg shadow-2xl"
        />
        <div className="w-full lg:text-left text-center">
          <p className="py-6 text-text font-text w-5/6 md:w-3/5 lg:w-auto mx-auto">
            {tool?.desc}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-text font-text text-xl my-3">
              Price:{" "}
              <span className="text-header font-bold">€{tool?.price}</span>
            </p>
            <p className="text-text font-text text-xl ">
              Stock:{" "}
              <span className="text-header font-bold">{tool?.stock}</span>
            </p>
          </div>
        </div>
      </div>
      <OrderForm
        stock={tool?.stock}
        sold={tool?.sold}
        price={tool?.price}
        _id={tool?._id}
        toolName={tool?.name}
        refetch={refetch}
      />
    </div>
  );
};

export default ProductDetails;
