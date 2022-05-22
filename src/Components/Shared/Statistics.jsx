import React from "react";

const Statistics = () => {
  return (
    <div className="stats shadow w-3/5 flex flex-col lg:flex-row items-center justify-between mx-auto my-60">
      <div className="stat place-items-center">
        <div className="stat-title">Products</div>
        <div className="stat-value">9</div>
        <div className="stat-desc">New Products being added Everyday</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Total Delivery</div>
        <div className="stat-value text-main">4000+</div>
        <div className="stat-desc text-main">Till May 2022</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Registered Users</div>
        <div className="stat-value">1,200&gt;</div>
        <div className="stat-desc">↘︎ 14%</div>
      </div>
    </div>
  );
};

export default Statistics;
