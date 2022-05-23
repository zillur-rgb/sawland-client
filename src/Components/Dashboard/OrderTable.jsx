import React from "react";
import DeleteModal from "./DeleteModal";

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
        <td className="flex gap-20">
          <button htmlFor="my-modal"></button>
          <label
            htmlFor="my-modal"
            // onClick={() => setModal(order)}
            onClick={() => handleDelete(order._id)}
            className="btn bg-main hover:bg-red-600 modal-button text-text hover:text-white bg-opacity-25"
          >
            cancel
          </label>
          <button className="btn bg-main">Pay Now</button>
        </td>
      </tr>

      {/* <DeleteModal handleDelete={handleDelete} /> */}
    </>
  );
};

export default OrderTable;
