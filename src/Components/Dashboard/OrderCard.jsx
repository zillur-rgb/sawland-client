import React, { useEffect, useState } from "react";

const OrderCard = ({ paymentId, order }) => {
  return (
    <div className="w-3/4 mx-auto">
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Order Information (Click to see details)
        </div>
        <div className="collapse-content">
          <div className="card w-2/5 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{order?.toolName}</h2>
              <p>Ordered Tool : {order?.toolName}</p>
              <p>Quantity : {order?.quantity}</p>
              <p>Total Cost : {order?.total}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
