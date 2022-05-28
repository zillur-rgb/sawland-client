import React from "react";
import { Link } from "react-router-dom";
import DeleteModal from "./DeleteModal";
import Payment from "./Payment";

const OrderTable = ({ order, handleDelete, setModal }) => {
  return (
    <>
      <tr key={order._id}>
        <th>#{order?._id.slice(-5, -1)}</th>
        <td>{order?.toolName}</td>
        <td>{order?.name}</td>
        <td>{order?.quantity}</td>
        <td>€{order?.total}</td>
        <td>{order?.city}</td>
        <td className="flex items-center gap-20">
          <button htmlFor="my-modal"></button>

          {order?.paid ? (
            <>
              <button
                // onClick={() => setModal(order)}
                onClick={() => handleDelete(order._id)}
                disabled
                className="btn bg-main hover:bg-red-600 modal-button text-text hover:text-white bg-opacity-25"
              >
                cancel
              </button>
              <p className="text-green-600 font-semibold">Paid</p>
            </>
          ) : (
            <>
              <button
                // onClick={() => setModal(order)}
                onClick={() => handleDelete(order._id)}
                className="btn bg-main hover:bg-red-600 modal-button text-text hover:text-white bg-opacity-25"
              >
                cancel
              </button>
              <Link to={`/payment/${order?._id}`} element={<Payment />}>
                <button className="btn bg-main">Pay Now</button>
              </Link>
            </>
          )}
        </td>
      </tr>

      {/* <DeleteModal handleDelete={handleDelete} /> */}
    </>
  );
};

export default OrderTable;
