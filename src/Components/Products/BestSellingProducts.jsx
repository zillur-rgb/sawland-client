import React, { useEffect, useState } from "react";

const BestSellingProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="w-3/4 mx-auto">
      <h1 className="text-main font-bold my-60 text-3xl text-center">
        Best Selling Tools
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-50">
        {products.slice(0, 3).map((product) => (
          <div
            key={product.name}
            className="border border-text border-opacity-20 hover:border-opacity-100 cursor-pointer card card-compact w-full bg-base-100 shadow-xl"
          >
            <img className=" rounded-lg" src={product.image} alt="Shoes" />
            <div className="card-body">
              <h2 className="card-title text-main text-2xl">{product.name}</h2>
              <p className="text-text">
                {product.desc.slice(0, 130)}{" "}
                <button className="text-main btn-link">Expand</button>
              </p>
              <p className="text-text">
                <span className="font-bold">Best for: </span>
                {product.BestFor}
              </p>
              <div className="card-actions items-center justify-end">
                <p className="text-header text-lg font-medium">
                  Price:{" "}
                  <span className="text-text font-bold">€{product.price}</span>
                </p>
                <button className="btn bg-main border-none hover:bg-hover">
                  Purchase Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellingProducts;
